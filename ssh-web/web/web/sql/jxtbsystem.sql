/*
MySQL Data Transfer
Source Host: localhost
Source Database: bfsystem
Target Host: localhost
Target Database: bfsystem
Date: 2013-06-05 09:23:30
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for admin_roles
-- ----------------------------
DROP TABLE IF EXISTS `admin_roles`;
CREATE TABLE `admin_roles` (
  `aid` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  PRIMARY KEY  (`rid`,`aid`),
  KEY `FKF75AFDCD5946BA31` (`rid`),
  KEY `FKF75AFDCDCE68119D` (`aid`),
  CONSTRAINT `FKF75AFDCD5946BA31` FOREIGN KEY (`rid`) REFERENCES `tb_role` (`id`),
  CONSTRAINT `FKF75AFDCDCE68119D` FOREIGN KEY (`aid`) REFERENCES `tb_admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_res
-- ----------------------------
DROP TABLE IF EXISTS `role_res`;
CREATE TABLE `role_res` (
  `resId` int(11) NOT NULL,
  `rid` int(11) NOT NULL,
  PRIMARY KEY  (`rid`,`resId`),
  KEY `FKF0213D5741055B77` (`resId`),
  KEY `FKF0213D575946BA31` (`rid`),
  CONSTRAINT `FKF0213D5741055B77` FOREIGN KEY (`resId`) REFERENCES `tb_resource` (`id`),
  CONSTRAINT `FKF0213D575946BA31` FOREIGN KEY (`rid`) REFERENCES `tb_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_account
-- ----------------------------
DROP TABLE IF EXISTS `tb_account`;
CREATE TABLE `tb_account` (
  `id` int(11) NOT NULL auto_increment,
  `uname` varchar(255) default NULL,
  `upwd` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_admin
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  `account` varchar(255) default NULL,
  `phone` varchar(255) default NULL,
  `area` varchar(255) default NULL,
  `address` varchar(255) default NULL,
  `flag` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_attestationinfo
-- ----------------------------
DROP TABLE IF EXISTS `tb_attestationinfo`;
CREATE TABLE `tb_attestationinfo` (
  `id` int(11) NOT NULL auto_increment,
  `attestationNo` int(11) default NULL,
  `flag` int(11) default NULL,
  `pid` int(11) default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `pid` (`pid`),
  KEY `FK735DB7CD9F170C` (`pid`),
  CONSTRAINT `FK735DB7CD9F170C` FOREIGN KEY (`pid`) REFERENCES `tb_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_enterprise
-- ----------------------------
DROP TABLE IF EXISTS `tb_enterprise`;
CREATE TABLE `tb_enterprise` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `area` varchar(255) default NULL,
  `address` varchar(255) default NULL,
  `typeName` varchar(255) default NULL,
  `flag` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_product
-- ----------------------------
DROP TABLE IF EXISTS `tb_product`;
CREATE TABLE `tb_product` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `attestation` int(11) default NULL,
  `validate` int(11) default NULL,
  `reddereIus` int(11) default NULL,
  `flag` int(11) default NULL,
  `eid` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FKED97341EF41481CF` (`eid`),
  CONSTRAINT `FKED97341EF41481CF` FOREIGN KEY (`eid`) REFERENCES `tb_enterprise` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_reddereiusinfo
-- ----------------------------
DROP TABLE IF EXISTS `tb_reddereiusinfo`;
CREATE TABLE `tb_reddereiusinfo` (
  `id` int(11) NOT NULL auto_increment,
  `caseNo` varchar(255) default NULL,
  `caseName` varchar(255) default NULL,
  `flag` int(11) default NULL,
  `pid` int(11) default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `pid` (`pid`),
  KEY `FK5F7ACDC19F170C` (`pid`),
  CONSTRAINT `FK5F7ACDC19F170C` FOREIGN KEY (`pid`) REFERENCES `tb_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_resource
-- ----------------------------
DROP TABLE IF EXISTS `tb_resource`;
CREATE TABLE `tb_resource` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `value` varchar(255) default NULL,
  `url` varchar(255) default NULL,
  `pid` int(11) default NULL,
  `flag` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FKECCF42BF3A90EF47` (`pid`),
  CONSTRAINT `FKECCF42BF3A90EF47` FOREIGN KEY (`pid`) REFERENCES `tb_resource` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_role
-- ----------------------------
DROP TABLE IF EXISTS `tb_role`;
CREATE TABLE `tb_role` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `value` varchar(255) default NULL,
  `flag` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tb_validateinfo
-- ----------------------------
DROP TABLE IF EXISTS `tb_validateinfo`;
CREATE TABLE `tb_validateinfo` (
  `id` int(11) NOT NULL auto_increment,
  `validateNo` int(11) default NULL,
  `validateUserName` varchar(255) default NULL,
  `flag` int(11) default NULL,
  `pid` int(11) default NULL,
  PRIMARY KEY  (`id`),
  UNIQUE KEY `pid` (`pid`),
  KEY `FKF16035159F170C` (`pid`),
  CONSTRAINT `FKF16035159F170C` FOREIGN KEY (`pid`) REFERENCES `tb_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `admin_roles` VALUES ('1', '1');
INSERT INTO `admin_roles` VALUES ('2', '1');
INSERT INTO `admin_roles` VALUES ('3', '2');
INSERT INTO `role_res` VALUES ('1', '1');
INSERT INTO `role_res` VALUES ('1', '2');
INSERT INTO `role_res` VALUES ('2', '1');
INSERT INTO `role_res` VALUES ('2', '2');
INSERT INTO `role_res` VALUES ('3', '1');
INSERT INTO `role_res` VALUES ('3', '2');
INSERT INTO `role_res` VALUES ('6', '1');
INSERT INTO `role_res` VALUES ('6', '2');
INSERT INTO `role_res` VALUES ('7', '2');
INSERT INTO `role_res` VALUES ('8', '2');
INSERT INTO `tb_admin` VALUES ('1', '张三', '123', 'admin', '123', '四川', '四川成都', '1');
INSERT INTO `tb_admin` VALUES ('2', '北风', '123', 'bf', '123', '上海', '上海', '1');
INSERT INTO `tb_admin` VALUES ('3', '北风网', '123', 'bf007', '138812345678', '上海', '上海', '1');
INSERT INTO `tb_attestationinfo` VALUES ('1', '1001', '1', '1');
INSERT INTO `tb_attestationinfo` VALUES ('2', '10011', '1', '2');
INSERT INTO `tb_attestationinfo` VALUES ('3', '100210', '1', '3');
INSERT INTO `tb_enterprise` VALUES ('1', '长安集团', '江北', '重庆江北', '自愿认证', '1');
INSERT INTO `tb_enterprise` VALUES ('2', '重庆建设', '谢家湾', '谢家湾', '自愿认证', '1');
INSERT INTO `tb_enterprise` VALUES ('3', '重庆达内', '杨家坪', '杨家坪', '强制认证', '1');
INSERT INTO `tb_product` VALUES ('1', '长安福特', '1', '0', '0', '1', '1');
INSERT INTO `tb_product` VALUES ('2', '福特翼虎', '1', '0', '0', '1', '1');
INSERT INTO `tb_product` VALUES ('3', '长安面包', '1', '1', '1', '1', '1');
INSERT INTO `tb_product` VALUES ('4', '建设摩托', '0', '0', '1', '1', '2');
INSERT INTO `tb_reddereiusinfo` VALUES ('1', '10110', '自动器问题', '1', '1');
INSERT INTO `tb_reddereiusinfo` VALUES ('2', '10011', '面包车有问题', '1', '3');
INSERT INTO `tb_reddereiusinfo` VALUES ('3', '12011', '摩托制动问题', '1', '4');
INSERT INTO `tb_resource` VALUES ('1', '系统管理', '系统管理', '系统管理', null, '1');
INSERT INTO `tb_resource` VALUES ('2', '资源管理', '资源管理', '/res/res_index.action', '1', '1');
INSERT INTO `tb_resource` VALUES ('3', '资源管理新增', '资源管理新增', '/res/res_showAdd2.action', '2', '1');
INSERT INTO `tb_resource` VALUES ('5', '资源管理删除', '资源管理删除', '/res/res_logicDel.action', '2', '1');
INSERT INTO `tb_resource` VALUES ('6', '用户管理', 'yhgl', '/adm/adm_showAdmin.action', '1', '1');
INSERT INTO `tb_resource` VALUES ('7', '统计查询管理', '统计查询管理', '统计查询管理', null, '1');
INSERT INTO `tb_resource` VALUES ('8', '报表管理', 'bbgl', '/report/report_index.action', '7', '1');
INSERT INTO `tb_role` VALUES ('1', '管理员', 'manager', '1');
INSERT INTO `tb_role` VALUES ('2', '老板', 'boss', '1');
INSERT INTO `tb_validateinfo` VALUES ('1', '1010', '张三', '1', '1');
INSERT INTO `tb_validateinfo` VALUES ('2', '10011', 'bf', '1', '3');
