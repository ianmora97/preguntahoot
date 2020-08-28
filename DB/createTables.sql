------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema preguntados
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema preguntados
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `preguntados` DEFAULT CHARACTER SET utf8mb4 ;
USE `preguntados` ;

-- -----------------------------------------------------
-- Table `preguntados`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preguntados`.`categoria` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UNIQUE_CAT` (`nombre`));


-- -----------------------------------------------------
-- Table `preguntados`.`pregunta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preguntados`.`pregunta` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `texto` VARCHAR(255) NOT NULL,
  `r_a` VARCHAR(50) NOT NULL,
  `r_b` VARCHAR(50) NOT NULL,
  `r_c` VARCHAR(50) NOT NULL,
  `r_d` VARCHAR(50) NOT NULL,
  `categoria` INT(11) NOT NULL,
  `correcta` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UNIQUE_PRE` (`texto` ) ,
  INDEX `categoria_fk` USING BTREE (`categoria`) ,
  CONSTRAINT `pregunta_ibfk_1`
    FOREIGN KEY (`categoria`)
    REFERENCES `preguntados`.`categoria` (`id`));


-- -----------------------------------------------------
-- Table `preguntados`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `preguntados`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `clave` VARCHAR(16) NOT NULL,
  `rol` INT(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_uq` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4;


-- create table keygame
CREATE TABLE IF NOT EXISTS `preguntados`.`keygame` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UNIQUE_TOK` (`token`));

