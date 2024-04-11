CREATE TABLE public."users" (
	id serial NOT null,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_unique UNIQUE (username)
);

CREATE TABLE public."event" (
	id serial NOT null,
	"name" varchar NOT NULL,
	address varchar NOT NULL,
	latitude decimal NULL,
	longitude decimal NULL,
	"date" date NOT NULL,
	country varchar NOT NULL,
	city varchar NOT NULL,
	description varchar NULL,
	CONSTRAINT event_pk PRIMARY KEY (id)
);


-- tabla para relacionar usuarios y los eventos a los que asisten
CREATE TABLE public."user_event" (
	user_id int NOT NULL,
	event_id int NOT NULL,
	CONSTRAINT assistant_pk PRIMARY KEY (user_id,event_id),
	CONSTRAINT assistant_user_fk FOREIGN KEY (user_id) REFERENCES public."users"(id) ON DELETE SET CASCADE ON UPDATE CASCADE,
	CONSTRAINT assistant_event_fk FOREIGN KEY (event_id) REFERENCES public."event"(id) ON DELETE SET CASCADE ON UPDATE CASCADE
);

INSERT INTO "users"  (username, password, name) VALUES ('user1', 'pass', 'Santiago');
INSERT INTO "users" (username, password, name) VALUES ('user2', 'pass2', 'Daniel');
INSERT INTO "users" (username, password, name) VALUES ('user3', 'pass3', 'Maria');

INSERT INTO "event" (name, address, date, country, city) VALUES ('Partido de futbol', 'Cra. 74 #48-10', '2024-04-05', 'Colombia', 'Medellin');
INSERT INTO "event" (name, address, date, country, city) VALUES ('Concierto', 'Cl. 35 #80a-02', '2024-04-06', 'Colombia', 'Medellin');
INSERT INTO "event" (name, address, date, country, city) VALUES ('Feria', 'Cra. 84 #45d-24', '2024-04-05', 'Colombia', 'Medellin');

INSERT INTO "user_event" (user_id, event_id) VALUES (0,0);
INSERT INTO "user_event" (user_id, event_id) VALUES (0,1);
INSERT INTO "user_event" (user_id, event_id) VALUES (0,2);
INSERT INTO "user_event" (user_id, event_id) VALUES (1,1);
INSERT INTO "user_event" (user_id, event_id) VALUES (1,2);
INSERT INTO "user_event" (user_id, event_id) VALUES (2,2);