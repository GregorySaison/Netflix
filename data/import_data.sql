BEGIN;

DROP TABLE IF EXISTS "title";

CREATE TABLE IF NOT EXISTS "title" (
    "id" INT NOT NULL PRIMARY KEY,
    "name"  VARCHAR(255), 
    "title" VARCHAR(255),
    "category"  VARCHAR(255),
    "illustration"  VARCHAR(255)
);

INSERT INTO "title" ("id", "name", "title", "category", "illustration") VALUES
(1, 'boruto', 'Boruto', 'anime', 'img/illustration/boruto.png'),
(2, 'breaking bad', 'Breaking Bad', 'serie', 'img/illustration/breakingbad.png'),
(3, 'brooklyn 99', 'Brooklyn 99', 'serie', 'img/illustration/brooklyn99.png'),
(4, 'community', 'Community', 'serie', 'img/illustration/community.png'),
(5, 'the dark knight', 'The Dark Knight', 'film', 'img/illustration/darkknight.png'),
(6, 'demon slayer', 'Demon Slayer', 'anime', 'img/illustration/demonslayer.png'),
(7, 'interstellar', 'Interstellar', 'film', 'img/illustration/interstellar.png'),
(8, 'matrix', 'Matrix', 'film', 'img/illustration/matrix.png'),
(9, 'oceans eleven', 'Oceans Eleven', 'film', 'img/illustration/ocean11.png'),
(10, 'naruto shippuden', 'Naruto Shippuden', 'anime', 'img/illustration/shippuden.png'),
(11, 'shingeki no kyojin', 'Shingeki no Kyojin', 'anime', 'img/illustration/snk.png'),
(12, 'spider-man 3', 'Spider-Man 3', 'film', 'img/illustration/spiderman3.png'),
(13, 'le stratège', 'Le Stratège', 'film', 'img/illustration/stratege.png'),
(14, 'the big bang theory', 'The Big Bang Theory', 'serie', 'img/illustration/tbbt.png'),
(15, 'teen wolf', 'Teen Wolf', 'serie', 'img/illustration/teenwolf.png'),
(16, 'viking', 'Viking', 'serie', 'img/illustration/viking.png')

COMMIT;