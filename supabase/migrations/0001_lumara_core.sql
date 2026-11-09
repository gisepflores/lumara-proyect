-- Lumara core schema (initial draft). Review and test in a development project.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_locale text not null default 'es' check (preferred_locale in ('es','en','pt')),
  timezone text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.provider_identities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  provider text not null check (provider in ('whop','google','zoom')),
  provider_user_id text not null,
  provider_account_id text,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  unique(provider, provider_user_id),
  unique(user_id, provider)
);

create table if not exists public.instructors (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  display_name text not null,
  bio jsonb not null default '{}'::jsonb,
  specialties text[] not null default '{}',
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title jsonb not null,
  description jsonb not null default '{}'::jsonb,
  instructor_id uuid references public.instructors(id) on delete set null,
  whop_product_id text,
  price_minor bigint,
  currency char(3) not null default 'USD',
  access_model text not null default 'lifetime' check (access_model = 'lifetime'),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  title jsonb not null,
  position integer not null,
  unique(course_id, position)
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules(id) on delete cascade,
  title jsonb not null,
  description jsonb not null default '{}'::jsonb,
  mux_asset_id text,
  mux_playback_id text,
  duration_seconds integer,
  position integer not null,
  is_preview boolean not null default false,
  status text not null default 'draft' check (status in ('draft','published')),
  unique(module_id, position)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  provider text not null default 'whop' check (provider = 'whop'),
  provider_checkout_id text unique,
  provider_payment_id text unique,
  status text not null default 'pending' check (status in ('pending','processing','paid','failed','partially_refunded','refunded','disputed','cancelled')),
  amount_minor bigint not null check (amount_minor >= 0),
  currency char(3) not null default 'USD',
  idempotency_key text not null unique,
  created_at timestamptz not null default now(),
  paid_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  course_id uuid references public.courses(id),
  product_type text not null check (product_type in ('course','session','ebook','digital_product','workshop')),
  provider_product_id text,
  title_snapshot text not null,
  quantity integer not null default 1 check (quantity > 0),
  unit_amount_minor bigint not null check (unit_amount_minor >= 0),
  currency char(3) not null default 'USD'
);

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null default 'whop',
  provider_event_id text not null unique,
  event_type text not null,
  payload jsonb not null,
  processed_at timestamptz,
  processing_status text not null default 'received' check (processing_status in ('received','processed','ignored','failed')),
  created_at timestamptz not null default now()
);

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  order_id uuid not null references public.orders(id),
  status text not null default 'active' check (status in ('active','suspended','revoked')),
  access_type text not null default 'lifetime' check (access_type = 'lifetime'),
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  revocation_reason text,
  unique(user_id, course_id, order_id)
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  watched_seconds integer not null default 0 check (watched_seconds >= 0),
  completion_percent numeric(5,2) not null default 0 check (completion_percent between 0 and 100),
  last_position_seconds integer not null default 0 check (last_position_seconds >= 0),
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create table if not exists public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  service_slug text not null,
  timezone text not null,
  weekday smallint not null check (weekday between 0 and 6),
  start_time time not null,
  end_time time not null,
  duration_minutes integer not null check (duration_minutes > 0),
  buffer_minutes integer not null default 0 check (buffer_minutes >= 0),
  is_active boolean not null default true
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id),
  service_slug text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  timezone text not null,
  status text not null default 'hold' check (status in ('hold','pending_payment','confirmed','reschedule_requested','rescheduled','cancelled','completed','no_show','expired')),
  order_id uuid references public.orders(id),
  google_event_id text,
  zoom_meeting_id text,
  zoom_join_url text,
  hold_expires_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create table if not exists public.consultations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  name text not null,
  email text not null,
  topic text,
  message text not null,
  status text not null default 'received' check (status in ('received','in_review','responded','proposal_sent','awaiting_response','converted','closed')),
  created_at timestamptz not null default now()
);

create table if not exists public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references public.profiles(id) on delete set null,
  action text not null,
  resource_type text not null,
  resource_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- Enable RLS. Policies are intentionally restrictive and must be added per table
-- before the application is connected. Service-role operations remain server-only.
alter table public.profiles enable row level security;
alter table public.provider_identities enable row level security;
alter table public.instructors enable row level security;
alter table public.courses enable row level security;
alter table public.course_modules enable row level security;
alter table public.lessons enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.payment_events enable row level security;
alter table public.entitlements enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.availability_rules enable row level security;
alter table public.bookings enable row level security;
alter table public.consultations enable row level security;
alter table public.audit_events enable row level security;

-- Deliberately no permissive policies are created in this starter migration.
-- Add and test customer/admin policies in a separate migration before launch.
