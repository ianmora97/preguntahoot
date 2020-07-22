-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
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
  UNIQUE INDEX `UNIQUE_CAT` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


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
  UNIQUE INDEX `UNIQUE_PRE` (`texto` ASC) VISIBLE,
  INDEX `categoria_fk` USING BTREE (`categoria`) VISIBLE,
  CONSTRAINT `pregunta_ibfk_1`
    FOREIGN KEY (`categoria`)
    REFERENCES `preguntados`.`categoria` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


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


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
