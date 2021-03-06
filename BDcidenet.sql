PGDMP                         y            cidenet    13.3    13.3 	    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    62136    cidenet    DATABASE     k   CREATE DATABASE cidenet WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE cidenet;
                postgres    false            o           1247    64252    enum_empleados_status    TYPE     S   CREATE TYPE public.enum_empleados_status AS ENUM (
    'active',
    'inactive'
);
 (   DROP TYPE public.enum_empleados_status;
       public          postgres    false            ?            1259    64257 	   empleados    TABLE       CREATE TABLE public.empleados (
    name1 character varying(255) NOT NULL,
    name2 character varying(255),
    "lastName1" character varying(255) NOT NULL,
    "lastName2" character varying(255) NOT NULL,
    country text NOT NULL,
    "idType" character varying(255) NOT NULL,
    id character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    "startDate" date NOT NULL,
    area character varying(255) NOT NULL,
    status public.enum_empleados_status NOT NULL,
    "regDate" character varying(255) NOT NULL
);
    DROP TABLE public.empleados;
       public         heap    postgres    false    623            ?          0    64257 	   empleados 
   TABLE DATA           ?   COPY public.empleados (name1, name2, "lastName1", "lastName2", country, "idType", id, email, "startDate", area, status, "regDate") FROM stdin;
    public          postgres    false    200   ?
       %           2606    64266    empleados empleados_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.empleados DROP CONSTRAINT empleados_email_key;
       public            postgres    false    200            '           2606    64264    empleados empleados_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.empleados DROP CONSTRAINT empleados_pkey;
       public            postgres    false    200            ?   ?  x????r?0?????? 6pU???L&??F??V
?áӾ}?m??Ǹ?w???????09??O????'P?J?OR@ ?&?r?)?bhe!???F}*??l?^/T?P??kþ?.?}?
?؀(z??Ӹ?o?(?׳,->??Xʾ|???Ll?=??d?@/?????n?E?N҉?TK?,c?E,???N??lk?)p???dڡ??J??u?ިd?mE???P?C+Nc? Z?K?R3~?&?"?&P?b'ݪ?Tch?^?F?]͏?C??9D~????_???^?}?t?tJl@J?r7J??U?[ѝ?Rã???%SK??!?U?ي^vL?e??;ܳUz'?}?Ƶ??V6?)d9?+?|???߆,??*g){????h4?????w??ʲڌ?????3]-?9N??燝??????@??J?????V??dSӣ?U????[?df)? 	?5K?c???c?Ĵ-?W??zjU7?'睶<?֢<???w,	G???f?	??M??`zQ?qszP`?p??l?	??Ο???(좛??h?A????me?AqG?f]6??G[??aƂ?,??0]?<cG????g???Oe??l????L<bhK?@x?????????_???&<?]???Q???sZ??U?4?7?#??     