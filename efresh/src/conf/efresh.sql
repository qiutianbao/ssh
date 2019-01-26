/*
Navicat MySQL Data Transfer

Source Server         : eflesh
Source Server Version : 50173
Source Host           : 121.46.0.219:3306
Source Database       : efresh

Target Server Type    : MYSQL
Target Server Version : 50173
File Encoding         : 65001

Date: 2016-04-08 20:11:38
*/
create database efresh;
use efresh;

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `accountrevenue`
-- ----------------------------
DROP TABLE IF EXISTS `accountrevenue`;
CREATE TABLE `accountrevenue` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-收益表主键',
  `revenueamount` decimal(16,2) DEFAULT NULL COMMENT '收益金额',
  `revenueaource` int(11) DEFAULT NULL COMMENT '收益来源，0=下订单并成功支付，1=充值虚拟货币，2=推荐收益',
  `accumulatedEarnings` decimal(16,2) DEFAULT NULL COMMENT '累计收益',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `idUseraccount` int(11) DEFAULT NULL COMMENT '账户主键',
  `idTradingrecords` int(11) DEFAULT NULL COMMENT '用户交易记录表主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1103 DEFAULT CHARSET=utf8 COMMENT='支付管理-收益表accountrevenue';

-- ----------------------------
-- Records of accountrevenue
-- ----------------------------
INSERT INTO accountrevenue VALUES ('1000', '100.00', '1', null, '1000', '100002', null, '2016-01-27 12:12:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1001', '50.00', '1', null, '1000', '100002', null, '2016-01-28 12:12:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1002', '68.00', '1', null, '1000', '100002', '1', '2016-02-22 12:00:00', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1003', '50.00', '1', null, '1000', '100002', '1', '2016-02-22 11:41:04', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1004', '47.00', '1', null, '1000', '100002', '1', '2016-02-22 11:41:04', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1005', '65.00', '1', null, '1000', '100002', '1', '2016-02-22 11:45:05', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1006', '100.00', '0', null, '1000', '100002', null, '2016-02-22 16:00:00', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1007', '34.00', '1', null, '1000', '100002', '1', '2016-02-22 16:25:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1008', '65.00', '1', null, '1000', '100002', '1', '2016-02-22 16:30:49', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1009', '35.00', '1', null, '1000', '100002', '1', '2016-02-22 16:32:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1010', '52.00', '1', null, '1000', '100002', '1', '2016-02-22 16:33:48', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1011', '60.00', '1', null, '1000', '100002', '1', '2016-02-22 16:37:32', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1012', '61.00', '1', null, '1000', '100002', '1', '2016-02-22 16:38:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1013', '51.00', '1', null, '1000', '100002', '1', '2016-02-22 16:57:47', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1014', '63.00', '1', null, '1000', '100002', '1', '2016-02-22 17:10:10', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1015', '54.00', '1', null, '1000', '100002', '1', '2016-02-22 17:46:26', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1016', '53.00', '1', null, '1000', '100002', '1', '2016-02-22 17:54:14', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1017', '38.00', '1', null, '1000', '100002', '1', '2016-02-22 17:57:08', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1018', '32.00', '1', null, '1000', '100002', '1', '2016-02-22 17:59:00', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1019', '31.00', '1', null, '1000', '100002', '1', '2016-02-23 09:09:54', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1020', '54.00', '1', null, '1000', '100002', '1', '2016-02-23 10:56:52', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1021', '49.00', '1', null, '1000', '100002', '1', '2016-02-23 11:11:37', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1022', '68.00', '1', null, '1000', '100002', '1', '2016-02-23 11:17:07', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1023', '64.00', '1', null, '1000', '100002', '1', '2016-02-23 11:21:34', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1024', '49.00', '1', null, '1000', '100002', '1', '2016-02-23 11:21:34', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1025', '64.00', '1', null, '1000', '100002', '1', '2016-02-23 11:48:21', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1026', '99.00', '0', null, '1000', '100002', null, '2016-02-23 11:21:34', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1027', '53.00', '1', null, '1000', '100002', '1', '2016-02-24 11:05:33', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1028', '49.00', '1', null, '1000', '100002', '1', '2016-02-24 11:08:44', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1029', '37.00', '1', null, '1000', '100002', '1', '2016-02-24 11:08:48', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1030', '55.00', '1', null, '1000', '100002', '1', '2016-02-24 11:17:22', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1031', '49.00', '1', null, '1000', '100002', '1', '2016-02-24 11:17:46', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1032', '36.00', '1', null, '1000', '100002', '1', '2016-02-24 11:19:21', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1033', '48.00', '1', null, '1000', '100002', '1', '2016-02-24 11:19:35', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1034', '48.00', '1', null, '1000', '100002', '1', '2016-02-24 11:20:42', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1035', '58.00', '1', null, '1000', '100002', '1', '2016-02-24 11:20:45', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1036', '54.99', '1', null, '1000', '100002', '1', '2016-02-24 11:24:23', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1037', '31.00', '1', null, '1000', '100002', '1', '2016-02-24 11:24:25', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1039', '59.00', '1', null, '1000', '100002', '1', '2016-02-26 11:50:53', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1040', '30.00', '1', null, '1000', '100002', '1', '2016-03-04 11:02:05', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1041', '40.00', '1', null, '1000', '100002', '1', '2016-03-18 14:52:26', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1042', '45.00', '1', null, '1086', '100002', '1', '2016-03-25 15:59:45', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1043', '40.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:10', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1044', '31.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:14', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1045', '56.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:14', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1046', '51.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:15', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1047', '69.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:15', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1048', '49.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:15', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1049', '47.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1050', '33.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1051', '48.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1052', '32.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1053', '40.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1054', '34.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1055', '33.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1056', '56.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:17', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1057', '39.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:17', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1058', '61.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1059', '63.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1060', '69.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1061', '68.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1062', '47.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:19', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1063', '50.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:19', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1064', '40.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:19', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1065', '47.00', '1', null, '1086', '100002', '1', '2016-03-25 16:00:19', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1066', '48.00', '1', null, '1000', '100002', '1', '2016-03-25 16:09:59', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1067', '62.00', '1', null, '1000', '100002', '1', '2016-03-25 16:10:27', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1068', '60.00', '1', null, '1000', '100002', '1', '2016-03-25 16:11:11', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1069', '42.00', '1', null, '1000', '100002', '1', '2016-03-25 16:12:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1070', '49.00', '1', null, '1086', '100002', '1', '2016-03-25 16:17:24', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1071', '61.00', '1', null, '1086', '100002', '1', '2016-03-25 16:17:26', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1072', '45.00', '1', null, '1086', '100002', '1', '2016-03-25 16:17:53', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1073', '63.00', '1', null, '1000', '100002', '1', '2016-03-25 16:28:57', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1074', '55.00', '1', null, '1000', '100002', '1', '2016-03-25 16:29:45', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1075', '0.00', '1', null, '1000', '100002', '1011', '2016-03-25 17:07:53', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1076', '0.00', '1', null, '1000', '100002', '1012', '2016-03-25 17:08:38', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1077', '0.00', '1', null, '1086', '100012', '1013', '2016-03-25 17:27:09', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1078', '0.00', '1', null, '1086', '100012', '1014', '2016-03-25 17:28:33', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1079', '0.00', '1', null, '1086', '100012', '1015', '2016-03-25 17:32:19', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1080', '0.00', '1', null, '1000', '100002', '1016', '2016-03-25 17:44:44', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1081', '0.00', '1', null, '1086', '100012', '1017', '2016-03-29 17:16:12', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1082', '55.00', '1', null, '1077', '100010', '1', '2016-03-29 17:57:06', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1083', '67.00', '1', null, '1077', '100010', '1', '2016-03-29 17:57:53', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1084', '53.00', '1', null, '1000', '100002', '1', '2016-03-30 10:09:45', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1085', '46.00', '1', null, '1000', '100002', '1', '2016-03-30 10:09:54', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1086', '62.00', '1', null, '1077', '100010', '4', '2016-03-30 13:59:18', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1087', '58.00', '1', null, '1077', '100010', '4', '2016-03-30 14:00:08', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1088', '40.00', '1', null, '1077', '100010', '4', '2016-03-30 14:02:07', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1089', '0.00', '1', null, '1077', '100010', '1032', '2016-03-31 11:08:50', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1090', '0.00', '1', null, '1000', '100002', '1060', '2016-03-31 14:24:28', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1091', '0.00', '1', null, '1077', '100010', '1062', '2016-03-31 14:26:53', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1092', '0.00', '1', null, '1000', '100002', '1064', '2016-03-31 14:28:54', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1093', '0.00', '1', null, '1000', '100002', '1066', '2016-03-31 14:41:21', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1094', '0.00', '1', null, '1000', '100002', '1068', '2016-03-31 14:50:11', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1095', '0.00', '1', null, '1000', '100002', '1070', '2016-03-31 15:00:22', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1096', '0.00', '1', null, '1000', '100002', '1072', '2016-03-31 15:01:04', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1097', '0.00', '1', null, '1000', '100002', '1074', '2016-03-31 15:06:50', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1098', '0.00', '1', null, '1000', '100002', '1076', '2016-03-31 15:07:16', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1099', '0.00', '1', null, '1100', '100021', '1078', '2016-03-31 18:17:58', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1100', '0.00', '1', null, '1077', '100010', '1080', '2016-04-01 17:09:48', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1101', '0.00', '1', null, '1077', '100010', '1082', '2016-04-08 15:20:27', '0', null, null, null, null, null);
INSERT INTO accountrevenue VALUES ('1102', '0.00', '1', null, '1077', '100010', '1084', '2016-04-08 15:20:59', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `advisory`
-- ----------------------------
DROP TABLE IF EXISTS `advisory`;
CREATE TABLE `advisory` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-留言咨询表主键',
  `idAdvisory` int(11) DEFAULT NULL COMMENT '咨询人主键',
  `advtime` datetime DEFAULT NULL COMMENT '咨询时间',
  `advcontent` varchar(100) DEFAULT NULL COMMENT '咨询内容',
  `idReply` int(11) DEFAULT NULL COMMENT '回复人主键',
  `replycontent` varchar(100) DEFAULT NULL COMMENT '回复内容',
  `replytime` datetime DEFAULT NULL COMMENT '回复时间',
  `isRead` char(1) DEFAULT NULL COMMENT '是否阅读',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(30) DEFAULT NULL COMMENT '预留字段1',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1135 DEFAULT CHARSET=utf8 COMMENT='系统管理-留言咨询表advisory';

-- ----------------------------
-- Records of advisory
-- ----------------------------
INSERT INTO advisory VALUES ('1', '1007', '2016-02-18 15:01:54', 'I LOVE ZHANGWENHAN', null, '我的内心是拒绝的', '2016-03-03 11:12:23', null, '2016-02-18 15:01:54', '1', null);
INSERT INTO advisory VALUES ('2', '1000', '2016-02-18 15:44:50', 'I LOVE MYLOVE', null, '哎哟..', '2016-03-03 11:12:32', null, '2016-02-18 15:44:50', '1', null);
INSERT INTO advisory VALUES ('3', '1000', '2016-02-18 15:59:52', 'I LOVE MYLOVE', null, null, null, null, '2016-02-18 15:59:52', '1', null);
INSERT INTO advisory VALUES ('4', '1000', '2016-02-18 16:01:36', 'I LOVE MYLOVE', null, null, null, null, '2016-02-18 16:01:36', '1', null);
INSERT INTO advisory VALUES ('5', '1000', '2016-02-18 16:07:51', 'I LOVE MYLOVE', null, null, null, null, '2016-02-18 16:07:51', '1', null);
INSERT INTO advisory VALUES ('6', '1000', '2016-02-18 16:13:48', 'I LOVE MYLOVE', null, null, null, null, '2016-02-18 16:13:48', '1', null);
INSERT INTO advisory VALUES ('7', '1007', '2016-02-18 16:14:17', 'I', null, null, null, null, '2016-02-18 16:14:17', '1', null);
INSERT INTO advisory VALUES ('8', '1007', '2016-02-18 16:14:17', 'I', null, null, null, null, '2016-02-18 16:14:17', '1', null);
INSERT INTO advisory VALUES ('9', '1007', '2016-02-18 16:14:17', 'I', null, null, null, null, '2016-02-18 16:14:17', '1', null);
INSERT INTO advisory VALUES ('10', '1007', '2016-02-18 17:30:05', 'I LOVE MYLOVE', null, null, null, null, '2016-02-18 17:30:05', '1', null);
INSERT INTO advisory VALUES ('11', '1007', '2016-02-18 17:32:34', 'asada', null, null, null, null, '2016-02-18 17:32:34', '1', null);
INSERT INTO advisory VALUES ('12', '1000', '2016-02-18 17:34:06', 'fjhhg', null, null, null, null, '2016-02-18 17:34:06', '1', null);
INSERT INTO advisory VALUES ('13', '0', '2016-02-18 18:02:39', 'ghjg', null, null, null, null, '2016-02-18 18:02:39', '0', null);
INSERT INTO advisory VALUES ('14', '1007', '2016-02-19 09:28:11', 'I', null, null, null, null, '2016-02-19 09:28:11', '1', null);
INSERT INTO advisory VALUES ('15', '1007', '2016-02-19 10:24:01', 'I LOVE MYLOVE', null, null, null, null, '2016-02-19 10:24:01', '1', null);
INSERT INTO advisory VALUES ('16', '1007', '2016-02-19 10:25:32', 'I LOVE MYLOVE', null, null, null, null, '2016-02-19 10:25:32', '1', null);
INSERT INTO advisory VALUES ('17', '1000', '2016-02-19 10:32:02', 'chtddghn', null, null, null, null, '2016-02-19 10:32:02', '1', null);
INSERT INTO advisory VALUES ('18', '1000', '2016-02-19 10:34:29', 'ghhvjcj', null, null, null, null, '2016-02-19 10:34:29', '1', null);
INSERT INTO advisory VALUES ('19', '1000', '2016-02-19 10:35:55', 'guhgh', null, null, null, null, '2016-02-19 10:35:55', '1', null);
INSERT INTO advisory VALUES ('20', '1000', '2016-02-19 10:47:30', 'chjgvb', null, null, null, null, '16-03-04 09:53:50', '1', null);
INSERT INTO advisory VALUES ('21', '1000', '2016-02-19 10:47:38', 'chjgvb', null, null, null, null, '16-03-04 09:54:02', '1', null);
INSERT INTO advisory VALUES ('22', '1000', '2016-02-19 10:50:21', 'ghjv', null, null, null, null, '2016-02-19 10:50:21', '1', null);
INSERT INTO advisory VALUES ('23', '1000', '2016-02-19 10:54:11', 'fhjjj', null, null, null, null, '2016-02-19 10:54:11', '1', null);
INSERT INTO advisory VALUES ('24', '1000', '2016-02-19 10:55:10', 'etooh', null, null, null, null, '2016-02-19 10:55:10', '1', null);
INSERT INTO advisory VALUES ('25', '1000', '2016-02-19 10:55:33', 'etooh', null, null, null, null, '2016-02-19 10:55:33', '1', null);
INSERT INTO advisory VALUES ('26', '1000', '2016-02-19 10:57:34', 'guujj', null, null, null, null, '2016-02-19 10:57:34', '1', null);
INSERT INTO advisory VALUES ('27', '1007', '2016-02-19 13:55:32', 'I', null, null, null, null, '2016-02-19 13:55:32', '1', null);
INSERT INTO advisory VALUES ('28', '1000', '2016-02-19 14:22:28', 'fghhi', null, null, null, null, '2016-02-19 14:22:28', '1', null);
INSERT INTO advisory VALUES ('29', '0', '2016-02-19 16:22:20', 'gjhv', null, null, null, null, '2016-02-19 16:22:20', '0', null);
INSERT INTO advisory VALUES ('30', '0', '2016-02-19 16:24:10', 'fkvv v', null, null, null, null, '2016-02-19 16:24:10', '0', null);
INSERT INTO advisory VALUES ('31', '0', '2016-02-19 16:24:13', 'bjuhgh', null, null, null, null, '2016-02-19 16:24:13', '0', null);
INSERT INTO advisory VALUES ('32', '0', '2016-02-19 16:24:15', 'yiugvb', null, null, null, null, '2016-02-19 16:24:15', '0', null);
INSERT INTO advisory VALUES ('33', '0', '2016-02-19 16:24:18', 'huuhh', null, null, null, null, '2016-02-19 16:24:18', '0', null);
INSERT INTO advisory VALUES ('34', '0', '2016-02-19 16:27:48', 'fjbvn', null, null, null, null, '2016-02-19 16:27:48', '0', null);
INSERT INTO advisory VALUES ('35', '0', '2016-02-19 17:01:38', 'fjjxbhg', null, null, null, null, '2016-02-19 17:01:38', '0', null);
INSERT INTO advisory VALUES ('36', '0', '2016-02-19 17:01:43', 'huhvh', null, null, null, null, '2016-02-19 17:01:43', '0', null);
INSERT INTO advisory VALUES ('37', '0', '2016-02-19 17:04:41', 'hjcvb', null, null, null, null, '2016-02-19 17:04:41', '0', null);
INSERT INTO advisory VALUES ('38', '0', '2016-02-19 17:04:45', 'huhcv', null, null, null, null, '2016-02-19 17:04:45', '0', null);
INSERT INTO advisory VALUES ('39', '0', '2016-02-19 17:08:44', 'gjgfc', null, null, null, null, '2016-02-19 17:08:44', '0', null);
INSERT INTO advisory VALUES ('40', '0', '2016-02-19 17:08:47', 'vhuu', null, null, null, null, '2016-02-19 17:08:47', '0', null);
INSERT INTO advisory VALUES ('41', '0', '2016-02-19 17:09:03', 'hihbbb', null, null, null, null, '2016-02-19 17:09:03', '0', null);
INSERT INTO advisory VALUES ('42', '1000', '2016-02-19 17:10:02', 'gjhv', null, null, null, null, '2016-02-19 17:10:02', '1', null);
INSERT INTO advisory VALUES ('43', '1000', '2016-02-19 17:10:40', 'hhgf', null, null, null, null, '2016-02-19 17:10:40', '1', null);
INSERT INTO advisory VALUES ('44', '1000', '2016-02-22 09:17:52', '二', null, null, null, null, '2016-02-22 09:17:52', '1', null);
INSERT INTO advisory VALUES ('45', '1000', '2016-02-22 09:18:04', '三', null, null, null, null, '2016-02-22 09:18:04', '1', null);
INSERT INTO advisory VALUES ('46', '1007', '2016-02-22 09:39:23', 'I', null, null, null, null, '2016-02-22 09:39:23', '1', null);
INSERT INTO advisory VALUES ('47', '1007', '2016-02-22 09:39:23', 'I', null, null, null, null, '2016-02-22 09:39:23', '1', null);
INSERT INTO advisory VALUES ('48', '1007', '2016-02-23 14:00:07', 'I', null, null, null, null, '2016-02-23 14:00:07', '1', null);
INSERT INTO advisory VALUES ('49', '1007', '2016-02-29 13:06:18', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 13:06:18', '1', null);
INSERT INTO advisory VALUES ('50', '1007', '2016-02-29 13:35:11', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 13:35:11', '1', null);
INSERT INTO advisory VALUES ('51', '1007', '2016-02-29 13:55:49', 'I LOVE', null, null, null, null, '2016-02-29 13:55:49', '1', null);
INSERT INTO advisory VALUES ('52', '1007', '2016-02-29 14:11:07', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 14:11:07', '1', null);
INSERT INTO advisory VALUES ('53', '1007', '2016-02-29 15:15:20', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 15:15:20', '1', null);
INSERT INTO advisory VALUES ('54', '1007', '2016-02-29 15:38:00', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 15:38:00', '1', null);
INSERT INTO advisory VALUES ('55', '1007', '2016-02-29 16:09:14', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 16:09:14', '1', null);
INSERT INTO advisory VALUES ('56', '1007', '2016-02-29 16:10:35', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 16:10:35', '1', null);
INSERT INTO advisory VALUES ('57', '1007', '2016-02-29 16:10:37', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 16:10:37', '1', null);
INSERT INTO advisory VALUES ('58', '1007', '2016-02-29 16:10:39', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 16:10:39', '1', null);
INSERT INTO advisory VALUES ('59', '1007', '2016-02-29 16:10:40', 'I LOVE MYLOVE', null, null, null, null, '2016-02-29 16:10:40', '1', null);
INSERT INTO advisory VALUES ('60', '1000', '2016-03-01 16:02:22', '周铿然是个猪。哈哈哈！！！', null, null, null, null, '2016-03-01 16:02:22', '1', null);
INSERT INTO advisory VALUES ('61', '1000', '2016-03-01 16:23:12', '啦啦啦啦', null, null, null, null, '2016-03-01 16:23:12', '1', null);
INSERT INTO advisory VALUES ('62', '1000', '2016-03-01 16:23:22', '啦啦啦', null, null, null, null, '2016-03-01 16:23:22', '1', null);
INSERT INTO advisory VALUES ('63', '1007', '2016-03-03 17:19:14', 'I LOVE MYLOVE', null, null, null, null, '2016-03-03 17:19:14', '1', null);
INSERT INTO advisory VALUES ('64', '1000', '2016-03-04 14:14:46', '是', null, null, null, null, '2016-03-04 14:14:46', '1', null);
INSERT INTO advisory VALUES ('65', '1007', '2016-03-09 14:13:11', 'I LOVE MYLOVE', null, null, null, null, '2016-03-09 14:13:11', '1', null);
INSERT INTO advisory VALUES ('66', '1007', '2016-03-09 14:13:27', 'I LOVE MYLOVE', null, null, null, null, '2016-03-09 14:13:27', '1', null);
INSERT INTO advisory VALUES ('67', '1007', '2016-03-09 14:18:37', 'I LOVE MYLOVE', null, null, null, null, '2016-03-09 14:18:37', '1', null);
INSERT INTO advisory VALUES ('68', '1007', '2016-03-09 14:22:01', 'I LOVE MYLOVE', null, null, null, null, '2016-03-09 14:22:01', '1', null);
INSERT INTO advisory VALUES ('69', '1000', '2016-03-09 14:33:12', 'è¿ä¹', null, null, null, null, '16-03-28 10:41:34', '1', null);
INSERT INTO advisory VALUES ('70', '1000', '2016-03-09 14:34:45', 'è¿râg', '2', '感谢您咨询', '2016-03-28 10:41:50', 'Y', '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('71', '1000', '2016-03-09 14:36:32', 'è¿ä¹å¤§', null, null, null, null, '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('74', '1000', '2016-03-16 16:35:59', '老嬷嬷统计局童lout统计局楼 你咯空流泪门口了', '2', '测试web回复咨询问题', '2016-04-01 11:27:42', null, '16-04-01 11:29:01', '1', null);
INSERT INTO advisory VALUES ('75', '1000', '2016-03-17 10:21:39', 'è¿æ ·ä½ å°±ä¸è½', null, null, null, null, '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('76', '1000', '2016-03-17 10:24:00', 'è¿æ ·ä½ å°±ä¸è½', null, null, null, null, '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('77', '1000', '2016-03-17 10:24:04', 'è¿æ ·ä½ å°±ä¸è½', null, null, null, null, '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('78', '1000', '2016-03-18 08:42:29', 'å¨å®¶çªç¹ï¼', null, null, null, null, '16-03-18 10:39:08', '1', null);
INSERT INTO advisory VALUES ('79', '1078', '2016-03-22 16:12:52', 'åå§å§j', null, null, null, null, '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('81', '1077', '2016-03-23 13:38:03', 'çè¨æµè¯ã æä»¬é½ä¼æäºä¸æ¯æ ä¾¿æ¯ä½ çç¡®æ¯ä¸æ¯å¾å¤äººçå²ç', null, null, null, 'N', '16-03-30 09:44:18', '1', null);
INSERT INTO advisory VALUES ('82', '1077', '2016-03-23 13:47:07', '呃呃呃呃呃额额滴个天一夜之间的确很久没有关系。我的人生才华和谐社会化服务器上班了。我', '2', 'Don\'t take yourself look too light, in fact, in my heart, it is very important to you!     ----吴世桢', '2016-03-23 14:05:45', 'Y', '2016-03-23 13:47:07', '1', null);
INSERT INTO advisory VALUES ('83', '1000', '2016-03-24 09:39:58', 'Rt', null, null, null, 'N', '16-03-30 09:44:45', '1', null);
INSERT INTO advisory VALUES ('1000', '1000', '2016-03-25 15:18:12', 'n d n d d n d j d j j d j j d d', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1001', '1066', '2016-03-25 16:20:12', 'tyyggggggggggg', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1002', '1066', '2016-03-25 16:44:51', '在线观看！这样我会告诉', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1003', '1066', '2016-03-25 16:47:35', '这些都是因为自己没有勇气结束了、这个人', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1004', '1066', '2016-03-25 16:55:55', '这么好多好多好吃的', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1005', '1066', '2016-03-25 17:05:54', '这样就可以快速找到', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1006', '1066', '2016-03-25 17:07:02', '这样才算好好', null, null, null, 'N', '16-03-30 09:44:29', '1', null);
INSERT INTO advisory VALUES ('1007', '1066', '2016-03-25 18:21:22', ' 这样才肯睡觉', null, null, null, 'N', '16-03-30 09:44:33', '1', null);
INSERT INTO advisory VALUES ('1008', '1000', '2016-03-28 14:43:57', ' 这样就可以快速找到我', '2', '测试回复', '2016-04-01 11:30:03', 'Y', '16-04-01 11:30:03', null, null);
INSERT INTO advisory VALUES ('1009', '1000', '2016-03-28 15:27:13', '这样我还？这样', null, null, null, 'N', '2016-03-28 15:27:13', '0', null);
INSERT INTO advisory VALUES ('1010', '1000', '2016-03-29 13:48:22', '这样就算', null, null, null, 'N', '2016-03-29 13:48:22', '0', null);
INSERT INTO advisory VALUES ('1011', '1000', '2016-03-29 14:02:16', '这么多年我一直以为会', '2', '测试回复', '2016-04-01 11:29:43', 'Y', '16-04-01 11:29:43', null, null);
INSERT INTO advisory VALUES ('1012', '1000', '2016-03-29 14:03:14', '这样我的小心', null, null, null, 'N', '2016-03-29 14:03:14', '0', null);
INSERT INTO advisory VALUES ('1013', '1086', '2016-03-29 14:14:37', '测试iOS在线留言', null, null, null, 'N', '16-04-01 11:29:01', '1', null);
INSERT INTO advisory VALUES ('1014', '1000', '2016-03-29 14:24:16', '这样才肯罢休？我是', null, null, null, 'N', '2016-03-29 14:24:16', '0', null);
INSERT INTO advisory VALUES ('1015', '1000', '2016-03-29 14:33:15', '你们的确很多', null, null, null, 'N', '2016-03-29 14:33:15', '0', null);
INSERT INTO advisory VALUES ('1016', '1000', '2016-03-29 14:36:27', '这样我们就', null, null, null, 'N', '16-04-01 11:29:01', '1', null);
INSERT INTO advisory VALUES ('1017', '1000', '2016-03-29 14:53:40', '这么样子孙', null, null, null, 'N', '2016-03-29 14:53:40', '0', null);
INSERT INTO advisory VALUES ('1018', '1086', '2016-03-29 17:25:25', '留一年', null, null, null, 'N', '16-04-01 11:29:08', '1', null);
INSERT INTO advisory VALUES ('1019', '1000', '2016-03-29 18:15:00', ' ', null, null, null, 'N', '2016-03-29 18:15:00', '0', null);
INSERT INTO advisory VALUES ('1020', '1099', '2016-03-30 15:56:36', '测试Android卖家在线留言', null, null, null, 'N', '16-04-01 11:29:13', '1', null);
INSERT INTO advisory VALUES ('1021', '1000', '2016-04-01 17:04:50', '微信只需要', null, null, null, 'N', '2016-04-01 17:04:50', '0', null);
INSERT INTO advisory VALUES ('1022', '1077', '2016-04-05 11:43:07', '华为p9搭载海思麒麟955芯片，采用双摄像头', '2', 'suoga,好钓的样子欸', '2016-04-05 11:53:26', 'Y', '2016-04-05 11:43:07', '1', null);
INSERT INTO advisory VALUES ('1023', '1000', '2016-04-05 14:20:29', ' Ttttggggggggg', null, null, null, 'N', '2016-04-05 14:20:29', '0', null);
INSERT INTO advisory VALUES ('1024', '1000', '2016-04-05 14:20:51', 'Yyyyyyyyyyyy', null, null, null, 'N', '2016-04-05 14:20:51', '0', null);
INSERT INTO advisory VALUES ('1025', '1077', '2016-04-05 17:01:50', '华为P9青春版', '2', 'soga...000', '2016-04-05 17:03:23', 'Y', '2016-04-05 17:01:50', '1', null);
INSERT INTO advisory VALUES ('1026', '1077', '2016-04-05 17:01:52', '华为p9标准版', '2', '斯密吗sei', '2016-04-05 17:03:24', 'Y', '2016-04-05 17:01:52', '1', null);
INSERT INTO advisory VALUES ('1027', '1077', '2016-04-05 17:01:54', '华为p9高配版', '2', '阿里嘎多', '2016-04-05 17:03:26', 'Y', '2016-04-05 17:01:54', '1', null);
INSERT INTO advisory VALUES ('1028', '1077', '2016-04-05 17:17:31', '安安订单', null, null, null, 'N', '2016-04-05 17:17:31', '1', null);
INSERT INTO advisory VALUES ('1029', '1077', '2016-04-05 17:17:44', '啊啊啊啊', null, null, null, 'N', '2016-04-05 17:17:44', '1', null);
INSERT INTO advisory VALUES ('1030', '1000', '2016-04-05 17:19:58', 'Xxxxxx', null, null, null, 'N', '2016-04-05 17:19:58', '0', null);
INSERT INTO advisory VALUES ('1031', '1000', '2016-04-05 17:20:21', 'Ggggggggggggggggggggggggggggggggggg', null, null, null, 'N', '2016-04-05 17:20:21', '0', null);
INSERT INTO advisory VALUES ('1032', '1000', '2016-04-05 17:39:15', 'Rrrrrrrrrr', null, null, null, 'N', '2016-04-05 17:39:15', '0', null);
INSERT INTO advisory VALUES ('1033', '1000', '2016-04-05 17:40:51', 'Yyyyyyy', null, null, null, 'N', '2016-04-05 17:40:51', '0', null);
INSERT INTO advisory VALUES ('1034', '1000', '2016-04-05 17:42:35', 'Ryytttyyyyttyyyyyyyyyyyy', null, null, null, 'N', '2016-04-05 17:42:35', '0', null);
INSERT INTO advisory VALUES ('1035', '1000', '2016-04-06 09:01:16', '55555555555', null, null, null, 'N', '2016-04-06 09:01:16', '0', null);
INSERT INTO advisory VALUES ('1036', '1000', '2016-04-06 09:01:48', '你俄中两国', null, null, null, 'N', '2016-04-06 09:01:48', '0', null);
INSERT INTO advisory VALUES ('1037', '1000', '2016-04-06 09:06:38', 'Fffffffffffff', null, null, null, 'N', '2016-04-06 09:06:38', '0', null);
INSERT INTO advisory VALUES ('1038', '1000', '2016-04-06 09:17:58', 'Ddddddddddddd', null, null, null, 'N', '2016-04-06 09:17:58', '0', null);
INSERT INTO advisory VALUES ('1039', '1000', '2016-04-06 09:19:49', 'Fffffffffffffffffffff', null, null, null, 'N', '2016-04-06 09:19:49', '0', null);
INSERT INTO advisory VALUES ('1040', '1000', '2016-04-06 09:21:33', 'Tyytttyy', null, null, null, 'N', '2016-04-06 09:21:33', '0', null);
INSERT INTO advisory VALUES ('1041', '1000', '2016-04-06 09:22:21', 'Ffffffffff', null, null, null, 'N', '2016-04-06 09:22:21', '0', null);
INSERT INTO advisory VALUES ('1042', '1000', '2016-04-06 09:24:01', 'Ttttttttttttt', null, null, null, 'N', '2016-04-06 09:24:01', '0', null);
INSERT INTO advisory VALUES ('1043', '1000', '2016-04-06 09:25:03', 'Ttttttttt', null, null, null, 'N', '2016-04-06 09:25:03', '0', null);
INSERT INTO advisory VALUES ('1044', '1000', '2016-04-06 09:27:16', 'Ccccccc', null, null, null, 'N', '2016-04-06 09:27:16', '0', null);
INSERT INTO advisory VALUES ('1045', '1000', '2016-04-06 09:29:30', 'Hhhhhh', null, null, null, 'N', '2016-04-06 09:29:30', '0', null);
INSERT INTO advisory VALUES ('1046', '1000', '2016-04-06 09:29:37', 'Uuuuuuuuuuuuuuu', null, null, null, 'N', '2016-04-06 09:29:37', '0', null);
INSERT INTO advisory VALUES ('1047', '1000', '2016-04-06 09:29:43', 'Uuuuuuu', null, null, null, 'N', '2016-04-06 09:29:43', '0', null);
INSERT INTO advisory VALUES ('1048', '1000', '2016-04-06 09:29:49', 'Iijjjj', null, null, null, 'N', '2016-04-06 09:29:49', '0', null);
INSERT INTO advisory VALUES ('1049', '1000', '2016-04-06 09:29:56', 'Jjjjjjj', null, null, null, 'N', '2016-04-06 09:29:56', '0', null);
INSERT INTO advisory VALUES ('1050', '1000', '2016-04-06 09:33:24', 'Tyttttttttttt', null, null, null, 'N', '2016-04-06 09:33:24', '0', null);
INSERT INTO advisory VALUES ('1051', '1000', '2016-04-06 09:35:06', 'Rrrrrrrrr', null, null, null, 'N', '2016-04-06 09:35:06', '0', null);
INSERT INTO advisory VALUES ('1052', '1000', '2016-04-06 09:36:00', 'Ttttttttt', null, null, null, 'N', '2016-04-06 09:36:00', '0', null);
INSERT INTO advisory VALUES ('1053', '1000', '2016-04-06 09:37:35', 'Ttttttttttttt', null, null, null, 'N', '2016-04-06 09:37:35', '0', null);
INSERT INTO advisory VALUES ('1054', '1000', '2016-04-06 09:38:32', 'Hhhhhh', null, null, null, 'N', '2016-04-06 09:38:32', '0', null);
INSERT INTO advisory VALUES ('1055', '1000', '2016-04-06 09:39:17', 'Ggggggggggggggggggg', null, null, null, 'N', '2016-04-06 09:39:17', '0', null);
INSERT INTO advisory VALUES ('1056', '1000', '2016-04-06 09:40:36', 'Gggggggggg', null, null, null, 'N', '2016-04-06 09:40:36', '0', null);
INSERT INTO advisory VALUES ('1057', '1000', '2016-04-06 09:43:21', 'Niggffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', null, null, null, 'N', '2016-04-06 09:43:21', '0', null);
INSERT INTO advisory VALUES ('1058', '1000', '2016-04-06 09:47:59', 'Tyttttytttt', null, null, null, 'N', '2016-04-06 09:47:59', '0', null);
INSERT INTO advisory VALUES ('1059', '1000', '2016-04-06 09:49:19', 'Yyyyyyyyyyy', null, null, null, 'N', '2016-04-06 09:49:19', '0', null);
INSERT INTO advisory VALUES ('1060', '1000', '2016-04-06 09:50:12', 'Yyyyyyyyyyy', null, null, null, 'N', '2016-04-06 09:50:12', '0', null);
INSERT INTO advisory VALUES ('1061', '1000', '2016-04-06 09:50:46', 'Gggggggg', null, null, null, 'N', '2016-04-06 09:50:46', '0', null);
INSERT INTO advisory VALUES ('1062', '1000', '2016-04-06 09:52:35', 'Tyyyyyy', null, null, null, 'N', '2016-04-06 09:52:35', '0', null);
INSERT INTO advisory VALUES ('1063', '1000', '2016-04-06 09:57:13', 'Gffgggggggg', null, null, null, 'N', '2016-04-06 09:57:13', '0', null);
INSERT INTO advisory VALUES ('1064', '1000', '2016-04-06 10:01:22', 'Fccvvbbbbbnnn', null, null, null, 'N', '2016-04-06 10:01:22', '0', null);
INSERT INTO advisory VALUES ('1065', '1000', '2016-04-06 10:01:29', 'Fffgggg', null, null, null, 'N', '2016-04-06 10:01:29', '0', null);
INSERT INTO advisory VALUES ('1066', '1000', '2016-04-06 10:01:39', 'Hhhhhhhhhhh', null, null, null, 'N', '2016-04-06 10:01:39', '0', null);
INSERT INTO advisory VALUES ('1067', '1000', '2016-04-06 10:01:45', 'Ggggg', null, null, null, 'N', '2016-04-06 10:01:45', '0', null);
INSERT INTO advisory VALUES ('1068', '1000', '2016-04-06 10:04:27', 'Gggggggggggggggg', null, null, null, 'N', '2016-04-06 10:04:27', '0', null);
INSERT INTO advisory VALUES ('1069', '1000', '2016-04-06 10:04:34', 'Hhhhhhhhhhhh', null, null, null, 'N', '2016-04-06 10:04:34', '0', null);
INSERT INTO advisory VALUES ('1070', '1000', '2016-04-06 10:07:20', 'Rrrrrrrrrrr', null, null, null, 'N', '2016-04-06 10:07:20', '0', null);
INSERT INTO advisory VALUES ('1071', '1000', '2016-04-06 10:07:27', 'Bbbbbnnnnnnn', null, null, null, 'N', '2016-04-06 10:07:27', '0', null);
INSERT INTO advisory VALUES ('1072', '1000', '2016-04-06 10:08:53', 'Ggggghhhhhhhhhh', null, null, null, 'N', '2016-04-06 10:08:53', '0', null);
INSERT INTO advisory VALUES ('1073', '1000', '2016-04-06 10:10:04', 'Ggggggggggggg', null, null, null, 'N', '2016-04-06 10:10:04', '0', null);
INSERT INTO advisory VALUES ('1074', '1000', '2016-04-06 10:11:10', 'Ddddddddddd', null, null, null, 'N', '2016-04-06 10:11:10', '0', null);
INSERT INTO advisory VALUES ('1075', '1000', '2016-04-06 10:11:22', 'Hhhhhhh', null, null, null, 'N', '2016-04-06 10:11:22', '0', null);
INSERT INTO advisory VALUES ('1076', '1000', '2016-04-06 10:23:52', 'Yyyyyyyyyyyyy', null, null, null, 'N', '2016-04-06 10:23:52', '0', null);
INSERT INTO advisory VALUES ('1077', '1000', '2016-04-06 10:24:01', 'Uuuuuuu', null, null, null, 'N', '2016-04-06 10:24:01', '0', null);
INSERT INTO advisory VALUES ('1078', '1000', '2016-04-06 10:25:59', 'Ggggg', null, null, null, 'N', '2016-04-06 10:25:59', '0', null);
INSERT INTO advisory VALUES ('1079', '1000', '2016-04-06 10:26:05', 'Fhhhhhhhh', null, null, null, 'N', '2016-04-06 10:26:05', '0', null);
INSERT INTO advisory VALUES ('1080', '1000', '2016-04-06 10:27:10', 'Jjjjjj', null, null, null, 'N', '2016-04-06 10:27:10', '0', null);
INSERT INTO advisory VALUES ('1081', '1000', '2016-04-06 10:27:20', 'Jjjjjjjj', null, null, null, 'N', '2016-04-06 10:27:20', '0', null);
INSERT INTO advisory VALUES ('1082', '1000', '2016-04-06 10:33:53', 'Rrrrrrrrrrrrrrrr', null, null, null, 'N', '2016-04-06 10:33:53', '0', null);
INSERT INTO advisory VALUES ('1083', '1000', '2016-04-06 10:34:08', 'Uuyyyyyyyy', null, null, null, 'N', '2016-04-06 10:34:08', '0', null);
INSERT INTO advisory VALUES ('1084', '1000', '2016-04-06 10:35:13', 'Dfffffffff', null, null, null, 'N', '2016-04-06 10:35:13', '0', null);
INSERT INTO advisory VALUES ('1085', '1000', '2016-04-06 10:35:20', 'Yuuuuuuuuuuu', null, null, null, 'N', '2016-04-06 10:35:20', '0', null);
INSERT INTO advisory VALUES ('1086', '1077', '2016-04-07 11:52:14', '111', null, null, null, 'N', '2016-04-07 11:52:14', '0', null);
INSERT INTO advisory VALUES ('1087', '1077', '2016-04-08 09:34:46', 'Vbbbbnnnnnnbbbbbbbbbbbb', null, null, null, 'N', '2016-04-08 09:34:46', '0', null);
INSERT INTO advisory VALUES ('1088', '1077', '2016-04-08 09:35:03', 'Tyyyyyyu', null, null, null, 'N', '2016-04-08 09:35:03', '0', null);
INSERT INTO advisory VALUES ('1089', '1077', '2016-04-08 09:35:07', 'T', null, null, null, 'N', '2016-04-08 09:35:07', '0', null);
INSERT INTO advisory VALUES ('1090', '1077', '2016-04-08 09:35:20', 'Iujk', null, null, null, 'N', '2016-04-08 09:35:20', '0', null);
INSERT INTO advisory VALUES ('1091', '1077', '2016-04-08 09:35:38', 'Yuuuooooooooooo', null, null, null, 'N', '2016-04-08 09:35:38', '0', null);
INSERT INTO advisory VALUES ('1092', '1077', '2016-04-08 09:35:52', 'Jkmmnbbbbbbbb', null, null, null, 'N', '2016-04-08 09:35:52', '0', null);
INSERT INTO advisory VALUES ('1093', '1077', '2016-04-08 09:35:58', 'Jjnnnnnn', null, null, null, 'N', '2016-04-08 09:35:58', '0', null);
INSERT INTO advisory VALUES ('1094', '1077', '2016-04-08 09:39:03', 'Fhhhhhhjkkkk', null, null, null, 'N', '2016-04-08 09:39:03', '0', null);
INSERT INTO advisory VALUES ('1095', '1077', '2016-04-08 09:39:09', 'Dgh', null, null, null, 'N', '2016-04-08 09:39:09', '0', null);
INSERT INTO advisory VALUES ('1096', '1077', '2016-04-08 09:39:12', 'F', null, null, null, 'N', '2016-04-08 09:39:12', '0', null);
INSERT INTO advisory VALUES ('1097', '1077', '2016-04-08 09:39:18', 'Gjjjj', null, null, null, 'N', '2016-04-08 09:39:18', '0', null);
INSERT INTO advisory VALUES ('1098', '1077', '2016-04-08 09:39:23', 'Vvnnn', null, null, null, 'N', '2016-04-08 09:39:23', '0', null);
INSERT INTO advisory VALUES ('1099', '1077', '2016-04-08 09:39:27', 'B', null, null, null, 'N', '2016-04-08 09:39:27', '0', null);
INSERT INTO advisory VALUES ('1100', '1077', '2016-04-08 09:39:31', 'H', null, null, null, 'N', '2016-04-08 09:39:31', '0', null);
INSERT INTO advisory VALUES ('1101', '1077', '2016-04-08 09:40:52', 'T', null, null, null, 'N', '2016-04-08 09:40:52', '0', null);
INSERT INTO advisory VALUES ('1102', '1077', '2016-04-08 09:40:57', 'V', null, null, null, 'N', '2016-04-08 09:40:57', '0', null);
INSERT INTO advisory VALUES ('1103', '1077', '2016-04-08 09:41:02', 'Bnnn', null, null, null, 'N', '2016-04-08 09:41:02', '0', null);
INSERT INTO advisory VALUES ('1104', '1077', '2016-04-08 09:41:10', 'Vbnvcxdfggg', null, null, null, 'N', '2016-04-08 09:41:10', '0', null);
INSERT INTO advisory VALUES ('1105', '1077', '2016-04-08 09:41:16', 'Hhjbbb', null, null, null, 'N', '2016-04-08 09:41:16', '0', null);
INSERT INTO advisory VALUES ('1106', '1077', '2016-04-08 09:41:21', 'Bvbnnnn', null, null, null, 'N', '2016-04-08 09:41:21', '0', null);
INSERT INTO advisory VALUES ('1107', '1077', '2016-04-08 09:43:18', 'T', null, null, null, 'N', '2016-04-08 09:43:18', '0', null);
INSERT INTO advisory VALUES ('1108', '1077', '2016-04-08 09:43:22', 'V', null, null, null, 'N', '2016-04-08 09:43:22', '0', null);
INSERT INTO advisory VALUES ('1109', '1077', '2016-04-08 09:43:29', 'Hhjkkkjnbvvv', null, null, null, 'N', '2016-04-08 09:43:29', '0', null);
INSERT INTO advisory VALUES ('1110', '1077', '2016-04-08 11:54:52', '哈哈红红火火', null, null, null, 'N', '2016-04-08 11:54:52', '0', null);
INSERT INTO advisory VALUES ('1111', '1077', '2016-04-08 11:55:06', '当人人人人人人人风景区', null, null, null, 'N', '2016-04-08 11:55:06', '0', null);
INSERT INTO advisory VALUES ('1112', '1077', '2016-04-08 11:55:18', '你的心', null, null, null, 'N', '2016-04-08 11:55:18', '0', null);
INSERT INTO advisory VALUES ('1113', '1077', '2016-04-08 11:55:37', '随时随地点点滴滴\n', null, null, null, 'N', '2016-04-08 11:55:37', '0', null);
INSERT INTO advisory VALUES ('1114', '1077', '2016-04-08 11:56:08', '点点滴滴都是', null, null, null, 'N', '2016-04-08 11:56:08', '0', null);
INSERT INTO advisory VALUES ('1115', '1077', '2016-04-08 11:59:12', 'Ffgggggggg', null, null, null, 'N', '2016-04-08 11:59:12', '0', null);
INSERT INTO advisory VALUES ('1116', '1077', '2016-04-08 11:59:19', 'Ggvvvcvbbbbbbb', null, null, null, 'N', '2016-04-08 11:59:19', '0', null);
INSERT INTO advisory VALUES ('1117', '1077', '2016-04-08 11:59:34', 'Ggbbvvvvvbbbbbb', null, null, null, 'N', '2016-04-08 11:59:34', '0', null);
INSERT INTO advisory VALUES ('1118', '1077', '2016-04-08 12:07:13', 'Tggghhhh', null, null, null, 'N', '2016-04-08 12:07:13', '0', null);
INSERT INTO advisory VALUES ('1119', '1077', '2016-04-08 13:39:14', 'Tryyyyyy', null, null, null, 'N', '2016-04-08 13:39:14', '0', null);
INSERT INTO advisory VALUES ('1120', '1077', '2016-04-08 13:51:51', '1111', null, null, null, 'N', '2016-04-08 13:51:51', '0', null);
INSERT INTO advisory VALUES ('1121', '1077', '2016-04-08 13:53:44', 'qqqqqqqqqqqaaaaaaaaa', null, null, null, 'N', '2016-04-08 13:53:44', '0', null);
INSERT INTO advisory VALUES ('1122', '1077', '2016-04-08 13:53:57', '啊啊', null, null, null, 'N', '2016-04-08 13:53:57', '0', null);
INSERT INTO advisory VALUES ('1123', '1077', '2016-04-08 17:15:50', 'Rryyyuuuhhffffg', null, null, null, 'N', '2016-04-08 17:15:50', '0', null);
INSERT INTO advisory VALUES ('1124', '1077', '2016-04-08 17:17:42', 'Tryyygggggggg', null, null, null, 'N', '2016-04-08 17:17:42', '0', null);
INSERT INTO advisory VALUES ('1125', '1077', '2016-04-08 17:22:55', 'Yuiiiojjhhhgff', null, null, null, 'N', '2016-04-08 17:22:55', '0', null);
INSERT INTO advisory VALUES ('1126', '1077', '2016-04-08 17:30:21', ' Ttttttt', null, null, null, 'N', '2016-04-08 17:30:21', '0', null);
INSERT INTO advisory VALUES ('1127', '1077', '2016-04-08 17:34:32', 'Gggggggggggg', null, null, null, 'N', '2016-04-08 17:34:32', '0', null);
INSERT INTO advisory VALUES ('1128', '1077', '2016-04-08 17:36:23', 'Eerryyuuuuuuuuuuuuuuu', null, null, null, 'N', '2016-04-08 17:36:23', '0', null);
INSERT INTO advisory VALUES ('1129', '1077', '2016-04-08 17:40:01', 'Fgggggggg', null, null, null, 'N', '2016-04-08 17:40:01', '0', null);
INSERT INTO advisory VALUES ('1130', '1077', '2016-04-08 17:40:21', 'Ttttttttttt', null, null, null, 'N', '2016-04-08 17:40:21', '0', null);
INSERT INTO advisory VALUES ('1131', '1077', '2016-04-08 17:41:15', 'Rtttttttt', null, null, null, 'N', '2016-04-08 17:41:15', '0', null);
INSERT INTO advisory VALUES ('1132', '1077', '2016-04-08 17:44:06', 'Yyyyyyyyyyyyyy', null, null, null, 'N', '2016-04-08 17:44:06', '0', null);
INSERT INTO advisory VALUES ('1133', '1077', '2016-04-08 17:52:42', 'Tttttyyyyyyyyyyyyyyy', null, null, null, 'N', '2016-04-08 17:52:42', '0', null);
INSERT INTO advisory VALUES ('1134', '1077', '2016-04-08 17:53:57', 'Ggggggg', null, null, null, 'N', '2016-04-08 17:53:57', '0', null);

-- ----------------------------
-- Table structure for `bindbankcard`
-- ----------------------------
DROP TABLE IF EXISTS `bindbankcard`;
CREATE TABLE `bindbankcard` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-绑定银行卡表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `bankCardNo` char(20) DEFAULT NULL COMMENT '银行卡号',
  `bankaccount` varchar(50) DEFAULT NULL COMMENT '开户行',
  `accountname` varchar(30) DEFAULT NULL COMMENT '姓名',
  `idcard` char(20) DEFAULT NULL COMMENT '身份证号码',
  `iphoneNo` char(11) DEFAULT NULL COMMENT '银行预留手机号码',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='支付管理-绑定银行卡表bindbankcard';

-- ----------------------------
-- Records of bindbankcard
-- ----------------------------

-- ----------------------------
-- Table structure for `carousel`
-- ----------------------------
DROP TABLE IF EXISTS `carousel`;
CREATE TABLE `carousel` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '首页轮播图表主键',
  `serialnumber` int(11) DEFAULT NULL COMMENT '序号',
  `imagename` varchar(50) DEFAULT NULL COMMENT '图片名称',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识,0表示正常，1表示删除状态',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(30) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(50) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1005 DEFAULT CHARSET=utf8 COMMENT='首页轮播图表carousel';

-- ----------------------------
-- Records of carousel
-- ----------------------------
INSERT INTO carousel VALUES ('1000', '1', '1.png', '16-03-04 09:43:59', '0', null, null, null);
INSERT INTO carousel VALUES ('1001', '2', '2.png', '16-03-04 09:44:05', '0', null, null, null);
INSERT INTO carousel VALUES ('1002', '3', '3.png', '16-04-01 10:33:15', '0', null, null, null);
INSERT INTO carousel VALUES ('1003', '4', '4.png', '16-04-01 10:33:15', '0', null, null, null);
INSERT INTO carousel VALUES ('1004', '5', '5.png', '2016-01-22 12:23:12', '0', null, null, null);

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品分类表主键',
  `superiorcode` char(20) DEFAULT NULL COMMENT '上级分类编码',
  `categoryname` varchar(50) DEFAULT NULL COMMENT '分类名称',
  `seflcode` char(20) DEFAULT NULL COMMENT '自身分类编码',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志 1=删除',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(100) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品分类表category';

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO category VALUES ('1000', '1', '蔬菜', '0', '16-03-23 17:24:05', '0', null, null, null, null);
INSERT INTO category VALUES ('1001', '0', '叶菜类', '01', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1002', '0', '根茎类', '02', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1003', '0', '芽苗类', '03', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1004', '0', '花菜类', '04', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1005', '0', '果菜类', '05', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1006', '0', '菌类', '06', '2016-01-22 10:21:22', '0', null, null, null, null);
INSERT INTO category VALUES ('1007', '0', '瓜类', '07', '2016-01-22 10:21:22', '0', null, null, null, null);

-- ----------------------------
-- Table structure for `checkphone`
-- ----------------------------
DROP TABLE IF EXISTS `checkphone`;
CREATE TABLE `checkphone` (
  `id` int(15) NOT NULL AUTO_INCREMENT COMMENT '检测用户发送短信次数',
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `today` varchar(10) DEFAULT NULL COMMENT '日期 如2016-01-22',
  `code` varchar(6) DEFAULT NULL COMMENT '验证码',
  `ts` varchar(20) DEFAULT NULL COMMENT '时间',
  `dr` varchar(1) DEFAULT NULL COMMENT '删除标志 Y删除 N未删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1218 DEFAULT CHARSET=utf8 COMMENT='检测用户发送短信次数';

-- ----------------------------
-- Records of checkphone
-- ----------------------------
INSERT INTO checkphone VALUES ('1202', '15920916679', '2016-04-08', '485673', '2016-04-08 11:43:51', 'N');
INSERT INTO checkphone VALUES ('1203', '15616120847', '2016-04-08', '271817', '2016-04-08 11:48:32', 'N');
INSERT INTO checkphone VALUES ('1204', '15616120847', '2016-04-08', '874230', '2016-04-08 11:51:50', 'N');
INSERT INTO checkphone VALUES ('1205', '15920911234', '2016-04-08', '616239', '2016-04-08 11:54:27', 'N');
INSERT INTO checkphone VALUES ('1206', '15616120847', '2016-04-08', '365496', '2016-04-08 12:00:48', 'N');
INSERT INTO checkphone VALUES ('1207', '15616120847', '2016-04-08', '936067', '2016-04-08 12:03:11', 'N');
INSERT INTO checkphone VALUES ('1208', '18820775258', '2016-04-08', '878852', '2016-04-08 12:39:10', 'N');
INSERT INTO checkphone VALUES ('1209', '13178871113', '2016-04-08', '935169', '2016-04-08 13:41:32', 'N');
INSERT INTO checkphone VALUES ('1210', '13928478889', '2016-04-08', '152180', '2016-04-08 14:58:08', 'N');
INSERT INTO checkphone VALUES ('1211', '13928478889', '2016-04-08', '127897', '2016-04-08 15:01:41', 'N');
INSERT INTO checkphone VALUES ('1212', '15920916676', '2016-04-08', '226646', '2016-04-08 15:33:29', 'N');
INSERT INTO checkphone VALUES ('1213', '13412345678', '2016-04-08', '116346', '2016-04-08 15:40:18', 'N');
INSERT INTO checkphone VALUES ('1214', '13412345678', '2016-04-08', '548348', '2016-04-08 15:42:12', 'N');
INSERT INTO checkphone VALUES ('1215', '15616120847', '2016-04-08', '785808', '2016-04-08 15:45:25', 'N');
INSERT INTO checkphone VALUES ('1216', '13427664789', '2016-04-08', '461868', '2016-04-08 15:52:36', 'N');
INSERT INTO checkphone VALUES ('1217', '13427664790', '2016-04-08', '605516', '2016-04-08 15:54:24', 'N');

-- ----------------------------
-- Table structure for `commodity`
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品表主键',
  `commodityname` varchar(50) DEFAULT NULL COMMENT '商品名称',
  `commoditycode` char(20) DEFAULT NULL COMMENT '商品编号',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺主键',
  `imagename` varchar(100) DEFAULT NULL COMMENT '商品展示图片名称',
  `status` int(11) DEFAULT NULL COMMENT '商品状态，0=上架，1=下架',
  `idBrand` int(11) DEFAULT NULL COMMENT '商品品牌表主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  `idCategory` int(11) DEFAULT NULL COMMENT '商品类别id',
  PRIMARY KEY (`idNumber`),
  KEY `FKA76C172D7407FCB1` (`idCategory`),
  CONSTRAINT `FKA76C172D7407FCB1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1012 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品表commodity';

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO commodity VALUES ('1000', '金针菇', '2016040800000001', '1021', '8706317_164902565152_2.jpg', '0', '1148', '2016-04-08 00:00:00', '0', null, null, null, null, null, '1006');
INSERT INTO commodity VALUES ('1003', '4-8测试商品4', '2016040800003', '1001', '14cb1a62-bde6-4104-bb1f-9358b782e9f7.png', '0', '1012', '2016-04-08 13:09:04', '0', null, null, null, null, null, '1005');
INSERT INTO commodity VALUES ('1004', '4-8商品测试5', '2016040800004', '1001', 'e7a293f7-f45f-46a4-871e-c68194d3e784.png', '0', '1009', '2016-04-08 13:57:33', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1005', '4-8测试商品6', '2016040800005', '1001', 'f98e3da1-3628-4e73-b1b0-382dd9511767.png', '0', '1009', '2016-04-08 14:04:54', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1006', '4-8测试商品7', '2016040800006', '1001', '31314ed5-2538-4608-b41e-5ddf37dae309.png', '0', '1009', '2016-04-08 14:21:37', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1007', '4-8测试商品8', '2016040800006', '1001', 'a8d1b27c-17c3-4851-90c9-5e6526f8f6ab.png', '0', '1009', '2016-04-08 15:10:32', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1008', '4-8测试商品9', '2016040800007', '1001', null, '0', '1009', '2016-04-08 15:25:07', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1009', '4-8测试商品10', '2016040800008', '1001', 'd81f7de1-5677-4b05-a071-f65b55e4b240.png', '0', '1009', '2016-04-08 16:46:17', '0', null, null, null, null, null, '1001');
INSERT INTO commodity VALUES ('1010', '胡萝卜', '2016040800009', '1021', 'c6dcb683-1b9c-4e4d-9c03-11fc5dabad00.jpg', '0', '1148', '2016-04-08 17:56:30', '0', null, null, null, null, null, '1002');
INSERT INTO commodity VALUES ('1011', '4-8测试商品11', '2016040800010', '1001', 'a06ac0e5-20a5-4120-88b6-a285695d59a7.png', '0', '1009', '2016-04-08 18:15:35', '0', null, null, null, null, null, '1001');

-- ----------------------------
-- Table structure for `commoditycompany`
-- ----------------------------
DROP TABLE IF EXISTS `commoditycompany`;
CREATE TABLE `commoditycompany` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品单位表主键',
  `companyname` varchar(20) DEFAULT NULL COMMENT '单位名称',
  `company` varchar(50) DEFAULT NULL COMMENT '单位缩写',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品单位表commoditycompany';

-- ----------------------------
-- Records of commoditycompany
-- ----------------------------
INSERT INTO commoditycompany VALUES ('1009', '袋', '', '16-04-08 19:54:58', null, null, null, null, null, null);
INSERT INTO commoditycompany VALUES ('1010', '箱', 'kg', '16-04-08 20:00:19', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `commoditydescribe`
-- ----------------------------
DROP TABLE IF EXISTS `commoditydescribe`;
CREATE TABLE `commoditydescribe` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品图文描述表主键',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `title1` varchar(30) DEFAULT NULL COMMENT '小标题1',
  `imagename1` varchar(50) DEFAULT NULL COMMENT '图片名称1',
  `describe1` varchar(100) DEFAULT NULL COMMENT '描述1',
  `title2` varchar(30) DEFAULT NULL COMMENT '小标题2',
  `imagename2` varchar(50) DEFAULT NULL COMMENT '图片名称2',
  `describe2` varchar(100) DEFAULT NULL COMMENT '描述2',
  `title3` varchar(30) DEFAULT NULL COMMENT '小标题3',
  `imagename3` varchar(50) DEFAULT NULL COMMENT '图片名称3',
  `describe3` varchar(100) DEFAULT NULL COMMENT '描述3',
  `title4` varchar(30) DEFAULT NULL COMMENT '小标题4',
  `imagename4` varchar(50) DEFAULT NULL COMMENT '图片名称4',
  `describe4` varchar(100) DEFAULT NULL COMMENT '描述4',
  `title5` varchar(30) DEFAULT NULL COMMENT '小标题5',
  `imagename5` varchar(50) DEFAULT NULL COMMENT '图片名称5',
  `describe5` varchar(100) DEFAULT NULL COMMENT '描述5',
  `title6` varchar(30) DEFAULT NULL COMMENT '小标题6',
  `imagename6` varchar(50) DEFAULT NULL COMMENT '图片名称6',
  `describe6` varchar(100) DEFAULT NULL COMMENT '描述5',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品图文描述表commoditydescribe';

-- ----------------------------
-- Records of commoditydescribe
-- ----------------------------
INSERT INTO commoditydescribe VALUES ('1000', '1000', '金针菇①', '10763575_500415.jpg', '这是金针菇图文描述，真的是金针菇描述', '金针菇②', '11367899_171059187000_2.jpg', '这是金针菇图文描述，真的是金针菇描述', '金针菇③', '34478757_2.jpg', '这是金针菇图文描述，真的是金针菇描述', '金针菇④', '161935294.jpg', '这是金针菇图文描述，真的是金针菇描述', '金针菇⑤', '533427019_1157318604.jpg', '这是金针菇图文描述，真的是金针菇描述', '金针菇⑥', 'webp-1334ef94-493f-4f16-926f-2d2563b5901e.jpg', '这是金针菇图文描述，真的是金针菇描述', '2016 04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1001', '1003', null, '39da4ec0-08df-40e1-931c-c5f5a7cce920.png', 'dfasdfa', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 13:09:04', null, null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1002', '1004', null, '091b4be9-0781-40ce-b699-b86934031a04.png', '发大发', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 13:57:33', null, null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1003', '1005', null, '373d15fb-3fa1-41be-b469-c67087d9124e.png', 'fdfad', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 14:04:54', null, null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1004', '1006', null, 'd1671ef2-2f9a-402e-8d2f-90cb6de346d3.png', '阿发达', null, '0cbde5a6-a219-4e9c-a75f-066acb56a6cf.png', '发大发', null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 14:21:37', null, null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1005', '1007', null, '211c05ff-33fd-47bf-b03f-65a83fbcff8f.png', '1', null, '033c8dbf-8a1b-41c8-a377-39d53bca9d1d.png', '2', null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commoditydescribe VALUES ('1006', '1009', null, 'd25b99f9-d938-4413-bd40-b94dba605eb3.png', '1', null, 'b24e7a77-86ff-4c5f-b239-315e7ce8bab1.png', '2', null, null, null, null, null, null, null, null, null, null, null, null, '2016-04-08 16:46:17', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `commodityimages`
-- ----------------------------
DROP TABLE IF EXISTS `commodityimages`;
CREATE TABLE `commodityimages` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品图片表主键',
  `imagename` varchar(50) DEFAULT NULL COMMENT '图片名称',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1016 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品图片表commodityimages';

-- ----------------------------
-- Records of commodityimages
-- ----------------------------
INSERT INTO commodityimages VALUES ('1000', '3F6E4620F0B216C31028DEA1076224AF_M.jpg', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1001', '8549837_231045176115_2.jpg', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1002', '9885883_024109259000_2.jpg', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1003', '83576088.jpg', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1004', '201212201239579580.jpg', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1005', '8c8ef340-0fd6-4951-8392-a005c747b837.png', '1003', '2016-04-08 13:09:04', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1006', 'c07753a3-afb1-4f16-a6a1-52d548dd2756.png', '1004', '2016-04-08 13:57:33', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1007', '4e24e108-1601-49df-b118-55534602a4e7.png', '1005', '2016-04-08 14:04:54', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1008', '4cf015d0-df3f-447c-804d-02662b7f3db2.png', '1005', '2016-04-08 14:04:54', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1009', '97b7d100-9c64-4dae-8335-5411736afba6.png', '1005', '2016-04-08 14:04:54', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1010', '29df6e47-cdf6-4c4a-a90c-d321ad953b89.png', '1006', '2016-04-08 14:21:37', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1011', 'abae83a3-3497-4773-bac0-54eccd974b40.png', '1006', '2016-04-08 14:21:37', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1012', '839fcb96-af7a-4acd-8d1a-bb8773697ecc.png', '1007', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1013', 'b6a0e5cd-fff3-43bc-9f79-a92617df2d3e.png', '1007', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1014', 'f877bb20-25be-470d-8bc8-8a106cde58c0.png', '1009', '2016-04-08 16:46:17', null, null, null, null, null, null);
INSERT INTO commodityimages VALUES ('1015', '9186dee9-4ed0-4653-b936-49769dcb50f7.png', '1009', '2016-04-08 16:46:17', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `commoditylevel`
-- ----------------------------
DROP TABLE IF EXISTS `commoditylevel`;
CREATE TABLE `commoditylevel` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品级别表主键',
  `idCommodity` int(11) DEFAULT NULL,
  `idCompany` int(11) DEFAULT NULL COMMENT '商品单位主键',
  `levelname` char(2) DEFAULT NULL COMMENT '级别名称',
  `grossweight` decimal(16,2) DEFAULT NULL COMMENT '毛重',
  `cleanweight` decimal(16,2) DEFAULT NULL COMMENT '净重',
  `outerpacking` decimal(10,2) DEFAULT NULL COMMENT '包装规格',
  `stock` int(11) DEFAULT NULL COMMENT '库存量',
  `customproperty1` varchar(20) DEFAULT NULL COMMENT '自定义属性名1',
  `customvalue1` varchar(20) DEFAULT NULL COMMENT '自定义属性值1',
  `customproperty2` varchar(20) DEFAULT NULL COMMENT '自定义属性名2',
  `customvalue2` varchar(20) DEFAULT NULL COMMENT '自定义属性值2',
  `customproperty3` varchar(20) DEFAULT NULL COMMENT '自定义属性名3',
  `customvalue3` varchar(20) DEFAULT NULL COMMENT '自定义属性值3',
  `customproperty4` varchar(20) DEFAULT NULL COMMENT '自定义属性名4',
  `customvalue4` varchar(20) DEFAULT NULL COMMENT '自定义属性值4',
  `customproperty5` varchar(20) DEFAULT NULL COMMENT '自定义属性名5',
  `customvalue5` varchar(20) DEFAULT NULL COMMENT '自定义属性值5',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` varchar(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(20) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`),
  KEY `FKAE75F877A1260245` (`idCommodity`),
  KEY `FKAE75F8777898FA4C` (`idCompany`),
  CONSTRAINT `FKAE75F8777898FA4C` FOREIGN KEY (`idCompany`) REFERENCES `commoditycompany` (`idNumber`),
  CONSTRAINT `FKAE75F877A1260245` FOREIGN KEY (`idCommodity`) REFERENCES `commodity` (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1012 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品级别表commoditylevel';

-- ----------------------------
-- Records of commoditylevel
-- ----------------------------
INSERT INTO commoditylevel VALUES ('1000', '1000', '1009', 'A级', '100.00', '99.00', '1.00', '1111', null, null, null, null, null, null, null, null, null, null, '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1001', '1000', '1010', 'B级', '150.00', '148.00', '2.00', '2222', null, null, null, null, null, null, null, null, null, null, '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1002', '1000', '1009', 'C级', '200.00', '197.00', '3.00', '3333', null, null, null, null, null, null, null, null, null, null, '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1003', '1003', '1010', 'B级', '2.00', '1.00', '12.00', '33', null, null, null, null, null, null, null, null, null, null, '2016-04-08 13:08:05', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1004', '1004', '1010', 'B级', '12.00', '12.00', '12.00', '12', null, null, null, null, null, null, null, null, null, null, '2016-04-08 13:57:03', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1005', '1005', '1010', 'A级', '12.00', '2.00', '12.00', '33', null, null, null, null, null, null, null, null, null, null, '2016-04-08 14:04:45', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1006', '1006', '1009', 'B级', '23.00', '33.00', '3.00', '3', null, null, null, null, null, null, null, null, null, null, '2016-04-08 14:21:28', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1007', '1007', '1010', 'B级', '2.00', '2.00', '2.00', '2', '444', '45', null, null, null, null, null, null, null, null, '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1008', '1007', '1009', 'A级', '2.00', '2.00', '2.00', '2', '333', '333', '444', '444', null, null, null, null, null, null, '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1009', '1008', '1010', 'B级', '23.00', '23.00', '23.00', '23', '新增属性1', '新增属性1', '新增属性2', '新增属性2', '新增属性3', '新增属性3', null, null, null, null, '2016-04-08 15:25:07', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1010', '1009', '1010', 'B级', '2.00', '2.00', '2.00', '2', '新增属性1', '新增属性1', '新增属性2', '新增属性2', '新增属性3', '新增属性3', '新增属性3', '新增属性3', '新增属性3', '新增属性3', '2016-04-08 16:46:17', null, null, null, null, null, null);
INSERT INTO commoditylevel VALUES ('1011', '1009', '1009', 'C级', '2.00', '2.00', '2.00', '2', null, null, null, null, null, null, null, null, null, null, '2016-04-08 16:46:17', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `commodityprice`
-- ----------------------------
DROP TABLE IF EXISTS `commodityprice`;
CREATE TABLE `commodityprice` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品管理-商品价格表主键',
  `starttime` datetime DEFAULT NULL COMMENT '开始时间',
  `endtime` datetime DEFAULT NULL COMMENT '结束时间',
  `price` decimal(16,2) DEFAULT NULL COMMENT '单价',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品表主键',
  `idLevel` int(11) DEFAULT NULL COMMENT '商品级别表主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(30) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1111 DEFAULT CHARSET=utf8 COMMENT='商品管理-商品价格表commodityprice';

-- ----------------------------
-- Records of commodityprice
-- ----------------------------
INSERT INTO commodityprice VALUES ('1000', '2016-04-08 00:00:00', '2017-04-08 00:00:00', '0.01', '1000', '1000', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1001', '2016-04-08 00:00:00', '2017-04-08 00:00:00', '0.02', '1000', '1001', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1002', '2016-04-08 00:00:00', '2017-04-08 00:00:00', '0.03', '1000', '1002', '2016-04-08 00:00:00', '0', null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1098', '2016-04-05 00:00:00', '2016-04-05 00:00:00', '7.00', '1003', '1003', '2016-04-08 13:08:05', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1099', '2016-04-12 00:00:00', '2016-04-27 00:00:00', '111.00', '1004', '1004', '2016-04-08 13:57:03', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1100', '2016-04-06 00:00:00', '2016-04-13 00:00:00', '22.00', '1005', '1005', '2016-04-08 14:04:45', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1101', '2016-04-04 00:00:00', '2016-04-05 00:00:00', '2.00', '1006', '1006', '2016-04-08 14:21:28', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1102', '2016-04-05 00:00:00', '2016-04-05 00:00:00', '44.00', '1007', '1007', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1103', '2016-04-25 00:00:00', '2016-04-19 00:00:00', '7.00', '1007', '1008', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1104', '2016-04-04 00:00:00', '2016-04-13 00:00:00', '44.00', '1007', '1008', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1105', '2016-04-06 00:00:00', '2016-04-13 00:00:00', '111.00', '1007', '1008', '2016-04-08 15:10:32', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1106', '2016-03-29 00:00:00', '2016-04-07 00:00:00', '111.00', '1008', '1009', '2016-04-08 15:25:07', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1107', '2016-04-12 00:00:00', '2016-04-13 00:00:00', '4.00', '1008', '1009', '2016-04-08 15:25:07', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1108', '2016-04-28 00:00:00', '2016-04-13 00:00:00', '3.00', '1009', '1010', '2016-04-08 16:46:17', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1109', '2016-03-29 00:00:00', '2016-04-05 00:00:00', '7.00', '1009', '1010', '2016-04-08 16:46:17', null, null, null, null, null, null);
INSERT INTO commodityprice VALUES ('1110', '2016-04-18 00:00:00', '2016-04-19 00:00:00', '3.00', '1009', '1011', '2016-04-08 16:46:17', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `estore`
-- ----------------------------
DROP TABLE IF EXISTS `estore`;
CREATE TABLE `estore` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `corplogo` varchar(70) DEFAULT NULL COMMENT '企业logo图片名称',
  `corpname` varchar(30) DEFAULT NULL COMMENT '企业名字',
  `creationNo` varchar(30) DEFAULT NULL COMMENT '注册号',
  `organization` varchar(30) DEFAULT NULL COMMENT '组织机构代码',
  `areaup` varchar(10) DEFAULT NULL COMMENT '申请修改区',
  `cityup` varchar(10) DEFAULT NULL COMMENT '申请修改市',
  `provinceup` varchar(10) DEFAULT NULL COMMENT '申请修改省',
  `province` varchar(10) DEFAULT NULL COMMENT '省',
  `city` varchar(10) DEFAULT NULL COMMENT '市',
  `area` varchar(10) DEFAULT NULL COMMENT '区',
  `address` varchar(50) DEFAULT NULL COMMENT '产地详细地址',
  `addressup` varchar(50) DEFAULT NULL COMMENT '申请修改产地地址',
  `legalname` varchar(30) DEFAULT NULL COMMENT '法人名字',
  `legalnameup` varchar(30) DEFAULT NULL COMMENT '申请修改法人姓名',
  `addressTs` varchar(30) DEFAULT NULL COMMENT '地址修改时间',
  `addressStatus` varchar(1) DEFAULT NULL COMMENT '地址修改状态 0审核中 1审核通过 2 审核未通过',
  `id` varchar(30) DEFAULT NULL COMMENT '法人身份证号码',
  `validtime` varchar(20) DEFAULT NULL COMMENT '证件截止有效期',
  `legalphoneNo` char(11) DEFAULT NULL COMMENT '法人手机号',
  `legalqq` char(13) DEFAULT NULL COMMENT '法人QQ号',
  `legalwechat` char(30) DEFAULT NULL COMMENT '法人微信号',
  `businesslic` varchar(100) DEFAULT NULL COMMENT '企业营业执照副本图',
  `organizationimg` varchar(100) DEFAULT NULL COMMENT '组织机构代码证',
  `idpositive` varchar(100) DEFAULT NULL COMMENT '法人身份证正面图',
  `idopposite` varchar(100) DEFAULT NULL COMMENT '法人身份证反面图',
  `accountname` varchar(50) DEFAULT NULL COMMENT '银行开户名',
  `accountbank` varchar(50) DEFAULT NULL COMMENT '开户银行',
  `bankaddress` varchar(20) DEFAULT NULL COMMENT '银行所在地',
  `bankaccount` varchar(30) DEFAULT NULL COMMENT '银行账户',
  `validordertime` varchar(20) DEFAULT NULL COMMENT '最迟确认订单时间',
  `handleordertime` varchar(20) DEFAULT NULL COMMENT '处理订单时间',
  `deliverytime` varchar(20) DEFAULT NULL COMMENT '最快到货时间',
  `password` varchar(50) DEFAULT NULL COMMENT '登录密码',
  `contactname` varchar(30) DEFAULT NULL COMMENT '联系人名字',
  `contactphoneNo` char(11) DEFAULT NULL COMMENT '联系人电话',
  `contactqq` char(13) DEFAULT NULL COMMENT '联系人QQ',
  `contactwechat` varchar(30) DEFAULT NULL COMMENT '联系人微信',
  `creationtime` varchar(20) DEFAULT NULL COMMENT '注册时间',
  `ts` char(20) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识 1删除 0或者null没删除',
  `status` char(1) DEFAULT NULL COMMENT '商家状态 0审核中 1审核通过 2审核未通过',
  `userid` int(11) DEFAULT NULL COMMENT '关联用户表id',
  `back1` char(2) DEFAULT NULL,
  `back2` char(2) DEFAULT NULL,
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  `isStop` char(1) DEFAULT NULL COMMENT '是否停运 Y是 N否 ',
  `selftsales` char(1) DEFAULT NULL COMMENT '是否自营店铺 Y是 N否',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1077 DEFAULT CHARSET=utf8 COMMENT='店铺表';

-- ----------------------------
-- Records of estore
-- ----------------------------
INSERT INTO estore VALUES ('1001', '201601221659001.png', '华移科技', '1000', '10002', 'å å·åº', 'å®æ³¢å¸', 'æµæ±ç', null, null, null, '广州天河', 'æµæ±çå®æ³¢å¸å å·åºé£æ ¼éäº', '小罗', null, '2016-03-04 12:03:30', '0', '440921199203103557', '2018-12-30', '13763035145', '123456789', 'weixin', '1456901552482454985.png', null, '1456901552482454985.png', '1456901552482454985.png', '建行', '**银行4', '广东省', '6234011103234300', '10小时', '12小时', '24小时', null, '刘备', '17198641024', '123456', 'wei', '2016-01-22 17:05:59', '2016-01-22 12:12:23', '0', '1', '2', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1021', '1460080598982461784.JPG', '文韩世纪-世纪文韩', '9999', '9999', '天河区', '广州市', '广东省', '浙江省', '宁波市', '堇州区', '浙江省宁波市堇州区风阁雅士', '中山大道西89', '张文韩', null, '2016-04-08 10:30:24', '0', '420704199310014313', '2021-12-12', '18802093449', '963532257', 'wen-ham', '1460082241794804053.png', null, '1460082241794857658.png', '1460082241794373468.png', '龙行', '**银行4', '浙江省', '6234011103234300', '10小时', '10小时', '10小时', null, '吴同', '18802093449', '756302371', 'wendy', '2016-01-22 17:05:59', '2016-01-22 17:05:59', '0', '1', '1078', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1025', '290751.jpg', '恒运置业', '312', '1822', null, null, null, '湖北省', '鄂州市', '鄂城区', '湖北省鄂州市鄂城区福盛花园', null, '陈文娣', null, null, null, '42704199310014313', '2021-12-12', '18802093449', '187120228', '吴世桢', null, null, null, null, '工行', '**银行4', '湖北省', '6234011103234376', '10小时', '10小时', '10小时', null, '吴世桢', '18071173689', '963532257', 'wenham', '2016-03-25 10:05:59', '2016-03-25 10:05:59', '0', '1', '1082', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1027', '247894783243.jpg', '江西蔬果', '34343', '1323232', null, null, null, null, null, null, '江西省赣州', null, '张倩', null, null, null, '43432454234341', '2020-12-04', '1201234432', '659320301', 'huting', '1321434343.jpg', null, '3721474.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', null, null, '1095', '', '', '', '', null, '', '');
INSERT INTO estore VALUES ('1032', '37451e5f-4c99-4e82-8337-57f4f825488f.png', '新增企业1', '1111', '1111', null, null, null, '浙江省', '衢州市', '衢江区', '北街34号', null, '百度杀毒', null, null, null, '440788199806121719', '2016-03-25', '13877656888', '4234', '554534', '439cb7de-7f60-4739-9a2f-9f8f6a7d8759.jpg', null, 'd7c5bedc-03dd-45e1-b30f-f1642dbfb747.png', 'fea86acf-983a-4b5e-b8c9-250484b31302.png', '开个会', '华夏银行', '河北省', '797767568678', '4小时', '6天', '7小时', null, '要让他人', '13877676761', '7865675', '5353456456', '2016-03-30 09:41:38', '2016-03-30 09:41:38', null, '0', '1092', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1033', 'e749e4ab-e8e0-4a49-ab61-a2da0828b04c.png', '新增企业2', '22222', '223423423', null, null, null, '河南省', '周口市', '扶沟县', '南街78号', null, '今天', null, null, null, '440788199806121719', '2016-03-25', '13877656888', '1111', '111', '42cc86f8-449f-4316-8925-46ae97bbb5b1.png', null, '8c1b9949-9736-4a4c-bd53-410eff424150.jpg', 'e9a6f8d1-d13b-4563-bca5-b1468a60aa8f.jpg', '就过分的话', '中国建设银行', '山西省', '543543645656546', '8小时', '2天', '1天', null, '快回家', '13877676766', '', '', '2016-03-30 09:58:03', '2016-03-30 09:58:03', null, '0', '1093', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1035', '2f3096fc-8e8e-4246-aecc-17c12209ba33.jpg', '新增企业3', '2345234', '4545434', null, null, null, '浙江省', '嘉兴市', '秀洲区', '东街66号', null, '大东', null, null, null, '440788198806121719', '2016-03-17', '13877656888', '', '', '16fe47cb-bc7e-4148-8038-1545f16aa4f4.jpg', null, '533f2aac-cf72-4f20-91d6-ae0ba921dfcc.jpg', '1be50160-2d84-4b24-a1d0-c75065f564b0.png', '打', '招商银行', '河北省', '543543645656546', '3小时', '2小时', '11小时', null, '研讨会', '13877676766', '123423423', '64564h', '2016-03-30 10:21:23', '2016-03-30 10:21:23', null, '0', '1095', null, null, null, null, null, 'Y', 'N');
INSERT INTO estore VALUES ('1036', '2da25800-6748-421e-b1c0-482653c107c3.jpg', '新增自营店铺1', '4434', '23', null, null, null, '湖北省', '随州市', '曾都区', '西街99号', null, '交付', null, null, null, '440788198806121719', '2016-03-10', '13877656888', '767', '845656', '28cd3290-e057-48d5-820a-e16d3ebdefb3.jpg', null, 'e0351a69-9638-452e-8915-efa5ffec0dfa.jpg', '80b5a1ce-73e7-4e67-8115-a1d6b87747e6.png', '部分', '中国农商银行', '江西省', '797767568678', '76小时', '78小时', '3小时', null, '也太过分', '13877676766', '234314', '53454643', '2016-03-30 10:56:40', '2016-03-30 10:56:40', null, '0', '1096', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1045', 'b987250d-d8c7-4afc-a025-567998d9a1ce.png', '测试1', '24234', '5345', null, null, null, '浙江省', '杭州市', '西湖区', '发的发的', null, '打发点', null, null, null, '440788199806121719', '2016-04-14', '18651650542', '', '', '13fa07bc-d97f-4a53-8d96-d785e81ee322.jpg', null, null, null, '发多少', '招商银行', '内蒙古自治区', '797767568678', '5小时', '6小时', '1小时', null, '东莞市分公司和', '13877676765', '', '', '2016-04-01 11:22:41', '2016-04-01 11:22:41', null, '0', '1109', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1046', 'a6fc0dc1-927d-4098-86f3-52ca10745eb9.png', '测试1', '24234', '5345', null, null, null, '浙江省', '杭州市', '西湖区', '发的发的', null, '打发点', null, null, null, '440788199806121719', '2016-04-14', '18651650542', '', '', '0488c242-8733-4c8a-ac17-2ebd45977a17.jpg', null, null, null, '发多少', '招商银行', '内蒙古自治区', '797767568678', '5小时', '6小时', '1小时', null, '东莞市分公司和', '13877676765', '', '', '2016-04-01 11:22:36', '2016-04-01 11:22:36', null, '0', '1110', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1047', 'a9238bcb-fbf7-4e8d-9a91-ddf1293d63ba.png', '新增测试企业', '54354', '6546', null, null, null, '广东省', '江门市', '蓬江区', '刚刚噶阿萨德发的是', null, '刚刚', null, null, null, '440788199806121719', '2016-04-22', '18651650542', '', '', '07d4c7d6-b5e7-4665-8951-789e472483c8.png', null, 'bac0b1ee-6f3a-4c93-ab31-9f4dae8a0212.png', 'eeec6675-8b14-4d7f-8217-2cc28502dca0.jpg', '表达的', '中国工商银行', '天津市', '543543645656546', '3小时', '4小时', '1小时', null, '好多个', '13877676764', '', '', '2016-04-01 11:40:38', '2016-04-01 11:40:38', null, '0', '1111', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1048', null, '腾讯', '800820880', '52312321', null, null, null, '黑龙江省', '七台河市', '茄子河区', '天河区', null, '习近平', null, null, null, '360293829013892833', '2016-04-27', '13699747407', '1262510903', '13263065287', '2eac047f-5b5b-40e4-99dd-d55a05cb5f4d.jpg', null, null, null, '习近平', '中国工商银行', '天津市', '456789765434567890', '1小时', '1小时', '1小时', null, '洋洋', '13699747407', '1262610903', '12313231232', '2016-04-01 14:16:49', '2016-04-01 14:16:49', null, '0', '1112', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1049', null, '阿里巴巴', '876768777', '64465444', null, null, null, '广东省', '广州市', '天河区', '华景新城', null, '小明', null, null, null, '420704199310014313', '2021-04-04', '18071173689', '756302371', 'a756302371', null, null, null, null, '招商银行', '中国招商银行', '广州市', '456789765434567899', '10小时', '10小时', '10小时', null, '小红', '18802093449', '1187120228', 'a1187120228', '2016-04-04 14:16:49', '2016-04-04 14:16:49', '0', '1', '1113', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1050', '9bc97c19-ef8c-47b4-be17-298c7759c243.png', '4-5测试企业1', '234X', null, null, null, null, '广东省', '', null, '北街23号', null, '大东', null, null, null, '440788199806121719', '2016-04-21', '18651650542', '123', '123', 'de2e5378-0e78-4b90-9ac3-141c1809e836.jpg', null, 'a19d372c-aca4-4836-aa69-8282e012e4b3.png', 'bb79729f-d97d-4b2c-812d-4c341e639f4f.png', '后会发生非', '中国农商银行', '山西省', '797767568678', '2小时', '1天', '17小时', null, '法国人', '13877676763', '86765', '645656', '2016-04-05 14:14:50', '2016-04-05 14:14:50', null, '0', '1114', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1051', 'abfd1dd6-17c0-4245-bf8f-cb027c2fdf30.png', '4-5测试企业2', '4324XXXX', null, null, null, null, '广东省', '广州市', '南沙区', '天街13号', null, '高德', null, null, null, '440788199806121719', '2016-04-09', '18651650542', '654654', '3244546453', '54162f8b-dc23-4904-9843-5673940bf4ae.png', null, '83bad0c5-dbb0-4c17-bc76-45a566c84ae5.png', '33104e81-43b0-46d0-8ad4-e3a542713e59.jpg', '九宫格', '中国工商银行', '河北省', '797767568678', '2小时', '1小时', '17小时', null, '高德', '13877676762', '', '', '2016-04-05 14:29:00', '2016-04-05 14:29:00', null, '0', '1115', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1053', 'c9861dbf-27be-4f64-812d-155f0921e7e8.png', '4-5新增测试企业4', 'TTTT678', null, null, null, null, '山东省', '滨州市', '无棣县', '南街66号', null, '防火窗', null, null, null, '440788190006121719', '2016-04-21', '18651650542', '456', '456', 'ceb37f30-20df-410f-998f-c5fe4425aa17.png', null, '924eb4dc-9e66-4ca0-96e8-dcd22e0ec3b4.png', 'a479d488-9791-4bd1-bb04-221954ad40a5.jpg', '鬼斧神工', '招商银行', '天津市', '797767568678', '2小时', '2小时', '1小时', null, '好菜', '13877676760', '123', '123', '2016-04-05 15:43:05', '2016-04-05 15:43:05', null, '0', '1117', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1054', '965544e0-79eb-405b-84f1-11d3f3100260.png', '4-5新增批发商1', 'gg123', null, null, null, null, '广东省', '广州市', '天河区', '东街33号', null, '噶打法', null, null, null, '440788199806121719', '2016-04-14', '18651650542', '123', '123', '77624fb3-53e6-428d-a799-b68e0896a64c.png', null, '8cb92687-e2b1-4033-b80a-7713fcd2a55a.png', '535e36ea-5a5b-4795-b0de-6475bf6cb8b7.jpg', '号多个省份', '招商银行', '河北省', '797767568678', '5小时', '5小时', '1小时', null, '美好的', '13877676759', '123', '123', '2016-04-05 15:45:46', '2016-04-05 15:45:46', null, '0', '1118', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1055', '0d002feb-ce20-4d28-899b-d80bfb8b04ad.png', '4-5新增自营店1', 'GG2', null, null, null, null, '广东省', '广州市', '天河区', '西街33号', null, '个人和人', null, null, null, '440788198816121719', '2016-04-07', '18651650542', '123', '123', 'fe31dd76-e63a-47b1-b212-c16450115a34.png', null, '3c90d4c0-0fb5-4666-92a2-65ca33c28c09.png', '3c005a0b-877a-49f3-bdbb-f2f6cad030d6.jpg', '嘎达的', '华夏银行', '天津市', '797767568678', '1小时', '1小时', '1小时', null, '挂的第三方', '13877676767', '123', '432432', '2016-04-05 15:48:09', '2016-04-05 15:48:09', null, '0', '1119', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1056', '6154865b-7a70-4120-84f5-4d668ea74da5.jpg', '测试店铺0001', '100107734098', null, null, null, null, '广东省', '广州市', '天河区', '测试地址', null, '刘积训', null, null, null, '43102319900101751X', '2019-04-05', '15920916679', '', '', 'e51047b1-ca63-4486-94d3-7953eaa74795.jpg', null, '12284abb-063c-405a-9e39-6d6a6f4e56bc.jpg', 'a39cdde5-0d1f-4115-b484-8c29563f78d2.jpg', '刘积训', '中国工商银行', '广东省', '6222023602077238426', '2小时', '12小时', '24小时', null, '刘积训', '15920916671', '', '', '2016-04-05 17:10:11', '2016-04-05 17:10:11', null, '0', '1120', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1057', '1bc15480-9d01-4fc4-b99b-7fb3ba4149c4.jpg', '世纪天成', '98289790', null, null, null, null, '江苏省', '苏州市', '吴中区', '吴中大厦', null, '世纪天成', null, null, null, '420704199310014313', '2024-04-01', '18802093449', '756302371', 'a756302371', 'baaa0e0b-ecf0-406c-a14c-cba4e03a084a.jpg', null, '64fd2a89-d1bb-4366-ba6e-7cd9bf743689.jpg', '00377d78-4a6a-444a-a73e-1383766de24c.jpg', '招商银行', '招商银行', '广东省', '299897087979867', '10小时', '10小时', '10小时', null, '梧桐', '18071171111', '', '', '2016-04-05 18:02:16', '2016-04-05 18:02:16', null, '0', '1121', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1058', null, '测试6', '234-43513abce-234', null, null, null, null, '广东省', '深圳市', '宝安区', 'fadfad', null, 'Gee', null, null, null, '440788199006121719', '2016-04-06', '18651650542', '543543', '545645654', 'ccc53e99-0b0a-4a3b-ace8-f41ce2ac1825.jpg', null, '9b236fec-99c3-4cbb-8643-5b57041c3fc4.jpg', 'bae1a96b-ae8f-4ef8-b44c-b4092b286566.png', '佳世客了的那个', '中国工商银行', '河北省', '797767568678', '2小时', '3小时', '1小时', null, '挂的第三方', '13877676768', '23434', '4534534', '2016-04-05 18:45:20', '2016-04-05 18:45:20', null, '0', '1122', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1059', null, '而伟大是飞洒的', '23423423', null, null, null, null, '', null, null, '富士达发生的', null, '嘎达的手法', null, null, null, '440788198806121719', '2016-04-07', '567567566', '', '', null, null, null, null, '就法国队和', '', '', '543543645656546', '4343小时', '2小时', '1小时', null, '东莞市分公司和', '13877676769', '', '', '2016-04-05 18:53:28', '2016-04-05 18:53:28', null, '0', '1123', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1060', 'cf41c101-a191-4ff5-9883-0db7f6e3a983.jpg', '测试帐号07', '234243-9', null, null, null, null, '广东省', '广州市', '海珠区', '测试地址', null, '测试人', null, null, null, '431023199001017514', '2020-04-06', '15920916679', '', '', 'd497ec41-3e7f-4ddf-ac01-9490d70de051.jpg', null, null, 'a7d157ef-1807-4a42-9efe-5ab84e28d06d.jpg', '刘积训', '中国工商银行', '广东省', '62222023602077238426', '12小时', '12小时', '12小时', null, '刘积训', '15920916601', '', '', '2016-04-06 09:54:28', '2016-04-06 09:54:28', null, '0', '1124', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1061', '6c10f450-cd4e-47dc-88b4-ffc93af234fc.png', '测试账号1', '321324-9', null, null, null, null, '广东省', '广州市', '天河区', '测试地址', null, '刘积训', null, null, null, '431023199001017514', '2020-04-06', '15920916679', '', '', '5603182e-d607-4a7c-b1be-48491c1131b5.jpg', null, '6c807569-70c0-48b3-a7a8-7d6d49de84e7.jpg', '4011580c-34d4-44b1-96b4-185275045496.jpg', '刘积训', '中国工商银行', '广东省', '6222023602077238426', '12小时', '12小时', '12小时', null, '刘积训', '15920916602', '', '', '2016-04-06 10:14:43', '2016-04-06 10:14:43', null, '0', '1125', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1062', '70ad5b9d-1423-4fb1-9630-858afb02cd90.jpg', '么么啊的', '3456789-1234567', null, null, null, null, '湖北省', '咸宁市', '咸安区', '天河区', null, '刘邦', null, null, null, '511702197407135024', '2016-04-22', '13699747407', '1262510903', '13264065262', '85297000-e06c-4502-af0d-de056261e61e.jpg', null, null, null, '刘邦', '中国农商银行', '河北省', '234567897654323456', '24小时', '24小时', '15920916673小时', null, '刘邦', '13263065267', '1262510903', '4567887654', '2016-04-06 10:20:49', '2016-04-06 10:20:49', null, '0', '1126', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1064', '1459931826290285941.JPG', '英雄家弄', '15258', '10010', null, null, null, '江西省', '新余市', '渝水区', '江西省新余市渝水区江西工程学院', null, '许鸿桂', null, null, null, '420704199310014313', '2021-04-04', '13427664780', '', '', '1459937023780651812.png', null, '1459937023781132485.png', '1459937023781171744.png', '招商银行', '招行', '新余', '1568742589635478', '10小时', '10小时', '8小时', null, '吴同', '18802093449', '', '', '2016-04-06 10:50:16', null, '0', '0', '1128', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1065', '0198f851-06ec-4200-acf9-ff8f012f1c2f.png', '4-6测试企业1', '2435442', null, null, null, null, '吉林省', '四平市', null, '富家凹看来你嘎达', null, '的更好地给', null, null, null, '440788199906121719', '2016-04-15', '18651650542', '34545', '55345', null, null, null, null, '是甘肃风光', '中国建设银行', '山西省', '543543645656546', '5小时', '6小时', '1小时', null, '东莞市分公司和', '13877676771', '', '', '2016-04-06 11:09:17', '2016-04-06 11:09:17', null, '0', '1129', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1066', 'bd9296cb-3fd3-4859-bee3-c5783852446b.jpg', '啦啦啦', '4567890-12345678', null, null, null, null, '四川省', '自贡市', '大安区', '天河区', null, '张飞', null, null, null, '511702197407135024', '2016-04-30', '13699747407', '1262510903', '45678923456', 'cacbfbc0-f94e-444d-b96e-392814ad7720.jpg', null, null, null, '张飞', '招商银行', '北京市', '3456789876543', '12小时', '12小时', '13263065267小时', null, '张飞', '15974740719', '12345678', '1234567', '2016-04-06 11:22:57', '2016-04-06 11:22:57', null, '0', '1130', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1067', '7500c5a0-aab7-4e13-919a-629ecd6ebfe8.png', '测试企业08', '32434343-9', null, null, null, null, '广东省', '广州市', '天河区', '测试地址01', null, '刘积训', null, null, null, '431023199001017514', '2022-04-06', '15920916679', '', '', '8b549d69-851b-4525-9f58-cb878fa760b8.jpg', null, 'ac19873b-f2a2-4291-b2d7-7008464e1f8b.jpg', '80e6a530-0058-4e8b-a107-0db5704d0c4c.jpg', '刘积训', '中国工商银行', '广东省', '6222023602077238426', '12小时', '12小时', '12小时', null, '刘积训', '15920916605', '', '', '2016-04-06 11:46:47', '2016-04-06 11:46:47', null, '0', '1131', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1068', null, 'åç§»ç§æ', '102315864561231', '1010', null, null, null, '广东省', '广州市', '天河区', 'å¹¿ä¸çå¹¿å·å¸å¤©æ²³åºä¸­å±±å¤§é89å·', null, 'æ¡å­', null, null, null, '445121199004074213', '20180412', '15876918137', '', '', '1459921173288157677.png', null, '1459921173289386428.png', '1459921173289814598.png', 'æ¡å­', 'ä¸­å½å»ºè®¾é¶è¡', 'å¹¿å·', '6222300115794912', '12å°æ¶ä»¥å', '12å°æ¶ä»¥å', 'ä¸å¤©ä»¥å', null, 'æ¡å­', '13427664780', '', '', '2016-04-06 11:53:40', null, '0', '0', '1132', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1069', '758ddef1-73b2-4c2e-8414-2748d0d834f8.jpg', '广州科渥菲投资管理中心（有限合伙）', '9144010ma9awqw32', null, null, null, null, '广东省', '广州市', '增城市', '九龙镇', null, '刘德健', null, null, null, '440106198809190331', '2034-10-08', '13808873470', '', '', 'fa45e0a8-3c69-411e-8c3a-e2026f5422a5.jpg', null, '4fa348ac-3d19-441f-93fc-d7f3243eb132.jpg', '0feb3beb-d70a-4edf-bf34-4589ff932219.jpg', '广州科渥菲投资管理中心（有限合伙）', '招商银行', '广东省', '120910150010101', '12小时', '12小时', '12小时', null, '姚迪', '13808873470', '', '', '2016-04-06 11:59:44', '2016-04-06 11:59:44', null, '0', '1133', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1070', '1459924022764644892.JPG', '华移科技', '123412341234123', '1001', '天河区', '广州市', '广东省', '广东省', '潮州市', '潮安县', '广东省潮州市潮安县彩塘镇', '中山大道89号', '桂子', null, '2016-04-06 15:03:06', '0', '445121199004074213', '20181212', '15876918138', '', '', '1459923674993184851.png', null, '1459923674994271437.png', '1459923674994284015.png', '桂子', '中国建设银行', '广州', '6222300115794912', '12小时以内', '12小时以内', '一天以内', null, '桂子', '13427664780', '', '', '2016-04-06 13:46:20', null, '0', '0', '1134', null, null, null, null, null, 'N', 'Y');
INSERT INTO estore VALUES ('1071', 'e04ecadf-6c9e-407e-bd23-828550408dd2.jpg', '4-6新增', '2434-3245', null, null, null, null, '浙江省', '杭州市', '西湖区', '发发的个', null, '三国法', null, null, null, '440788198806121719', '2016-04-14', '18651650542', '434543', '345654', 'c9fb3594-1ff4-4d36-b756-e836d0b3830b.jpg', null, null, '5c7c38ee-fe0b-4706-ac0a-e7b60ba0ec35.jpg', '嘎达', '中国工商银行', '天津市', '797767568678', '2小时', '3小时', '4小时', null, '昂纳', '13877676772', '', '', '2016-04-06 14:29:06', '2016-04-06 14:29:06', null, '0', '1135', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1072', 'e7134750-bf23-4904-b7b2-a1c2e22176d5.png', '北京量生钱网络科技有限公司', '110108018794749', null, null, null, null, '北京市', '海淀区', null, '中关村东路66号1号楼2层商业3-055', null, '刘积训', null, null, null, '431023199001017514', '2017-06-08', '15920916679', '', '', '862afd4a-b8b6-4781-9731-6ffc28517e76.jpg', null, '92db0320-7bf5-4141-ac3d-74bd377e2fab.jpg', 'f9cc6734-f296-4ffa-a625-f0c85c40fa0a.jpg', '刘积训', '招商银行', '北京市', '110915821510802', '12小时', '12小时', '12小时', null, '刘积训', '15920916606', '', '', '2016-04-07 09:52:00', '2016-04-07 09:52:00', null, '0', '1137', null, null, null, null, null, 'Y', 'N');
INSERT INTO estore VALUES ('1073', 'cc693157-bd8e-4725-a13b-56d997b7a543.png', '测试店铺-0408', '100103535-9', null, null, null, null, '广东省', '广州市', '天河区', '华景新城189号', null, '刘积训', null, null, null, '431023199001017514', '2016-04-08', '15920916679', '', '', '3e0663e5-812b-47e6-bba5-96cb85044d58.jpg', null, null, 'b7eff332-4012-4ec9-9bee-92bc58ab3434.jpg', '深圳市华移科技有限公司(广州分公司)', '中国工商银行', '广东省', '6222023602077238426', '12小时', '12小时', '12小时', null, '刘积训', '15920916679', '', '', '2016-04-08 09:13:02', '2016-04-08 09:13:02', null, '0', '1143', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1074', '033b4fad-6dd4-4b39-92b3-53f8147d2d06.png', '4-8测试企业1', '213-4234', null, null, null, null, '福建省', '', null, '发点过来的', null, '打发点', null, null, null, '440788199806121719', '2016-03-30', '13877656888', '', '', 'd6ddaef5-4b6c-44b7-a31c-ea01cc6e381b.png', null, null, null, '法国的', '招商银行', '内蒙古自治区', '543543645656546', '33小时', '5小时', '1小时', null, '阿斯顿发送到', '18651650542', '3213', '23434', '2016-04-08 10:53:17', '2016-04-08 10:53:17', null, '0', '1144', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1075', 'fcfb05d7-78c9-4ce5-a8bc-89163263bcd6.png', '4-8新增企业2', '2323-4543', null, null, null, null, '福建省', '', null, '是四分公司非', null, '干爹后宫', null, null, null, '440788198806121719', '2016-04-16', '13877656888', '', '', '43cc4e6c-b94f-4c11-80b2-41164445ddc6.png', null, null, null, '大法师的', '中国建设银行', '山西省', '797767568678', '2小时', '2小时', '1小时', null, '噶打法的', '18651650542', '324', '435345', '2016-04-08 10:56:38', '2016-04-08 10:56:38', null, '0', '1145', null, null, null, null, null, 'N', 'N');
INSERT INTO estore VALUES ('1076', '63368967-dc89-4474-89fb-77596ad9b89c.jpg', '1231', '123123', null, null, null, null, '浙江省', '杭州市', '建德市', '123123', null, '123123', null, null, null, '360733199509090222', '2016-04-04', '13263065267', '1262510903', '5678923', '0661951e-cfe2-4788-a192-6b544ca6bc8f.jpg', null, null, null, '123124', '招商银行', '北京市', '123124123', '1小时', '1小时', '15920916673小时', null, 'asda', '13699747407', '1262510903', '567891', '2016-04-08 11:00:57', '2016-04-08 11:00:57', null, '0', '1146', null, null, null, null, null, 'N', 'N');

-- ----------------------------
-- Table structure for `evaluate`
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-用户评价表主键',
  `idEvaluate` int(11) DEFAULT NULL COMMENT '评价人主键，就是用户主键',
  `orderNo` char(20) DEFAULT NULL COMMENT '订单编号',
  `evaluatecontent` varchar(100) DEFAULT NULL COMMENT '评价内容',
  `evaluatetime` datetime DEFAULT NULL COMMENT '评价时间',
  `idReply` int(11) DEFAULT NULL COMMENT '回复人',
  `replycontent` varchar(100) DEFAULT NULL COMMENT '回复内容',
  `replytime` datetime DEFAULT NULL COMMENT '回复时间',
  `isRead` char(1) DEFAULT NULL COMMENT '是否已读 Y=已读，N=未读',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(30) DEFAULT NULL COMMENT '预留字段1',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8 COMMENT='系统管理-用户评价表evaluate';

-- ----------------------------
-- Records of evaluate
-- ----------------------------
INSERT INTO evaluate VALUES ('1000', '1077', '1027', '哈体健康快乐', '2016-04-08 17:08:44', null, null, null, 'N', '2016-04-08 17:08:44', '0', null);

-- ----------------------------
-- Table structure for `feedback`
-- ----------------------------
DROP TABLE IF EXISTS `feedback`;
CREATE TABLE `feedback` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-用户反馈表',
  `idFeedback` int(11) DEFAULT NULL COMMENT '反馈人主键，就是用户主键',
  `feedbacktime` datetime DEFAULT NULL COMMENT '反馈时间',
  `feedcontent` varchar(1000) DEFAULT NULL COMMENT '反馈内容',
  `replycontent` varchar(100) DEFAULT NULL COMMENT '回复内容',
  `idReply` int(11) DEFAULT NULL COMMENT '回复人主键，就是用户主键',
  `replytime` datetime DEFAULT NULL COMMENT '回复时间',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(30) DEFAULT NULL COMMENT '预留字段1',
  `isRead` char(1) DEFAULT NULL COMMENT '是否阅读',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1024 DEFAULT CHARSET=utf8 COMMENT='系统管理-用户反馈表feedback';

-- ----------------------------
-- Records of feedback
-- ----------------------------
INSERT INTO feedback VALUES ('8', '1001', '2016-01-29 14:30:46', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-01-29 14:30:46', '0', null, null);
INSERT INTO feedback VALUES ('9', '1001', '2016-02-04 14:36:41', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-02-04 14:36:41', '0', null, null);
INSERT INTO feedback VALUES ('10', '1000', '2016-02-04 14:46:49', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-02-04 14:46:49', '1', null, null);
INSERT INTO feedback VALUES ('11', '1000', '2016-02-04 14:49:38', '', '这是回复内容！！！', null, null, '2016-02-04 14:49:38', '1', null, null);
INSERT INTO feedback VALUES ('12', '1000', '2016-02-04 14:49:38', '', '这是回复内容！！！', null, null, '2016-02-04 14:49:38', '1', null, null);
INSERT INTO feedback VALUES ('13', '1000', '2016-02-04 14:49:38', '', '这是回复内容！！！', null, null, '2016-02-04 14:49:38', '1', null, null);
INSERT INTO feedback VALUES ('14', '1000', '2016-02-04 14:49:40', '', '这是回复内容！！！', null, null, '2016-02-04 14:49:40', '1', null, null);
INSERT INTO feedback VALUES ('15', '1000', '2016-02-04 14:52:38', '', '这是回复内容！！！', null, null, '2016-02-04 14:52:38', '1', null, null);
INSERT INTO feedback VALUES ('16', '1000', '2016-02-04 15:03:32', '5555686', '这是回复内容！！！', null, '2016-03-03 11:10:27', '2016-02-04 15:03:32', '1', null, null);
INSERT INTO feedback VALUES ('17', '1000', '2016-02-23 14:16:49', '??????????', '这是回复内容！！！', null, null, '2016-02-23 14:16:49', '1', null, null);
INSERT INTO feedback VALUES ('18', '1000', '2016-02-29 12:45:51', '???????????????????????????', '这是回复内容！！！', null, null, '2016-02-29 12:45:51', '1', null, null);
INSERT INTO feedback VALUES ('19', '1000', '2016-02-29 12:48:16', '???????????????????????????', '这是回复内容！！！', null, null, '16-03-04 09:52:52', '1', null, null);
INSERT INTO feedback VALUES ('20', '1000', '2016-02-29 12:49:01', '???????????????????????????', '这是回复内容！！！', null, null, '16-03-04 09:53:01', '1', null, null);
INSERT INTO feedback VALUES ('21', '1007', '2016-03-01 09:51:45', '??', '这是回复内容！！！', null, null, '2016-03-01 09:51:45', '1', null, null);
INSERT INTO feedback VALUES ('22', '1000', '2016-03-01 16:03:04', '????????????', '这是回复内容！！！', null, null, '2016-03-01 16:03:04', '1', null, null);
INSERT INTO feedback VALUES ('23', '1000', '2016-03-01 16:15:36', '啦啦啦。啦啦啦。反馈意见啦！！', '假数据太坑爹了', null, '2016-03-03 11:10:27', '2016-03-01 16:15:36', '1', null, null);
INSERT INTO feedback VALUES ('24', '1000', '2016-03-03 17:06:04', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:06:04', '1', null, null);
INSERT INTO feedback VALUES ('25', '1000', '2016-03-03 17:07:21', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:07:21', '1', null, null);
INSERT INTO feedback VALUES ('26', '1000', '2016-03-03 17:08:20', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:08:20', '1', null, null);
INSERT INTO feedback VALUES ('27', '1000', '2016-03-03 17:09:35', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:09:35', '1', null, null);
INSERT INTO feedback VALUES ('28', '1000', '2016-03-03 17:16:27', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:16:27', '1', null, null);
INSERT INTO feedback VALUES ('29', '1000', '2016-03-03 17:17:15', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:17:15', '1', null, null);
INSERT INTO feedback VALUES ('30', '1000', '2016-03-03 17:26:43', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:26:43', '1', null, null);
INSERT INTO feedback VALUES ('31', '1000', '2016-03-03 17:28:32', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:28:32', '1', null, null);
INSERT INTO feedback VALUES ('32', '1000', '2016-03-03 17:29:22', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:29:22', '1', null, null);
INSERT INTO feedback VALUES ('33', '1000', '2016-03-03 17:30:45', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:30:45', '1', null, null);
INSERT INTO feedback VALUES ('34', '1000', '2016-03-03 17:38:21', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:38:21', '1', null, null);
INSERT INTO feedback VALUES ('35', '1000', '2016-03-03 17:41:22', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '这是回复内容！！！', null, null, '2016-03-03 17:41:22', '1', null, null);
INSERT INTO feedback VALUES ('36', '1000', '2016-03-03 17:42:28', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', null, null, null, '2016-03-03 17:42:28', '1', null, null);
INSERT INTO feedback VALUES ('37', '1000', '2016-03-03 18:07:59', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', null, null, null, '2016-03-03 18:07:59', '1', null, null);
INSERT INTO feedback VALUES ('38', '1000', '2016-03-08 17:47:20', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', '<font face=\"arial\">感谢您的反馈</font>', '2', '2016-03-28 10:20:59', '16-03-28 10:26:44', '1', null, null);
INSERT INTO feedback VALUES ('39', '1000', '2016-03-08 17:47:38', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', null, null, null, '16-03-28 10:39:39', '1', null, null);
INSERT INTO feedback VALUES ('40', '1000', '2016-03-08 17:47:41', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', null, null, null, '16-03-28 10:39:44', '1', null, null);
INSERT INTO feedback VALUES ('41', '1000', '2016-03-09 11:55:34', '这是反馈内容！！！这是反馈内容！！！这是反馈内容！！！', null, null, null, '16-03-28 10:39:57', '1', null, null);
INSERT INTO feedback VALUES ('42', '1000', '2016-03-09 12:34:04', '', null, null, null, '16-03-18 09:52:00', '1', null, null);
INSERT INTO feedback VALUES ('43', '1000', '2016-03-09 12:36:10', '', null, null, null, '16-03-17 17:58:50', '1', null, null);
INSERT INTO feedback VALUES ('44', '1000', '2016-03-10 17:42:51', '在于自己心态', null, null, null, '16-03-18 09:52:00', '1', null, null);
INSERT INTO feedback VALUES ('45', '1000', '2016-03-10 17:42:51', '在于自己心态', null, null, null, '16-03-18 09:52:07', '1', null, null);
INSERT INTO feedback VALUES ('46', '1000', '2016-03-10 17:42:53', '在于自己心态', null, null, null, '16-03-18 09:52:08', '1', null, null);
INSERT INTO feedback VALUES ('47', '1000', '2016-03-11 15:33:45', '', null, null, null, '16-03-18 09:55:19', '1', null, null);
INSERT INTO feedback VALUES ('48', '1000', '2016-03-11 16:42:49', '最后两边有时候', null, null, null, '16-03-21 10:25:21', '1', null, null);
INSERT INTO feedback VALUES ('49', '1000', '2016-03-11 16:42:52', '最后两边有时候', null, null, null, '16-03-18 09:52:17', '1', null, null);
INSERT INTO feedback VALUES ('50', '1079', '2016-03-14 14:23:44', '兔兔', null, null, null, '16-03-18 09:52:17', '1', null, null);
INSERT INTO feedback VALUES ('54', '1000', '2016-03-18 11:31:25', '我的', null, null, null, '16-03-21 10:25:21', '1', null, null);
INSERT INTO feedback VALUES ('60', '1077', '2016-03-23 13:46:51', '我们都会有人喜欢么！你就可以理解的话。我的人家都市全部的话可以理解为什么有人喜欢我了。我们在一起了。我的人家都市全部都市全部都会有人喜欢么。我们在一起的确是不是也许我的人家都市全部的话', 'Don\'t take yourself look too light, in fact, in my heart, it is very important to you!     ----吴世桢', '2', '2016-03-23 14:08:31', '16-03-28 10:39:25', '1', null, 'Y');
INSERT INTO feedback VALUES ('61', '1000', '2016-03-24 09:39:39', 'T', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('62', '1000', '2016-03-24 15:08:57', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('63', '1000', '2016-03-24 15:08:57', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('64', '1000', '2016-03-24 15:08:57', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('65', '1000', '2016-03-24 15:08:57', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('66', '1000', '2016-03-24 15:22:12', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('1000', '2', '2016-03-24 16:10:17', 'ç³»ç»ç¨èµ·æ¥Hiåä¸ç¨³å®', null, null, null, '16-03-30 09:42:51', '1', null, 'N');
INSERT INTO feedback VALUES ('1001', '2', '2016-03-24 16:14:29', 'ååååå', null, null, null, '16-03-30 09:42:51', '1', null, 'N');
INSERT INTO feedback VALUES ('1002', '2', '2016-03-24 16:16:53', 'çµè¯é½ä¼è§å¾', null, null, null, '16-03-30 09:42:51', '1', null, 'N');
INSERT INTO feedback VALUES ('1003', '2', '2016-03-24 16:19:28', '丰富车VC', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('1004', '1066', '2016-03-25 18:06:28', '', null, null, null, '16-03-30 09:42:58', '1', null, 'N');
INSERT INTO feedback VALUES ('1005', '1066', '2016-03-25 18:24:08', '', null, null, null, '16-03-30 09:42:59', '1', null, 'N');
INSERT INTO feedback VALUES ('1006', '1000', '2016-03-29 11:15:42', '一天天偷偷地在这里说！你就能不让利只', null, null, null, '2016-03-29 11:15:42', '0', null, 'N');
INSERT INTO feedback VALUES ('1007', '1000', '2016-03-29 11:51:51', '', null, null, null, '16-03-30 09:43:20', '1', null, 'N');
INSERT INTO feedback VALUES ('1008', '1000', '2016-03-29 12:00:10', 'tgggggg', null, null, null, '16-03-30 09:43:28', '1', null, 'N');
INSERT INTO feedback VALUES ('1009', '1000', '2016-03-29 12:02:17', '这样才算好', null, null, null, '2016-03-29 12:02:17', '0', null, 'N');
INSERT INTO feedback VALUES ('1010', '1086', '2016-03-29 14:12:45', '测试iOS意见反馈', null, null, null, '16-04-01 11:23:11', '1', null, 'N');
INSERT INTO feedback VALUES ('1011', '1086', '2016-03-29 17:24:27', '测试Android反馈意见', null, null, null, '16-04-01 11:23:11', '1', null, 'N');
INSERT INTO feedback VALUES ('1012', '1000', '2016-03-30 14:05:53', '不会太空了', null, null, null, '2016-03-30 14:05:53', '0', null, 'N');
INSERT INTO feedback VALUES ('1013', '1000', '2016-03-30 14:16:27', 'Ffffffffffffffff', '测试Web回复反馈内容', '2', '2016-04-01 11:27:10', '16-04-01 11:27:10', null, null, 'Y');
INSERT INTO feedback VALUES ('1014', '1099', '2016-03-30 15:56:22', '测试Android卖家意见反馈', null, null, null, '16-04-01 11:23:04', '1', null, 'N');
INSERT INTO feedback VALUES ('1015', '1000', '2016-04-01 16:29:56', '意见反馈测试', null, null, null, '2016-04-01 16:29:56', '0', null, 'N');
INSERT INTO feedback VALUES ('1016', '1077', '2016-04-05 11:41:02', '华为p9标准版预计4月16号开售。', '我送你一个p9max！！', '2', '2016-04-05 11:51:08', '2016-04-05 11:41:02', '1', null, 'Y');
INSERT INTO feedback VALUES ('1017', '1077', '2016-04-05 16:59:23', '华为p9高配版预计4月16号开售。', '我送你一个p9max！！！！', '2', '2016-04-05 16:59:43', '2016-04-05 16:59:23', '1', null, 'Y');
INSERT INTO feedback VALUES ('1018', '1077', '2016-04-05 16:59:25', '华为p9青春版预计4月16号开售。', '我送你一个p9max！！！！！！', '2', '2016-04-05 16:59:46', '2016-04-05 16:59:25', '1', null, 'Y');
INSERT INTO feedback VALUES ('1019', '1000', '2016-04-06 09:14:46', '你是个个个', null, null, null, '2016-04-06 09:14:46', '0', null, 'N');
INSERT INTO feedback VALUES ('1020', '1000', '2016-04-06 09:15:13', 'Fffcccccvvvvvvvv', null, null, null, '2016-04-06 09:15:13', '0', null, 'N');
INSERT INTO feedback VALUES ('1021', '1142', '2016-04-07 16:59:55', '意见反馈测试一下吧', null, null, null, '2016-04-07 16:59:55', '0', null, 'N');
INSERT INTO feedback VALUES ('1022', '1077', '2016-04-08 10:31:09', 'Tuijjhhgbnnnnnnnm', null, null, null, '2016-04-08 10:31:09', '0', null, 'N');
INSERT INTO feedback VALUES ('1023', '1077', '2016-04-08 11:54:40', '不能容忍了吧', null, null, null, '2016-04-08 11:54:40', '0', null, 'N');

-- ----------------------------
-- Table structure for `fristlevelorder`
-- ----------------------------
DROP TABLE IF EXISTS `fristlevelorder`;
CREATE TABLE `fristlevelorder` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单管理-一级订单表主键',
  `firstlevelorderNo` char(30) DEFAULT NULL COMMENT '一级订单编号',
  `orderstatus` int(11) DEFAULT NULL COMMENT '订单状态,0待处理，1=已下单,2=已接单，3=已拒单，4=已取消，5=已签收',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺主键',
  `idUser` int(11) DEFAULT NULL COMMENT '下单人主键',
  `creationordertime` datetime DEFAULT NULL COMMENT '下单时间',
  `arrivaltime` datetime DEFAULT NULL COMMENT '到货时间',
  `paytime` datetime DEFAULT NULL COMMENT '支付时间',
  `canceltime` datetime DEFAULT NULL COMMENT '取消订单时间',
  `deliverytime` datetime DEFAULT NULL COMMENT '发货时间',
  `signtime` datetime DEFAULT NULL COMMENT '签收时间',
  `arrivaladdress` varchar(50) DEFAULT NULL COMMENT '收货地址',
  `arrivalpeople` varchar(20) DEFAULT NULL COMMENT '收货人',
  `arrivalpeopletel` char(11) DEFAULT NULL COMMENT '收货人电话',
  `collectionstarttime` datetime DEFAULT NULL COMMENT '归集开始时间',
  `collectionendtime` datetime DEFAULT NULL COMMENT '归集结束时间',
  `orderprice` decimal(16,2) DEFAULT NULL COMMENT '订单总价',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(50) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单管理-一级订单表fristlevelorder';

-- ----------------------------
-- Records of fristlevelorder
-- ----------------------------

-- ----------------------------
-- Table structure for `integral`
-- ----------------------------
DROP TABLE IF EXISTS `integral`;
CREATE TABLE `integral` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-积分表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `integral` int(11) DEFAULT NULL COMMENT '获得积分',
  `source` int(11) DEFAULT NULL COMMENT '获得积分来源，0=充值获得积分，1=购物获得积分，2=宣传获得积分，积分规则是一元人民币兑换一个积分',
  `gettime` datetime DEFAULT NULL COMMENT '获得时间',
  `cleartime` datetime DEFAULT NULL COMMENT '清除时间',
  `validtime` datetime DEFAULT NULL COMMENT '有效期结束时间',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(100) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` varchar(50) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1019 DEFAULT CHARSET=utf8 COMMENT='档案管理-积分表integral';

-- ----------------------------
-- Records of integral
-- ----------------------------
INSERT INTO integral VALUES ('1000', '1000', '10', '0', '2016-02-17 15:08:13', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:08:13', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1001', '1000', '10', '0', '2016-02-17 15:12:25', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:12:25', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1002', '1000', '10', '0', '2016-02-22 10:12:24', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-22 10:12:24', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1003', '1000', '10', '0', '2016-02-17 15:12:48', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:12:48', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1004', '1000', '20', '0', '2016-02-17 15:12:51', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:12:51', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1005', '1000', '20', '0', '2016-02-17 15:12:53', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:12:53', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1006', '1000', '100', '0', '2016-02-17 15:13:07', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:07', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1007', '1000', '200', '0', '2016-02-17 15:13:12', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:12', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1008', '1000', '300', '0', '2016-02-17 15:13:19', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:19', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1009', '1000', '500', '0', '2016-02-17 15:13:24', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:24', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1010', '1000', '1000', '0', '2016-02-17 15:13:29', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:29', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1011', '1000', '200', '0', '2016-02-17 15:13:35', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:35', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1012', '1000', '2000', '0', '2016-02-17 15:13:40', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:40', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1013', '1000', '9999', '0', '2016-02-17 15:13:45', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:45', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1014', '1000', '120', '0', '2016-02-17 15:13:49', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-17 15:13:49', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1015', '1007', '1111', '0', '2016-02-22 10:13:26', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-22 10:13:26', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1016', '1007', '2222', '0', '2016-02-22 10:13:26', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-22 10:13:26', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1017', '1007', '3333', '0', '2016-02-22 10:13:26', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-22 10:13:26', '0', null, null, null, null, null);
INSERT INTO integral VALUES ('1018', '1007', '4444', '0', '2016-02-22 10:13:26', '2016-06-17 15:08:13', '2016-06-17 15:08:13', '2016-02-22 10:13:26', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `integralexchange`
-- ----------------------------
DROP TABLE IF EXISTS `integralexchange`;
CREATE TABLE `integralexchange` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-积分兑换表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '兑换人主键',
  `spendintegral` int(11) DEFAULT NULL COMMENT '兑换积分',
  `exchangetime` datetime DEFAULT NULL COMMENT '兑换时间',
  `idCommodity` int(11) DEFAULT NULL COMMENT '兑换物品主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(50) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='档案管理-积分兑换表integralexchange';

-- ----------------------------
-- Records of integralexchange
-- ----------------------------

-- ----------------------------
-- Table structure for `integralrule`
-- ----------------------------
DROP TABLE IF EXISTS `integralrule`;
CREATE TABLE `integralrule` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-积分规则主表主键',
  `summary` varchar(100) DEFAULT NULL COMMENT '概述',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='档案管理-积分规则主表integralrule';

-- ----------------------------
-- Records of integralrule
-- ----------------------------
INSERT INTO integralrule VALUES ('4', '用户积分是凸显用户身份的一种象征，积分越多所体现其用户身份越尊贵，其所享受到的优惠越多。', '2016-02-19 10:00:00', '0', null, null);

-- ----------------------------
-- Table structure for `integraltotal`
-- ----------------------------
DROP TABLE IF EXISTS `integraltotal`;
CREATE TABLE `integraltotal` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-积分总表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `integralSum` int(11) DEFAULT NULL COMMENT '积分总数',
  `usableIntegral` int(11) DEFAULT NULL COMMENT '可用积分',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(100) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` varchar(50) DEFAULT NULL COMMENT '预留字段5',
  `validtime` datetime DEFAULT NULL COMMENT '有效期结束时间',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8 COMMENT='档案管理-积分表integral';

-- ----------------------------
-- Records of integraltotal
-- ----------------------------
INSERT INTO integraltotal VALUES ('1000', '1002', '1000', '600', '2016-02-02 10:38:29', '0', null, null, null, null, null, '2016-02-02 10:54:21');
INSERT INTO integraltotal VALUES ('1001', '1000', '2000', '1000', '2016-02-19 10:33:12', '0', null, null, null, null, null, '2016-06-19 10:33:12');
INSERT INTO integraltotal VALUES ('1002', '1007', '3000', '2222', '2016-02-19 10:34:12', '0', null, null, null, null, null, '2016-06-19 10:33:12');

-- ----------------------------
-- Table structure for `logistics`
-- ----------------------------
DROP TABLE IF EXISTS `logistics`;
CREATE TABLE `logistics` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-物流商管理表',
  `corpname` varchar(40) DEFAULT NULL COMMENT '公司名称',
  `corptel` char(15) DEFAULT NULL COMMENT '公司电话',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1009 DEFAULT CHARSET=utf8 COMMENT='档案管理-物流商管理表logistics';

-- ----------------------------
-- Records of logistics
-- ----------------------------
INSERT INTO logistics VALUES ('1', '华移', '1234567890', '16-03-18 09:57:38', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('2', '华移', '1234567890', '16-03-21 17:59:39', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('3', '深圳腾讯', '1234567890', '16-03-21 18:00:19', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('4', '撒旦啊', '123435467890', '16-03-21 18:01:50', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('5', 'mengmengda', '4567890', '16-03-25 12:03:01', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1000', '申通快递', '020-1234567', '16-03-25 09:25:14', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1001', '申通物流', '020-1234567', '16-03-25 12:03:01', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1002', '申通1', '0201231413', '16-04-01 15:06:13', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1003', '圆通', '02012312412', '16-03-25 12:03:30', '0', null, null, null, null, null);
INSERT INTO logistics VALUES ('1004', '韵达', '0201312312', '16-03-29 18:06:08', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1005', '顺丰', '0201213122', '16-03-25 12:03:52', '0', null, null, null, null, null);
INSERT INTO logistics VALUES ('1006', '铁通', '020-56017981', '16-03-28 13:58:46', '1', null, null, null, null, null);
INSERT INTO logistics VALUES ('1007', '申通', '1213232', '16-04-01 15:06:24', '0', null, null, null, null, null);
INSERT INTO logistics VALUES ('1008', '天天', '7041', '16-04-08 10:20:46', '1', null, null, null, null, null);

-- ----------------------------
-- Table structure for `orderdetailed`
-- ----------------------------
DROP TABLE IF EXISTS `orderdetailed`;
CREATE TABLE `orderdetailed` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单管理-商品清单表主键',
  `idOrderNo` int(11) DEFAULT NULL COMMENT '二级订单表主键',
  `idFirstNo` int(11) DEFAULT NULL COMMENT '一级订单表主键',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `buynumber` int(11) DEFAULT NULL COMMENT '购买数量',
  `idLevel` int(11) DEFAULT NULL COMMENT '购买级别主键',
  `buyprice` decimal(16,2) DEFAULT NULL COMMENT '商品单价',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺主键',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1051 DEFAULT CHARSET=utf8 COMMENT='订单管理-商品清单表orderdetailed';

-- ----------------------------
-- Records of orderdetailed
-- ----------------------------
INSERT INTO orderdetailed VALUES ('1040', '1027', null, '1000', '10', '1001', '0.02', '2016-04-08 17:07:39', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1041', '1027', null, '1000', '10', '1000', '0.01', '2016-04-08 17:07:39', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1042', '1028', null, '1000', '1', '1000', '0.01', '2016-04-08 17:10:49', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1043', '1029', null, '1000', '1', '1000', '0.01', '2016-04-08 17:19:40', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1044', '1029', null, '1000', '1', '1002', '0.03', '2016-04-08 17:19:40', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1045', '1030', null, '1000', '1', '1001', '0.02', '2016-04-08 17:20:15', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1046', '1031', null, '1000', '1', '1000', '0.01', '2016-04-08 17:21:38', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1047', '1032', null, '1000', '1', '1001', '0.02', '2016-04-08 17:27:10', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1048', '1033', null, '1000', '1', '1000', '0.01', '2016-04-08 17:27:23', '0', null, null, null, null, null, '1021');
INSERT INTO orderdetailed VALUES ('1049', '1034', null, '1005', '1', '1005', '22.00', '2016-04-08 17:38:16', '0', null, null, null, null, null, '1001');
INSERT INTO orderdetailed VALUES ('1050', '1035', null, '1000', '1', '1001', '0.02', '2016-04-08 17:38:30', '0', null, null, null, null, null, '1021');

-- ----------------------------
-- Table structure for `outlibrary`
-- ----------------------------
DROP TABLE IF EXISTS `outlibrary`;
CREATE TABLE `outlibrary` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '仓储物流-出库表主键',
  `outlibtime` datetime DEFAULT NULL COMMENT '出库时间',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `idOutlibrarybills` int(11) DEFAULT NULL COMMENT '出库单主键',
  `idUser` int(11) DEFAULT NULL COMMENT '出库人主键',
  `outlibnumber` int(11) DEFAULT NULL COMMENT '出库数量',
  `specifications` varchar(20) DEFAULT NULL COMMENT '规格',
  `price` decimal(16,2) DEFAULT NULL COMMENT '单价',
  `weight` int(11) DEFAULT NULL COMMENT '重量',
  `company` varchar(10) DEFAULT NULL COMMENT '单位',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(50) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  `idStore` int(11) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1017 DEFAULT CHARSET=utf8 COMMENT='仓储物流-出库outlibrary';

-- ----------------------------
-- Records of outlibrary
-- ----------------------------
INSERT INTO outlibrary VALUES ('1006', '2016-03-31 16:28:18', '1012', '1001', null, '12', '个', '12.00', '12', 'kg', '16-03-31 16:28:18', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1007', '2016-03-31 16:29:38', '1008', '1006', null, '12', '个', '12.00', '12', 'kg', '16-03-31 16:29:38', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1008', '2016-03-31 16:30:05', '1010', '1006', null, '12', '个', '12.00', '21', 'kg', '16-03-31 16:30:05', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1009', '2016-03-31 16:33:46', '1013', '1007', null, '12', '个', '12.00', '12', 'kg', '16-03-31 16:33:46', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1010', '2016-03-31 16:33:59', '1012', '1007', null, '12', '个', '21.00', '21', 'kg', '16-03-31 16:33:59', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1011', '2016-03-31 17:11:42', '1013', '1006', null, '12', '个', '21.00', '12', 'kg', '16-03-31 17:11:42', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1012', '2016-03-31 17:11:57', '1012', '1005', null, '12', '个', '21.00', '12', 'kg', '16-03-31 17:11:57', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1013', '2016-04-01 09:15:34', '1003', '1006', null, '12', '个', '12.00', '20', 'kg', '16-04-01 09:15:34', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1014', '2016-04-01 09:16:12', '1012', '1006', null, '12', '个', '12.00', '12', 'kg', '16-04-01 09:16:12', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1015', '2016-04-01 09:23:45', '1014', '1006', null, '12', '个', '21.00', '12', 'kg', '16-04-01 09:23:45', '0', null, null, null, null, null, null);
INSERT INTO outlibrary VALUES ('1016', '2016-04-01 10:23:13', '1014', '1005', null, '99', '个', '5.00', '12', 'kg', '16-04-01 10:23:13', '0', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `outlibrarybills`
-- ----------------------------
DROP TABLE IF EXISTS `outlibrarybills`;
CREATE TABLE `outlibrarybills` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT,
  `outlibrarytime` datetime DEFAULT NULL COMMENT '出库时间',
  `outlibraryperson` varchar(30) DEFAULT NULL COMMENT '经办人',
  `outlibrarybill` char(20) DEFAULT NULL COMMENT '出库单号',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺id',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(2) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1012 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of outlibrarybills
-- ----------------------------
INSERT INTO outlibrarybills VALUES ('1008', '2016-03-31 17:11:59', '测试用户', null, '1025', '16-03-31 17:12:07', '0', null);
INSERT INTO outlibrarybills VALUES ('1006', '2016-03-31 16:29:08', '测试用户', '20160331 5948', '1027', '16-03-31 16:29:18', '0', null);
INSERT INTO outlibrarybills VALUES ('1007', '2016-03-31 16:29:08', '测试用户', '20160331 9777', '1001', '16-03-31 16:29:23', '0', null);
INSERT INTO outlibrarybills VALUES ('1005', '2016-03-31 16:29:08', '测试用户', '20160331 2088', '1021', '16-03-31 16:29:13', '0', null);

-- ----------------------------
-- Table structure for `paymentdetail`
-- ----------------------------
DROP TABLE IF EXISTS `paymentdetail`;
CREATE TABLE `paymentdetail` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '收支明细主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `paymentType` char(1) DEFAULT NULL COMMENT '收支类型 0=购物消费；1=预充值；2=预充值赠送；3=推荐好友赠送；4=购物赠送',
  `paymentamount` decimal(16,2) DEFAULT NULL COMMENT '收支金额',
  `paymenttime` datetime DEFAULT NULL COMMENT '收支时间',
  `dr` int(1) DEFAULT NULL COMMENT '删除标志',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paymentdetail
-- ----------------------------
INSERT INTO paymentdetail VALUES ('1000', '1007', '0', '-500.00', '2016-02-18 09:43:10', '0', '2016-02-18 09:43:10', null, null);
INSERT INTO paymentdetail VALUES ('1001', '1007', '0', '-1000.00', '2016-02-18 09:47:05', '0', '2016-02-18 09:47:05', null, null);
INSERT INTO paymentdetail VALUES ('1002', '1007', '1', '-500.00', '2016-02-18 09:47:10', '0', '2016-02-18 09:47:10', null, null);
INSERT INTO paymentdetail VALUES ('1003', '1007', '2', '100.00', '2016-02-18 09:47:14', '0', '2016-02-18 09:47:14', null, null);
INSERT INTO paymentdetail VALUES ('1004', '1007', '4', '200.00', '2016-02-18 09:47:19', '0', '2016-02-18 09:47:19', null, null);
INSERT INTO paymentdetail VALUES ('1005', '1007', '3', '100.00', '2016-02-18 09:47:23', '0', '2016-02-18 09:47:23', null, null);
INSERT INTO paymentdetail VALUES ('1006', '1007', '4', '200.00', '2016-02-18 09:47:27', '0', '2016-02-18 09:47:27', null, null);
INSERT INTO paymentdetail VALUES ('1007', '1007', '0', '-200.00', '2016-02-18 09:47:32', '0', '2016-02-18 09:47:32', null, null);
INSERT INTO paymentdetail VALUES ('1008', '1007', '0', '-1500.00', '2016-02-18 09:47:36', '0', '2016-02-18 09:47:36', null, null);
INSERT INTO paymentdetail VALUES ('1009', '1007', '1', '-1500.00', '2016-02-18 09:47:39', '0', '2016-02-18 09:47:39', null, null);
INSERT INTO paymentdetail VALUES ('1010', '1007', '2', '150.00', '2016-02-18 09:47:46', '0', '2016-02-18 09:47:46', null, null);

-- ----------------------------
-- Table structure for `payway`
-- ----------------------------
DROP TABLE IF EXISTS `payway`;
CREATE TABLE `payway` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-支付方式表主键',
  `waycode` int(11) DEFAULT NULL COMMENT '支付方式编码，0=e币支付，1=支付宝支付，2=银联支付，3=微信支付',
  `wayname` varchar(20) DEFAULT NULL COMMENT '支付方式名称',
  `status` int(11) DEFAULT NULL COMMENT '支付方式状态，0=开通，1=关闭',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8 COMMENT='支付管理-支付方式payway';

-- ----------------------------
-- Records of payway
-- ----------------------------
INSERT INTO payway VALUES ('1000', '0', 'e币', '0', '16-04-08 19:52:42', '0', null, null, null, null, null);
INSERT INTO payway VALUES ('1001', '2', '银联', '1', '16-04-01 16:39:01', '1', null, null, null, null, null);
INSERT INTO payway VALUES ('1002', '3', '余额', '0', '16-04-01 16:39:01', '1', null, null, null, null, null);
INSERT INTO payway VALUES ('1003', '1', '支付宝', '0', '16-04-01 16:39:12', '0', null, null, null, null, null);
INSERT INTO payway VALUES ('1004', '2', '银联', '0', '16-04-01 16:39:39', '0', null, null, null, null, null);
INSERT INTO payway VALUES ('1005', '0', '哈哈', '1', '16-04-08 19:53:17', '1', null, null, null, null, null);

-- ----------------------------
-- Table structure for `personelinfo`
-- ----------------------------
DROP TABLE IF EXISTS `personelinfo`;
CREATE TABLE `personelinfo` (
  `IDNUMBER` varchar(255) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `GENDER` varchar(255) DEFAULT NULL,
  `WORKSTARTTIME` varchar(255) DEFAULT NULL,
  `POST` varchar(255) DEFAULT NULL,
  `ACADEMIC` varchar(255) DEFAULT NULL,
  `REMARK` varchar(255) DEFAULT NULL,
  `POLITICPOST` varchar(255) DEFAULT NULL,
  `ZHMM` varchar(255) DEFAULT NULL,
  `TELNO` varchar(255) DEFAULT NULL,
  `ADDRESS` varchar(255) DEFAULT NULL,
  `CREATETIME` varchar(255) DEFAULT NULL,
  `STATE` varchar(255) DEFAULT NULL,
  `AGE` varchar(255) DEFAULT NULL,
  `PERSONTYPE` varchar(255) DEFAULT NULL,
  `HOMETOWN` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IDNUMBER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of personelinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `positioninfo`
-- ----------------------------
DROP TABLE IF EXISTS `positioninfo`;
CREATE TABLE `positioninfo` (
  `POSITIONSN` varchar(255) NOT NULL,
  `IDNUMBER` varchar(255) NOT NULL,
  `POSITIONNAME` varchar(255) DEFAULT NULL,
  `STARTTIME` varchar(255) DEFAULT NULL,
  `ENDTIME` varchar(255) DEFAULT NULL,
  `REMARK` varchar(255) DEFAULT NULL,
  `DELSTATE` varchar(255) DEFAULT NULL,
  `CREATETIME` varchar(255) DEFAULT NULL,
  `APPOINTMENTDATE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`POSITIONSN`),
  KEY `FK2114157CD974071` (`POSITIONNAME`),
  KEY `FK2114157CB30269` (`IDNUMBER`),
  CONSTRAINT `FK2114157CB30269` FOREIGN KEY (`IDNUMBER`) REFERENCES `personelinfo` (`IDNUMBER`),
  CONSTRAINT `FK2114157CD974071` FOREIGN KEY (`POSITIONNAME`) REFERENCES `positionnameinfo` (`NAMEID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of positioninfo
-- ----------------------------

-- ----------------------------
-- Table structure for `positionnameinfo`
-- ----------------------------
DROP TABLE IF EXISTS `positionnameinfo`;
CREATE TABLE `positionnameinfo` (
  `NAMEID` varchar(255) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `DELSTATE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`NAMEID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of positionnameinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `rebateway`
-- ----------------------------
DROP TABLE IF EXISTS `rebateway`;
CREATE TABLE `rebateway` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-返利方式表主键',
  `suppMoney` decimal(12,2) DEFAULT NULL COMMENT '充值金额',
  `rebateway` int(11) DEFAULT NULL COMMENT '返利方式,1直接赠送，2随机红包',
  `proportionStart` decimal(11,4) DEFAULT NULL COMMENT '返利比例,当返还方式为直接赠送时，此为返还比例，当返还方式为随机红包时，此为返还比例范围的下限',
  `proportionEnd` decimal(11,4) DEFAULT NULL COMMENT '返利比例,当返还方式为直接赠送时，此为0，当返还方式为随机红包时，此为返还比例范围的上限',
  `upperlimit` int(11) DEFAULT NULL COMMENT '返利上限',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1012 DEFAULT CHARSET=utf8 COMMENT='支付管理-返利方式rebateway';

-- ----------------------------
-- Records of rebateway
-- ----------------------------
INSERT INTO rebateway VALUES ('1001', '100.00', '2', '1.0000', '10.0000', '100', '16-04-01 16:35:21', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1002', '3333.00', '2', '23.0000', '22222.0000', '232', '16-04-01 17:49:54', null, null, null, null, null, null);
INSERT INTO rebateway VALUES ('1003', '4000.00', '1', '234.0000', '200.0000', '200', '16-04-01 16:35:28', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1006', '55.00', '2', '5.0000', '5.0000', '5', '16-04-01 16:35:28', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1007', '12.00', '2', '12.0000', '12.0000', '12', '16-04-01 10:14:31', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1008', '11111.00', '1', '4.0000', '4.0000', '4', '16-04-01 10:14:31', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1009', '88888.00', '1', '22.0000', '555.0000', '10', '16-04-01 10:14:23', '1', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1010', '3333.00', '2', '23.0000', '23.0000', '100', '16-04-01 16:36:50', '0', null, null, null, null, null);
INSERT INTO rebateway VALUES ('1011', '100.00', '1', '100.0000', '100.0000', '50', '16-04-08 14:00:21', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `rechargerules`
-- ----------------------------
DROP TABLE IF EXISTS `rechargerules`;
CREATE TABLE `rechargerules` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `summary` varchar(50) DEFAULT NULL COMMENT '概述',
  `title` varchar(100) DEFAULT NULL COMMENT '小标题',
  `content` varchar(500) DEFAULT NULL COMMENT '内容',
  `ruleType` char(1) DEFAULT NULL COMMENT '规则类型,1表示预充值，2表示优惠规则',
  `stats` char(2) DEFAULT NULL COMMENT '状态,0表示正常，1表示，该字段暂时不用',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(50) DEFAULT NULL COMMENT '备用字段1',
  `back2` varchar(50) DEFAULT NULL COMMENT '备用字段2',
  `back3` varchar(150) DEFAULT NULL COMMENT '备用字段3',
  `back4` varchar(150) DEFAULT NULL COMMENT '备用字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '备用字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rechargerules
-- ----------------------------
INSERT INTO rechargerules VALUES ('1', null, '充值测试1', '线上充值，需要填写充值金额，选择第三方支付平台，输入充值验证码，选择充值银行卡，填写银行卡信息，银行卡充值。', '1', null, '16-04-08 11:04:22', null, null, null, null, null, null);
INSERT INTO rechargerules VALUES ('2', null, '二、充值手续费2', '“e鲜”平台不收取任何手续费', '1', null, '16-04-08 11:04:58', null, null, null, null, null, null);
INSERT INTO rechargerules VALUES ('3', null, '三、充值确认', '1.在实际充值中，需要按照步骤充值，耐心等待返回充值成功界面，有时由于网络延迟或其他原因会导致到账延迟，由于所有的资金往来记录是可以查询到的不会导致资金丢失问题。', '1', null, '16-04-08 19:02:24', null, null, null, null, null, null);
INSERT INTO rechargerules VALUES ('4', '预充值即把银行卡上的钱转到“e鲜”平台用户账户上的过程，充值成功后将获得红包返利。', '四、账户使用', '用户购买商品下单时，在账户余额充足的情况下，可直接选择使用账户中的金额进行支付', '1', null, '2016-02-22 12:00:00', '0', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('5', '优惠券是”e鲜“平台通过买赠，活动参与，积分兑换等形式发放给用户，用户减免购买支付的回馈用户措施。', '一、1.优惠券获取途径', '<p>1、购买商品赠券：平台部分商品进行单品销售，商品广告词及促销信息有该信息提示，下单完成支付后随单赠送。</p><p>2、参加平台各类活动：参加整单满返优惠券活动、各类用户调研、评论有奖活动、免费领取优惠券活动等按一定的活动规则即有机会获得优惠券。</p><p>3、积分兑换：根据会员级别及账户积分可以兑换相应面额的优惠券。', '2', null, '16-04-06 20:27:28', null, null, null, null, null, null);
INSERT INTO rechargerules VALUES ('6', '优惠券是”e鲜“平台通过买赠，活动参与，积分兑换等形式发放给用户，用户减免购买支付的回馈用户措施。', '二、优惠券使用规则', '<p>1、平台发放所有优惠券仅能在平台提交订单时抵免应支付商品金额，不能用户兑现或其他用途。</p><p>2、使用优惠券的订单，若发生取消订单除返还实际支付外，优惠券退回账户，有效期不延展。</p><p>3、平台发放所有优惠券严禁出售或转让，如发现并证实的，该优惠券将予以作废处理。</p><p>4、本规则有\"e鲜\"平台依据国家相关法律法规及规章制度予以解释。', '2', null, '2016-02-22 12:00:00', '0', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('7', null, 'afdag', 'fgag', '2', null, '16-04-06 20:15:50', '0', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('8', null, '充值返现', '鲜商上冲至', '2', null, '16-04-08 10:58:58', '1', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('12', null, '123333', '3213', '1', null, '16-04-08 19:22:44', '1', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('13', null, '12333333', '123', '2', null, '16-04-08 19:24:14', '1', null, null, null, null, null);
INSERT INTO rechargerules VALUES ('14', null, '123', '3123', '2', null, '16-04-08 19:26:08', '1', null, null, null, null, null);

-- ----------------------------
-- Table structure for `right_menu`
-- ----------------------------
DROP TABLE IF EXISTS `right_menu`;
CREATE TABLE `right_menu` (
  `ID` varchar(64) NOT NULL COMMENT '主键',
  `RESOURCE_ID` varchar(64) DEFAULT NULL COMMENT '资源id',
  `THE_SORT` varchar(10) DEFAULT NULL COMMENT '序号',
  `QTIP` varchar(200) DEFAULT NULL COMMENT '菜单url',
  `DESCN` varchar(200) DEFAULT NULL COMMENT '说明',
  `NAME` varchar(100) DEFAULT NULL COMMENT '菜单名称',
  `IMAGE` varchar(100) DEFAULT NULL COMMENT '图片url',
  `PARENT_ID` varchar(64) DEFAULT NULL COMMENT '父节点',
  `DELETESTATE` char(1) DEFAULT NULL COMMENT '是否删除',
  PRIMARY KEY (`ID`),
  KEY `FKAD46FDA25FFA20BA` (`PARENT_ID`),
  CONSTRAINT `FKAD46FDA25FFA20BA` FOREIGN KEY (`PARENT_ID`) REFERENCES `right_menu` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_menu
-- ----------------------------
INSERT INTO right_menu VALUES ('100', null, '100', null, null, null, null, null, '0');
INSERT INTO right_menu VALUES ('1000', null, '1000', null, '后台首页', '后台首页', 'efresh/images/tree/004.png', '100', '0');
INSERT INTO right_menu VALUES ('1100', null, '1100', 'jsp/esys/main.jsp', '后台首页', '后台首页', null, '1000', '0');
INSERT INTO right_menu VALUES ('1200', null, '1200', 'common/estoreMainView.jsp', '卖家首页', '卖家首页', null, '1000', '0');
INSERT INTO right_menu VALUES ('2000', null, '2000', '', '系统管理', '系统管理', '/efresh/images/tree/005.png', '100', '0');
INSERT INTO right_menu VALUES ('2100', null, '2100', 'common/right_menuView.jsp', '菜单管理', '菜单管理', null, '2000', '0');
INSERT INTO right_menu VALUES ('2200', null, '2200', 'common/tj_parameterView.jsp', '字典表维护', '字典表维护', null, '2000', '0');
INSERT INTO right_menu VALUES ('2300', null, '2300', '', '资料数据定义', '资料数据定义', null, '2000', '0');
INSERT INTO right_menu VALUES ('2400', null, '2400', 'common/substationView.jsp', '分站管理', '分站管理', null, '2000', '0');
INSERT INTO right_menu VALUES ('2500', null, '2500', 'common/sysmessageView.jsp', '系统消息', '系统消息', null, '2000', '0');
INSERT INTO right_menu VALUES ('2600', null, '2600', 'common/feedbackView.jsp', '人机交互', '人机交互', null, '2000', '0');
INSERT INTO right_menu VALUES ('3000', null, '3000', null, '档案管理', '档案管理', '/efresh/images/tree/006.png', '100', '0');
INSERT INTO right_menu VALUES ('3100', '', '3100', 'common/t_tlr_mgmtView.jsp', '员工管理', '用户管理', '', '3000', '0');
INSERT INTO right_menu VALUES ('3200', null, '3200', 'common/t_inst_mgmtView.jsp', '部门维护', '部门维护', null, '3000', '0');
INSERT INTO right_menu VALUES ('3300', '', '3300', 'rightmanagement/rightRole.jsp', '角色管理', '角色管理', '', '3000', '0');
INSERT INTO right_menu VALUES ('3400', null, '3400', 'common/estoreView.jsp', '批发商店铺', '批发商店铺', null, '3000', '0');
INSERT INTO right_menu VALUES ('3500', null, '3500', 'common/estore_selfView.jsp', '自营店铺', '自营店铺', null, '3000', '0');
INSERT INTO right_menu VALUES ('3600', null, '3600', 'common/logisticsView.jsp', '物流商管理', '物流商管理', null, '3000', '0');
INSERT INTO right_menu VALUES ('3700', null, '3700', 'common/integralView.jsp', '积分管理', '积分管理', null, '3000', '0');
INSERT INTO right_menu VALUES ('4000', null, '4000', null, '商品管理', '商品管理', '/efresh/images/tree/007.png', '100', '0');
INSERT INTO right_menu VALUES ('4100', null, '4100', 'common/commodityView.jsp', '商品管理', '商品管理', '/efresh/images/tree/007.png', '4000', '0');
INSERT INTO right_menu VALUES ('4200', null, '4200', 'common/categoryView.jsp', '商品分类', '商品分类', null, '4000', '0');
INSERT INTO right_menu VALUES ('4300', null, '4300', 'common/storebrandView.jsp', '商品品牌', '商品品牌', null, '4000', '0');
INSERT INTO right_menu VALUES ('4400', null, '4400', 'common/commoditycompanyView.jsp', '商品单位', '商品单位', null, '4000', '0');
INSERT INTO right_menu VALUES ('4500', null, '4500', 'jsp/esys/add_pro.jsp', '新增商品', '新增商品', null, '4000', '0');
INSERT INTO right_menu VALUES ('4600', null, '4600', 'common/commoditylevelView.jsp', '商品库存', '商品库存', null, '4000', '0');
INSERT INTO right_menu VALUES ('5000', null, '5000', null, '订单管理', '订单管理', '/efresh/images/tree/008.png', '100', '0');
INSERT INTO right_menu VALUES ('5100', null, '5100', 'common/secondlevelorderView.jsp', '订单管理', '订单管理', null, '5000', '0');
INSERT INTO right_menu VALUES ('6000', null, '6000', null, '仓储物流', '仓储物流', '/efresh/images/tree/009.png', '100', '0');
INSERT INTO right_menu VALUES ('6100', null, '6100', 'common/storageView.jsp', '入库管理', '入库管理', null, '6000', '0');
INSERT INTO right_menu VALUES ('6200', null, '6200', 'common/outlibraryView.jsp', '出库管理', '出库管理', null, '6000', '0');
INSERT INTO right_menu VALUES ('6300', null, '6300', 'common/logisticsView.jsp', '物流管理', '物流管理', null, '6000', '0');
INSERT INTO right_menu VALUES ('7000', null, '7000', null, '支付管理', '支付管理', '/efresh/images/tree/010.png', '100', '0');
INSERT INTO right_menu VALUES ('7100', null, '7100', 'common/rechargerulesView.jsp', '规则管理', '规则管理', null, '7000', '0');
INSERT INTO right_menu VALUES ('7200', null, '7200', 'common/rebatewayView.jsp', '返利管理', '返利管理', null, '7000', '0');
INSERT INTO right_menu VALUES ('7300', null, '7300', 'common/paywayView.jsp', '支付管理', '支付管理', null, '7000', '0');
INSERT INTO right_menu VALUES ('8000', null, '8000', null, '数据报表', '数据报表', '/eshoping/images/tree/011.png', '100', '0');
INSERT INTO right_menu VALUES ('8100', null, '8100', null, '销售报表', '销售报表', null, '8000', '0');
INSERT INTO right_menu VALUES ('8200', null, '8200', null, '供应商报表', '供应商报表', null, '8000', '0');
INSERT INTO right_menu VALUES ('9000', null, '9000', null, '首页轮翻', '首页轮翻', '/eshoping/images/tree/012.png', '100', '0');
INSERT INTO right_menu VALUES ('9100', null, '9100', 'common/carouselView.jsp', '首页轮播', '首页轮播', null, '9000', '0');

-- ----------------------------
-- Table structure for `right_menu_role`
-- ----------------------------
DROP TABLE IF EXISTS `right_menu_role`;
CREATE TABLE `right_menu_role` (
  `MENU_ID` varchar(64) NOT NULL,
  `ROLE_ID` varchar(64) NOT NULL,
  `ID` varchar(64) NOT NULL,
  `ts` char(19) DEFAULT NULL,
  `dr` char(1) DEFAULT NULL,
  `back1` char(2) DEFAULT NULL,
  `back2` varchar(20) DEFAULT NULL,
  `back3` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_menu_role
-- ----------------------------
INSERT INTO right_menu_role VALUES ('1100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff36610001', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1200', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff36c30002', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2400', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff375c0003', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2500', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff37d80004', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2600', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff38420005', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff38a60006', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3300', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff38fe0007', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3400', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff395b0008', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3500', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff39b90009', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3600', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3a1d000a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3700', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3ab2000b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3b2a000c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4200', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3b89000d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4300', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3bef000e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4400', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3c4c000f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4500', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3cab0010', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4600', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3d070011', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('5100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3d6f0012', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3dce0013', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6200', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3e320014', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6300', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3ea90015', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff3f760016', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7200', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff402b0017', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7300', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff40a60018', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff41240019', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8200', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff419f001a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('9100', '402881f342efd6d80142eff630aa0001', '402880f553d0f2a90153d0ff4234001b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4d6e0001', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2400', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4d9a0002', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2500', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4dce0003', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2600', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4e2a0004', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4e840005', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3300', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4ec00006', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3400', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4eec0007', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3500', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4f260008', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3600', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4f7b0009', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3700', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d4fd8000a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d5055000b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4200', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d50b1000c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4300', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d5111000d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4400', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d5158000e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4500', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d51a6000f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4600', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d51cf0010', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('5100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d52010011', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d52350012', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6200', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d525f0013', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6300', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d52890014', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d52b30015', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7200', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d52e80016', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7300', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d53120017', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d533c0018', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8200', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d53660019', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('9100', '402881f342eee4170142eee47f4b0002', 'ff80808153bb12880153bb1d53b2001a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1ecd001b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2400', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1ef6001c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2500', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1f41001d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2600', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1f74001e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1f9e001f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3300', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1fc80020', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3400', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a1ff20021', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3500', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a201c0022', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3600', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a20460023', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3700', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a20700024', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a20990025', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4200', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a20c40026', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4300', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21100027', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4400', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21470028', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4500', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21710029', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4600', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21a0002a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('5100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21ca002b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a21f4002c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6200', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a2224002d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6300', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a2259002e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a228a002f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7200', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a22ae0030', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7300', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a22d80031', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a23010032', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8200', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a23250033', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('9100', '402881f342eef1b90142ef0c8c1a0004', 'ff80808153d0802d0153d09a23490034', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1200', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746aaf0003', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3400', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746add0004', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4100', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746b0d0005', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4300', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746b5f0006', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4500', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746b9c0007', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4600', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746bc60008', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6100', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746c220009', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6200', '402880f553cf98b40153cfd059580001', 'ff80808153f360350153f3746c50000a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2ae50001c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('1200', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2ae80001d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2400', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2aebc001e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2500', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2aee5001f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('2600', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2af0f0020', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2af390021', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3300', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2af930022', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3400', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2afea0023', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3500', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b02d0024', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3600', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b0720025', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('3700', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b09a0026', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b0bf0027', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4200', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b0e90028', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4300', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b1130029', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4400', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b13d002a', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4500', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b18f002b', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('4600', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b1f7002c', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('5100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b281002d', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b2ce002e', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6200', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b2f8002f', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('6300', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b3220030', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b3500031', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7200', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b37c0032', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('7300', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b3a60033', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b3d00034', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('8200', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b3fa0035', null, null, null, null, null);
INSERT INTO right_menu_role VALUES ('9100', '2c9280e62d01afac012d01b301710001', 'ff80808153f4ba7e0153f4d2b4280036', null, null, null, null, null);

-- ----------------------------
-- Table structure for `right_resource`
-- ----------------------------
DROP TABLE IF EXISTS `right_resource`;
CREATE TABLE `right_resource` (
  `ID` varchar(64) NOT NULL,
  `DESCN` varchar(200) DEFAULT NULL,
  `RES_TYPE` varchar(100) DEFAULT NULL,
  `TES_STRING` varchar(200) DEFAULT NULL,
  `NAME` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_resource
-- ----------------------------

-- ----------------------------
-- Table structure for `right_role`
-- ----------------------------
DROP TABLE IF EXISTS `right_role`;
CREATE TABLE `right_role` (
  `ID` varchar(64) NOT NULL,
  `DESCN` varchar(200) DEFAULT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` char(1) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` varchar(30) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_role
-- ----------------------------
INSERT INTO right_role VALUES ('2c9280e62d01afac012d01b301710001', '超级管理员', '超级管理员', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402880f553cf98b40153cfd059580001', '卖家权限', '卖家', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342eee4170142eee47f4b0002', '二级分行管理员', '二级分行管理员', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342eef1b90142ef0a706e0001', '理财经理', '理财经理', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342eef1b90142ef0aa8660002', '综合客户经理', '综合客户经理', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342eef1b90142ef0ada050003', '大堂经理', '大堂经理', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342eef1b90142ef0c8c1a0004', '复核员', '复核员', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('402881f342efd6d80142eff630aa0001', '系统管理员', '系统管理员', null, null, null, null, null, null, null);
INSERT INTO right_role VALUES ('a1', '权限管理员', '权限管理员', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `right_role_user`
-- ----------------------------
DROP TABLE IF EXISTS `right_role_user`;
CREATE TABLE `right_role_user` (
  `ROLE_ID` varchar(64) NOT NULL,
  `USER_ID` varchar(64) NOT NULL,
  `ID` varchar(64) NOT NULL,
  `ts` datetime DEFAULT NULL,
  `dr` char(1) DEFAULT NULL,
  `back1` char(2) DEFAULT NULL,
  `back2` varchar(20) DEFAULT NULL,
  `back3` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of right_role_user
-- ----------------------------
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1143', '00f1c663cd044ef98367996badcafc1c', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1141', '05074bd8ba144a66b3547370ee545b88', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1155', '0d2fb98efcdd4e89952c93bc471a403b', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1151', '0f1bed9bfc3e40019fb0bddafb816873', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1151', '1255702ad774456496d8e49006da8937', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1154', '148513428dbe44ec9f86e181aeefe209', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1126', '15921d39c04b4a0688dba4aa384df1ed', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1153', '1cd20170d4734b6d93efde8b6d23643d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1108', '1d7537a02053419b9c331bc2d456f9af', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1139', '1ef0f61935c84220817fc6bcaba28a18', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1078', '21fc833531884d71a65d6deee7d04f81', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1133', '2425a338042d47c38822ae32fe3304fd', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1142', '244c83f191bb495ca6997cc5cb1b099c', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1098', '28207cb537ee43a1aba661c2920709f9', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1150', '2a6a1527a919437e86db99fc9f7d0a37', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1140', '330407f2bfc947588a3f70405fa87ad5', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1151', '33cbb8de40b74ace90c957dfaa202427', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1082', '3c8fc830cf1a4aadb43b1a7a386b621d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1145', '3c9fd7f4a9a9485694e72f54115c41a6', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1131', '3d5b5faa1f5047049bc3d9e29c79345d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342efd6d80142eff630aa0001', '1092', '402880ee53c51aa60153c52eea230001', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342efd6d80142eff630aa0001', '1093', '402880ee53c51aa60153c53defac0002', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342efd6d80142eff630aa0001', '1075', '402880f553502c610153502db2380001', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342efd6d80142eff630aa0001', '2', '402880fd526352dd015263595a1b000b', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eee4170142eee47f4b0002', '2', '402880fd526352dd0152635970a0000c', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eef1b90142ef0a706e0001', '2', '402880fd526352dd0152635970a0000d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eef1b90142ef0aa8660002', '2', '402880fd526352dd0152635970a0000e', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eef1b90142ef0ada050003', '2', '402880fd526352dd0152635970a0000f', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eef1b90142ef0c8c1a0004', '2', '402880fd526352dd0152635970a00010', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('a1', '2', '402880fd526352dd0152635970a00011', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '2', '402881ec4232ce150142332ed0bd0050', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '000008', '402881ec424b015d01424b5c03fb0001', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('a1', '000013', '402881f342e60c3d0142e6114c120001', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '000012', '402881f342e60c3d0142e6137a6b0002', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1113', '402881f342efd6d80142eff7d2f0001b', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '000024', '402881f342efd6d80142effca3c9001d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1038', '402881f342f013f50142f039ff7d0004', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402881f342eef1b90142ef0aa8660002', '000023', '402881f342f079050142f07b90b50001', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1130', '413089639d0140f290d5f7f04fe9aae9', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1133', '44f52df5638e4116be61b515517647bc', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1142', '48dcef25c60a4048aef92c0f9b340c14', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1100', '4e3e4cf98e814ee891ec409f7697eb4a', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1150', '51a2907085ae4f239e5b31721b2f242a', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1146', '54887e04c979420b86331111e90e006d', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1092', '576762fef2b3491a8878c4f0f9bf8781', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1143', '57d49391599a48398c9f8043451bc6b5', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1095', '711bd376b62b4ebfaa5c385c265c34fd', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '3', '7fbca042e9554fc9affb44b6d2fb46dc', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1149', '829b8190bc724c4693ae60728d57821f', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1133', '84158da35dab442d969138b6ac2a702b', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '3', '87e5a09ff52f47eabe19aa1b7082f6cc', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1144', '8c850e6832724fe08d5431e90542dbb2', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '3', '8ccad050b3784aa089220c32a2144b1e', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1143', '95d134ae412f4be59fc414a7fe9af074', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1092', '9ffecf238d5c4a0182eb06c2ec4aaa48', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('a1', 'a1', 'a1', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1146', 'a72e6936696348899c12d4ae6a597032', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1145', 'aa38664ca2184550b662e513fb0dd840', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1129', 'acb748e716674462b60ee39811f6ee5f', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1148', 'b6cac080fa854a7aae21021cf16e93bf', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1137', 'ba394c743f8a4258bab5f0fe9deb9b43', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('2c9280e62d01afac012d01b301710001', '1138', 'bc15e489930b4d368d00ea6f8a5f94d5', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1156', 'd66ef24f52ea435fb70f52ec8c873fbe', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1156', 'd822673bd6c747e4aaf6b0d50d901a90', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '3', 'e3b3d37044c842f29089f83c02548eb2', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1150', 'e4a2f3d78873400b8340a60494310324', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1153', 'ecb4f083fe9549e5957f332c5b23d8e9', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('402880f553cf98b40153cfd059580001', '1152', 'fc801c14be044c329d07e3e6d079385a', null, null, null, null, null);
INSERT INTO right_role_user VALUES ('a1', '0000015', 'ff80808142e0dc090142e0e8e7320001', null, null, null, null, null);

-- ----------------------------
-- Table structure for `searchrecords`
-- ----------------------------
DROP TABLE IF EXISTS `searchrecords`;
CREATE TABLE `searchrecords` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '搜索记录表主键',
  `commodityname` varchar(20) DEFAULT NULL COMMENT '搜索商品名称',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(1) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(30) DEFAULT NULL COMMENT '预留字段',
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1508 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of searchrecords
-- ----------------------------
INSERT INTO searchrecords VALUES ('1', '白菜', '2016-03-14 14:48:37', '0', '');
INSERT INTO searchrecords VALUES ('2', '菜心', '2016-03-14 15:03:07', '0', '');
INSERT INTO searchrecords VALUES ('3', '菜心', '2016-03-14 15:03:09', '0', '');
INSERT INTO searchrecords VALUES ('4', '菜心', '2016-03-14 15:03:09', '0', '');
INSERT INTO searchrecords VALUES ('5', '菜心', '2016-03-14 15:03:09', '0', '');
INSERT INTO searchrecords VALUES ('6', '菜心', '2016-03-14 15:03:09', '0', '');
INSERT INTO searchrecords VALUES ('7', '菜心', '2016-03-14 15:03:09', '0', '');
INSERT INTO searchrecords VALUES ('8', '菜心', '2016-03-14 15:03:10', '0', '');
INSERT INTO searchrecords VALUES ('9', '菜心', '2016-03-14 15:03:10', '0', '');
INSERT INTO searchrecords VALUES ('10', '菜心', '2016-03-14 15:03:10', '0', '');
INSERT INTO searchrecords VALUES ('11', '菜心', '2016-03-14 15:03:10', '0', '');
INSERT INTO searchrecords VALUES ('12', '菜心', '2016-03-14 15:03:10', '0', '');
INSERT INTO searchrecords VALUES ('13', '小白菜', '2016-03-14 15:03:13', '0', '');
INSERT INTO searchrecords VALUES ('14', '小白菜', '2016-03-14 15:03:13', '0', '');
INSERT INTO searchrecords VALUES ('15', '小白菜', '2016-03-14 15:03:13', '0', '');
INSERT INTO searchrecords VALUES ('16', '小白菜', '2016-03-14 15:03:13', '0', '');
INSERT INTO searchrecords VALUES ('17', '小白菜', '2016-03-14 15:03:13', '0', '');
INSERT INTO searchrecords VALUES ('18', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('19', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('20', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('21', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('22', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('23', '小白菜', '2016-03-14 15:03:14', '0', '');
INSERT INTO searchrecords VALUES ('24', '小白菜', '2016-03-14 15:03:15', '0', '');
INSERT INTO searchrecords VALUES ('25', '娃娃菜', '2016-03-14 15:03:17', '0', '');
INSERT INTO searchrecords VALUES ('26', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('27', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('28', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('29', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('30', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('31', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('32', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('33', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('34', '娃娃菜', '2016-03-14 15:03:18', '0', '');
INSERT INTO searchrecords VALUES ('35', '娃娃菜', '2016-03-14 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('36', '娃娃菜', '2016-03-14 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('37', '娃娃菜', '2016-03-14 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('38', '娃娃菜', '2016-03-14 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('39', '娃娃菜', '2016-03-14 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('40', '娃娃菜番茄', '2016-03-14 15:03:21', '0', '');
INSERT INTO searchrecords VALUES ('41', '娃娃菜番茄', '2016-03-14 15:03:21', '0', '');
INSERT INTO searchrecords VALUES ('42', '娃娃菜番茄', '2016-03-14 15:03:21', '0', '');
INSERT INTO searchrecords VALUES ('43', '娃娃菜番茄', '2016-03-14 15:03:21', '0', '');
INSERT INTO searchrecords VALUES ('44', '土豆', '2016-03-14 15:03:28', '0', '');
INSERT INTO searchrecords VALUES ('45', '土豆', '2016-03-14 15:03:28', '0', '');
INSERT INTO searchrecords VALUES ('46', '土豆', '2016-03-14 15:03:29', '0', '');
INSERT INTO searchrecords VALUES ('47', '土豆', '2016-03-14 15:03:29', '0', '');
INSERT INTO searchrecords VALUES ('48', '土豆', '2016-03-14 15:03:29', '0', '');
INSERT INTO searchrecords VALUES ('49', '土豆', '2016-03-14 15:03:29', '0', '');
INSERT INTO searchrecords VALUES ('50', '包菜', '2016-03-14 15:14:04', '0', '');
INSERT INTO searchrecords VALUES ('51', '包菜', '2016-03-14 15:14:04', '0', '');
INSERT INTO searchrecords VALUES ('52', '韭菜', '2016-03-14 15:14:11', '0', '');
INSERT INTO searchrecords VALUES ('53', '韭菜', '2016-03-14 15:14:12', '0', '');
INSERT INTO searchrecords VALUES ('54', '韭黄', '2016-03-14 15:14:15', '0', '');
INSERT INTO searchrecords VALUES ('55', '韭黄', '2016-03-14 15:14:15', '0', '');
INSERT INTO searchrecords VALUES ('56', '韭黄', '2016-03-14 15:14:16', '0', '');
INSERT INTO searchrecords VALUES ('57', '韭黄', '2016-03-14 15:14:16', '0', '');
INSERT INTO searchrecords VALUES ('58', '韭黄', '2016-03-14 15:14:16', '0', '');
INSERT INTO searchrecords VALUES ('59', '胡萝卜', '2016-03-14 15:14:22', '0', '');
INSERT INTO searchrecords VALUES ('60', '胡萝卜', '2016-03-14 15:14:22', '0', '');
INSERT INTO searchrecords VALUES ('61', '胡萝卜', '2016-03-14 15:14:22', '0', '');
INSERT INTO searchrecords VALUES ('62', '胡萝卜', '2016-03-14 15:14:23', '0', '');
INSERT INTO searchrecords VALUES ('63', '西红柿', '2016-03-14 15:14:27', '0', '');
INSERT INTO searchrecords VALUES ('64', '西红柿', '2016-03-14 15:14:27', '0', '');
INSERT INTO searchrecords VALUES ('65', '西红柿', '2016-03-14 15:14:27', '0', '');
INSERT INTO searchrecords VALUES ('66', '西红柿', '2016-03-14 15:14:28', '0', '');
INSERT INTO searchrecords VALUES ('67', '武昌鱼', '2016-03-14 15:14:34', '0', '');
INSERT INTO searchrecords VALUES ('68', '武昌鱼', '2016-03-14 15:14:34', '0', '');
INSERT INTO searchrecords VALUES ('69', '武昌鱼', '2016-03-14 15:14:34', '0', '');
INSERT INTO searchrecords VALUES ('70', '武昌鱼', '2016-03-14 15:14:35', '0', '');
INSERT INTO searchrecords VALUES ('71', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('72', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('73', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('74', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('75', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('76', '黄瓜', '2016-03-14 15:14:56', '0', '');
INSERT INTO searchrecords VALUES ('77', '黄瓜', '2016-03-14 15:14:57', '0', '');
INSERT INTO searchrecords VALUES ('78', '黄瓜', '2016-03-14 15:14:57', '0', '');
INSERT INTO searchrecords VALUES ('79', '玉米', '2016-03-14 15:14:59', '0', '');
INSERT INTO searchrecords VALUES ('80', '玉米', '2016-03-14 15:14:59', '0', '');
INSERT INTO searchrecords VALUES ('81', '玉米', '2016-03-14 15:14:59', '0', '');
INSERT INTO searchrecords VALUES ('82', '玉米', '2016-03-14 15:15:00', '0', '');
INSERT INTO searchrecords VALUES ('83', '玉米', '2016-03-14 15:15:00', '0', '');
INSERT INTO searchrecords VALUES ('84', '玉米', '2016-03-14 15:15:00', '0', '');
INSERT INTO searchrecords VALUES ('85', '甜椒', '2016-03-14 15:15:05', '0', '');
INSERT INTO searchrecords VALUES ('86', '甜椒', '2016-03-14 15:15:05', '0', '');
INSERT INTO searchrecords VALUES ('87', '甜椒', '2016-03-14 15:15:06', '0', '');
INSERT INTO searchrecords VALUES ('88', '甜椒', '2016-03-14 15:15:06', '0', '');
INSERT INTO searchrecords VALUES ('89', '甜椒', '2016-03-14 15:15:06', '0', '');
INSERT INTO searchrecords VALUES ('90', '青椒', '2016-03-14 15:15:11', '0', '');
INSERT INTO searchrecords VALUES ('91', '青椒', '2016-03-14 15:15:12', '0', '');
INSERT INTO searchrecords VALUES ('92', '青椒', '2016-03-14 15:15:12', '0', '');
INSERT INTO searchrecords VALUES ('93', '青椒', '2016-03-14 15:15:12', '0', '');
INSERT INTO searchrecords VALUES ('94', '青椒', '2016-03-14 15:15:12', '0', '');
INSERT INTO searchrecords VALUES ('95', '辣椒', '2016-03-14 15:15:15', '0', '');
INSERT INTO searchrecords VALUES ('96', '辣椒', '2016-03-14 15:15:16', '0', '');
INSERT INTO searchrecords VALUES ('97', '辣椒', '2016-03-14 15:15:16', '0', '');
INSERT INTO searchrecords VALUES ('98', '辣椒', '2016-03-14 15:15:16', '0', '');
INSERT INTO searchrecords VALUES ('99', '辣椒', '2016-03-14 15:15:16', '0', '');
INSERT INTO searchrecords VALUES ('100', '茼蒿', '2016-03-14 15:15:20', '0', '');
INSERT INTO searchrecords VALUES ('101', '茼蒿', '2016-03-14 15:15:20', '0', '');
INSERT INTO searchrecords VALUES ('102', '茼蒿', '2016-03-14 15:15:20', '0', '');
INSERT INTO searchrecords VALUES ('103', '茼蒿', '2016-03-14 15:15:21', '0', '');
INSERT INTO searchrecords VALUES ('104', '茼蒿', '2016-03-14 15:15:21', '0', '');
INSERT INTO searchrecords VALUES ('105', '菠菜', '2016-03-14 15:15:24', '0', '');
INSERT INTO searchrecords VALUES ('106', '菠菜', '2016-03-14 15:15:25', '0', '');
INSERT INTO searchrecords VALUES ('107', '菠菜', '2016-03-14 15:15:25', '0', '');
INSERT INTO searchrecords VALUES ('108', '菠菜', '2016-03-14 15:15:25', '0', '');
INSERT INTO searchrecords VALUES ('109', '菠菜', '2016-03-14 15:15:25', '0', '');
INSERT INTO searchrecords VALUES ('110', '小白菜', '2016-03-14 15:42:42', '0', '');
INSERT INTO searchrecords VALUES ('111', '小白菜', '2016-03-14 15:42:49', '0', '');
INSERT INTO searchrecords VALUES ('112', '娃娃菜', '2016-03-14 15:42:53', '0', '');
INSERT INTO searchrecords VALUES ('113', '小白菜', '2016-03-14 15:42:54', '0', '');
INSERT INTO searchrecords VALUES ('114', '小白菜', '2016-03-14 15:45:10', '0', '');
INSERT INTO searchrecords VALUES ('115', '娃娃菜', '2016-03-14 15:45:16', '0', '');
INSERT INTO searchrecords VALUES ('116', '小白菜', '2016-03-14 15:45:18', '0', '');
INSERT INTO searchrecords VALUES ('117', '小白菜', '2016-03-14 15:49:49', '0', '');
INSERT INTO searchrecords VALUES ('118', '娃娃菜', '2016-03-14 15:50:08', '0', '');
INSERT INTO searchrecords VALUES ('119', '小白菜', '2016-03-14 15:50:15', '0', '');
INSERT INTO searchrecords VALUES ('120', '小白菜', '2016-03-14 15:51:06', '0', '');
INSERT INTO searchrecords VALUES ('121', '娃娃菜', '2016-03-14 15:51:10', '0', '');
INSERT INTO searchrecords VALUES ('122', '小白菜', '2016-03-14 15:51:11', '0', '');
INSERT INTO searchrecords VALUES ('123', '小白菜', '2016-03-14 15:54:04', '0', '');
INSERT INTO searchrecords VALUES ('124', '娃娃菜', '2016-03-14 15:54:08', '0', '');
INSERT INTO searchrecords VALUES ('125', '小白菜', '2016-03-14 15:54:09', '0', '');
INSERT INTO searchrecords VALUES ('126', '小白菜', '2016-03-14 15:55:33', '0', '');
INSERT INTO searchrecords VALUES ('127', '娃娃菜', '2016-03-14 15:55:38', '0', '');
INSERT INTO searchrecords VALUES ('128', '小白菜', '2016-03-14 15:55:40', '0', '');
INSERT INTO searchrecords VALUES ('129', '小白菜', '2016-03-14 15:55:42', '0', '');
INSERT INTO searchrecords VALUES ('130', '小白菜', '2016-03-14 15:55:43', '0', '');
INSERT INTO searchrecords VALUES ('131', '小白菜', '2016-03-14 15:57:22', '0', '');
INSERT INTO searchrecords VALUES ('132', '娃娃菜', '2016-03-14 15:57:25', '0', '');
INSERT INTO searchrecords VALUES ('133', '小白菜', '2016-03-14 15:57:30', '0', '');
INSERT INTO searchrecords VALUES ('134', '小白菜', '2016-03-14 16:00:33', '0', '');
INSERT INTO searchrecords VALUES ('135', '娃娃菜', '2016-03-14 16:00:37', '0', '');
INSERT INTO searchrecords VALUES ('136', '小白菜', '2016-03-14 16:00:40', '0', '');
INSERT INTO searchrecords VALUES ('137', '小白菜', '2016-03-14 16:02:18', '0', '');
INSERT INTO searchrecords VALUES ('138', '娃娃菜', '2016-03-14 16:02:22', '0', '');
INSERT INTO searchrecords VALUES ('139', '小白菜', '2016-03-14 16:02:23', '0', '');
INSERT INTO searchrecords VALUES ('140', '小白菜', '2016-03-14 16:03:51', '0', '');
INSERT INTO searchrecords VALUES ('141', '娃娃菜', '2016-03-14 16:03:54', '0', '');
INSERT INTO searchrecords VALUES ('142', '小白菜', '2016-03-14 16:03:56', '0', '');
INSERT INTO searchrecords VALUES ('143', '娃娃菜', '2016-03-14 16:04:11', '0', '');
INSERT INTO searchrecords VALUES ('144', '娃娃菜', '2016-03-14 16:04:13', '0', '');
INSERT INTO searchrecords VALUES ('145', '小白菜', '2016-03-14 16:09:29', '0', '');
INSERT INTO searchrecords VALUES ('146', '娃娃菜', '2016-03-14 16:09:32', '0', '');
INSERT INTO searchrecords VALUES ('147', '小白菜', '2016-03-14 16:09:52', '0', '');
INSERT INTO searchrecords VALUES ('148', '小白菜', '2016-03-14 16:09:58', '0', '');
INSERT INTO searchrecords VALUES ('149', '小白菜', '2016-03-14 16:09:59', '0', '');
INSERT INTO searchrecords VALUES ('150', '小白菜', '2016-03-14 16:10:09', '0', '');
INSERT INTO searchrecords VALUES ('151', '小白菜', '2016-03-14 16:10:10', '0', '');
INSERT INTO searchrecords VALUES ('152', '菜心', '2016-03-14 16:20:11', '0', '');
INSERT INTO searchrecords VALUES ('153', '菠菜', '2016-03-14 16:20:16', '0', '');
INSERT INTO searchrecords VALUES ('154', '小白菜', '2016-03-14 16:20:21', '0', '');
INSERT INTO searchrecords VALUES ('155', '小白菜', '2016-03-14 16:38:33', '0', '');
INSERT INTO searchrecords VALUES ('156', '小白菜', '2016-03-14 16:39:29', '0', '');
INSERT INTO searchrecords VALUES ('157', '包菜', '2016-03-14 17:12:49', '0', '');
INSERT INTO searchrecords VALUES ('158', '小白菜', '2016-03-14 17:12:53', '0', '');
INSERT INTO searchrecords VALUES ('159', '小白菜', '2016-03-14 17:13:01', '0', '');
INSERT INTO searchrecords VALUES ('160', '小白菜', '2016-03-14 17:13:04', '0', '');
INSERT INTO searchrecords VALUES ('161', '小白菜', '2016-03-14 17:13:09', '0', '');
INSERT INTO searchrecords VALUES ('162', '娃娃菜', '2016-03-14 17:13:15', '0', '');
INSERT INTO searchrecords VALUES ('163', '娃娃菜', '2016-03-14 17:13:21', '0', '');
INSERT INTO searchrecords VALUES ('164', '娃娃菜', '2016-03-14 17:13:28', '0', '');
INSERT INTO searchrecords VALUES ('165', '娃娃菜', '2016-03-14 17:13:30', '0', '');
INSERT INTO searchrecords VALUES ('166', '娃娃菜', '2016-03-14 17:13:34', '0', '');
INSERT INTO searchrecords VALUES ('167', '小白菜', '2016-03-14 17:13:38', '0', '');
INSERT INTO searchrecords VALUES ('168', '娃娃菜', '2016-03-14 17:14:07', '0', '');
INSERT INTO searchrecords VALUES ('169', '娃娃菜', '2016-03-14 17:14:10', '0', '');
INSERT INTO searchrecords VALUES ('170', '娃娃菜', '2016-03-14 17:14:14', '0', '');
INSERT INTO searchrecords VALUES ('171', '娃娃菜', '2016-03-14 17:14:17', '0', '');
INSERT INTO searchrecords VALUES ('172', '小白菜', '2016-03-14 17:14:24', '0', '');
INSERT INTO searchrecords VALUES ('173', '小白菜', '2016-03-14 17:14:32', '0', '');
INSERT INTO searchrecords VALUES ('174', '小白菜', '2016-03-14 17:15:20', '0', '');
INSERT INTO searchrecords VALUES ('175', '娃娃菜', '2016-03-14 17:15:26', '0', '');
INSERT INTO searchrecords VALUES ('176', '娃娃菜', '2016-03-14 17:15:36', '0', '');
INSERT INTO searchrecords VALUES ('177', '娃娃菜', '2016-03-14 17:15:38', '0', '');
INSERT INTO searchrecords VALUES ('178', '小白菜', '2016-03-14 17:15:40', '0', '');
INSERT INTO searchrecords VALUES ('179', '娃娃菜', '2016-03-14 17:15:41', '0', '');
INSERT INTO searchrecords VALUES ('180', '娃娃菜', '2016-03-14 17:15:52', '0', '');
INSERT INTO searchrecords VALUES ('181', '小白菜', '2016-03-14 17:15:54', '0', '');
INSERT INTO searchrecords VALUES ('182', '小白菜', '2016-03-14 17:15:58', '0', '');
INSERT INTO searchrecords VALUES ('183', '小白菜', '2016-03-14 17:15:59', '0', '');
INSERT INTO searchrecords VALUES ('184', '娃娃菜', '2016-03-14 17:16:28', '0', '');
INSERT INTO searchrecords VALUES ('185', '菜椒', '2016-03-14 17:17:01', '0', '');
INSERT INTO searchrecords VALUES ('186', '灯笼椒', '2016-03-14 17:17:04', '0', '');
INSERT INTO searchrecords VALUES ('187', '青椒', '2016-03-14 17:17:07', '0', '');
INSERT INTO searchrecords VALUES ('188', '小白菜', '2016-03-14 17:23:07', '0', '');
INSERT INTO searchrecords VALUES ('189', '娃娃菜', '2016-03-14 17:23:10', '0', '');
INSERT INTO searchrecords VALUES ('190', '小白菜', '2016-03-14 17:23:12', '0', '');
INSERT INTO searchrecords VALUES ('191', '小白菜', '2016-03-14 17:23:55', '0', '');
INSERT INTO searchrecords VALUES ('192', '娃娃菜', '2016-03-14 17:23:58', '0', '');
INSERT INTO searchrecords VALUES ('193', '小白菜', '2016-03-14 17:24:00', '0', '');
INSERT INTO searchrecords VALUES ('194', '小白菜', '2016-03-14 17:25:44', '0', '');
INSERT INTO searchrecords VALUES ('195', '娃娃菜', '2016-03-14 17:25:48', '0', '');
INSERT INTO searchrecords VALUES ('196', '娃娃菜', '2016-03-14 17:25:50', '0', '');
INSERT INTO searchrecords VALUES ('197', '胡萝卜', '2016-03-14 17:25:55', '0', '');
INSERT INTO searchrecords VALUES ('198', '土豆', '2016-03-14 17:25:57', '0', '');
INSERT INTO searchrecords VALUES ('199', '小白菜', '2016-03-14 17:26:00', '0', '');
INSERT INTO searchrecords VALUES ('200', '小白菜', '2016-03-14 17:26:02', '0', '');
INSERT INTO searchrecords VALUES ('201', '小白菜', '2016-03-14 17:26:07', '0', '');
INSERT INTO searchrecords VALUES ('202', '小白菜', '2016-03-14 17:26:58', '0', '');
INSERT INTO searchrecords VALUES ('203', '小白菜', '2016-03-14 17:27:01', '0', '');
INSERT INTO searchrecords VALUES ('204', '小白菜', '2016-03-14 17:27:04', '0', '');
INSERT INTO searchrecords VALUES ('205', '小白菜', '2016-03-14 17:27:10', '0', '');
INSERT INTO searchrecords VALUES ('206', '小白菜', '2016-03-14 17:29:49', '0', '');
INSERT INTO searchrecords VALUES ('207', '小白菜', '2016-03-14 17:29:53', '0', '');
INSERT INTO searchrecords VALUES ('208', '小白菜', '2016-03-14 17:29:59', '0', '');
INSERT INTO searchrecords VALUES ('209', '小白菜', '2016-03-14 17:30:07', '0', '');
INSERT INTO searchrecords VALUES ('210', '小白菜', '2016-03-14 17:30:08', '0', '');
INSERT INTO searchrecords VALUES ('211', '小白菜', '2016-03-14 17:39:35', '0', '');
INSERT INTO searchrecords VALUES ('212', '娃娃菜', '2016-03-14 17:39:44', '0', '');
INSERT INTO searchrecords VALUES ('213', '娃娃菜', '2016-03-14 17:39:46', '0', '');
INSERT INTO searchrecords VALUES ('214', '娃娃菜', '2016-03-14 17:39:49', '0', '');
INSERT INTO searchrecords VALUES ('215', '小白菜', '2016-03-14 17:39:53', '0', '');
INSERT INTO searchrecords VALUES ('216', '小白菜', '2016-03-14 17:39:55', '0', '');
INSERT INTO searchrecords VALUES ('217', '小白菜', '2016-03-14 17:40:07', '0', '');
INSERT INTO searchrecords VALUES ('218', '小白菜', '2016-03-14 17:40:07', '0', '');
INSERT INTO searchrecords VALUES ('219', '小白菜', '2016-03-14 17:40:17', '0', '');
INSERT INTO searchrecords VALUES ('220', '小白菜', '2016-03-14 17:44:25', '0', '');
INSERT INTO searchrecords VALUES ('221', '小白菜', '2016-03-14 17:46:54', '0', '');
INSERT INTO searchrecords VALUES ('222', '娃娃菜', '2016-03-14 17:47:01', '0', '');
INSERT INTO searchrecords VALUES ('223', '娃娃菜', '2016-03-14 17:47:03', '0', '');
INSERT INTO searchrecords VALUES ('224', '娃娃菜', '2016-03-14 17:47:05', '0', '');
INSERT INTO searchrecords VALUES ('225', '娃娃菜', '2016-03-14 17:47:08', '0', '');
INSERT INTO searchrecords VALUES ('226', '娃娃菜', '2016-03-14 17:47:09', '0', '');
INSERT INTO searchrecords VALUES ('227', '小白菜', '2016-03-14 17:47:40', '0', '');
INSERT INTO searchrecords VALUES ('228', '小白菜', '2016-03-14 17:47:44', '0', '');
INSERT INTO searchrecords VALUES ('229', '小白菜', '2016-03-14 17:47:47', '0', '');
INSERT INTO searchrecords VALUES ('230', '小白菜', '2016-03-14 17:51:37', '0', '');
INSERT INTO searchrecords VALUES ('231', '娃娃菜', '2016-03-14 17:51:42', '0', '');
INSERT INTO searchrecords VALUES ('232', '娃娃菜', '2016-03-14 17:51:45', '0', '');
INSERT INTO searchrecords VALUES ('233', '小白菜', '2016-03-14 17:51:49', '0', '');
INSERT INTO searchrecords VALUES ('234', '小白菜', '2016-03-15 09:44:48', '0', '');
INSERT INTO searchrecords VALUES ('235', '小白菜', '2016-03-15 09:44:54', '0', '');
INSERT INTO searchrecords VALUES ('236', '娃娃菜', '2016-03-15 09:44:58', '0', '');
INSERT INTO searchrecords VALUES ('237', '娃娃菜', '2016-03-15 09:45:01', '0', '');
INSERT INTO searchrecords VALUES ('238', '小白菜', '2016-03-15 09:48:18', '0', '');
INSERT INTO searchrecords VALUES ('239', '包菜', '2016-03-15 17:18:04', '0', '');
INSERT INTO searchrecords VALUES ('240', '娃娃菜', '2016-03-15 17:18:07', '0', '');
INSERT INTO searchrecords VALUES ('241', '油麦菜', '2016-03-15 18:04:40', '0', '');
INSERT INTO searchrecords VALUES ('242', '小白菜', '2016-03-15 18:04:45', '0', '');
INSERT INTO searchrecords VALUES ('243', '娃娃菜', '2016-03-15 18:06:49', '0', '');
INSERT INTO searchrecords VALUES ('244', '小白菜', '2016-03-15 18:07:25', '0', '');
INSERT INTO searchrecords VALUES ('245', '小白菜', '2016-03-15 18:08:30', '0', '');
INSERT INTO searchrecords VALUES ('246', '包菜', '2016-03-15 22:55:37', '0', '');
INSERT INTO searchrecords VALUES ('247', '小白菜', '2016-03-15 22:55:41', '0', '');
INSERT INTO searchrecords VALUES ('248', '小白菜', '2016-03-15 22:55:43', '0', '');
INSERT INTO searchrecords VALUES ('249', '小白菜', '2016-03-15 22:55:45', '0', '');
INSERT INTO searchrecords VALUES ('250', '小白菜', '2016-03-15 22:55:45', '0', '');
INSERT INTO searchrecords VALUES ('251', '小白菜', '2016-03-16 09:38:27', '0', '');
INSERT INTO searchrecords VALUES ('252', '包菜', '2016-03-16 11:22:07', '0', '');
INSERT INTO searchrecords VALUES ('253', '小白菜', '2016-03-16 11:22:11', '0', '');
INSERT INTO searchrecords VALUES ('254', '小白菜', '2016-03-16 11:22:13', '0', '');
INSERT INTO searchrecords VALUES ('255', '小白菜', '2016-03-16 11:22:15', '0', '');
INSERT INTO searchrecords VALUES ('256', '小白菜', '2016-03-16 11:22:23', '0', '');
INSERT INTO searchrecords VALUES ('257', '小白菜', '2016-03-16 11:22:24', '0', '');
INSERT INTO searchrecords VALUES ('258', '小白菜', '2016-03-16 11:22:27', '0', '');
INSERT INTO searchrecords VALUES ('259', '小白菜', '2016-03-16 11:22:28', '0', '');
INSERT INTO searchrecords VALUES ('260', '小白菜', '2016-03-16 11:22:30', '0', '');
INSERT INTO searchrecords VALUES ('261', '小白菜', '2016-03-16 11:22:34', '0', '');
INSERT INTO searchrecords VALUES ('262', '小白菜', '2016-03-16 11:22:36', '0', '');
INSERT INTO searchrecords VALUES ('263', '菜心', '2016-03-16 13:44:03', '0', '');
INSERT INTO searchrecords VALUES ('264', '菜心', '2016-03-16 13:46:43', '0', '');
INSERT INTO searchrecords VALUES ('265', '菜心', '2016-03-16 13:49:03', '0', '');
INSERT INTO searchrecords VALUES ('266', '菜心', '2016-03-16 13:49:37', '0', '');
INSERT INTO searchrecords VALUES ('267', '菜心', '2016-03-16 13:50:01', '0', '');
INSERT INTO searchrecords VALUES ('268', '菜心', '2016-03-16 13:50:08', '0', '');
INSERT INTO searchrecords VALUES ('269', '菜心', '2016-03-16 13:50:41', '0', '');
INSERT INTO searchrecords VALUES ('270', '菜心', '2016-03-16 13:50:49', '0', '');
INSERT INTO searchrecords VALUES ('271', '油麦菜', '2016-03-16 13:55:48', '0', '');
INSERT INTO searchrecords VALUES ('272', '菜心', '2016-03-16 13:55:51', '0', '');
INSERT INTO searchrecords VALUES ('273', '菠菜', '2016-03-16 13:55:53', '0', '');
INSERT INTO searchrecords VALUES ('274', '小白菜', '2016-03-16 13:55:56', '0', '');
INSERT INTO searchrecords VALUES ('275', '菜心', '2016-03-16 13:56:01', '0', '');
INSERT INTO searchrecords VALUES ('276', '娃娃菜', '2016-03-16 13:57:58', '0', '');
INSERT INTO searchrecords VALUES ('277', '菠菜', '2016-03-16 13:58:03', '0', '');
INSERT INTO searchrecords VALUES ('278', '菜心', '2016-03-16 13:58:08', '0', '');
INSERT INTO searchrecords VALUES ('279', '菜心', '2016-03-16 14:07:12', '0', '');
INSERT INTO searchrecords VALUES ('280', '娃娃菜', '2016-03-16 14:07:16', '0', '');
INSERT INTO searchrecords VALUES ('281', '包菜', '2016-03-16 14:07:20', '0', '');
INSERT INTO searchrecords VALUES ('282', '小白菜', '2016-03-16 14:07:22', '0', '');
INSERT INTO searchrecords VALUES ('283', '小白菜', '2016-03-16 14:07:24', '0', '');
INSERT INTO searchrecords VALUES ('284', '小白菜', '2016-03-16 14:07:26', '0', '');
INSERT INTO searchrecords VALUES ('285', '小白菜', '2016-03-16 14:07:30', '0', '');
INSERT INTO searchrecords VALUES ('286', '小白菜', '2016-03-16 14:07:45', '0', '');
INSERT INTO searchrecords VALUES ('287', '小白菜', '2016-03-16 14:07:47', '0', '');
INSERT INTO searchrecords VALUES ('288', '小白菜', '2016-03-16 14:07:49', '0', '');
INSERT INTO searchrecords VALUES ('289', '小白菜', '2016-03-16 14:07:52', '0', '');
INSERT INTO searchrecords VALUES ('290', '小白菜', '2016-03-16 14:07:53', '0', '');
INSERT INTO searchrecords VALUES ('291', '小白菜', '2016-03-16 14:07:57', '0', '');
INSERT INTO searchrecords VALUES ('292', '小白菜', '2016-03-16 14:07:59', '0', '');
INSERT INTO searchrecords VALUES ('293', '小白菜', '2016-03-16 14:08:00', '0', '');
INSERT INTO searchrecords VALUES ('294', '胡萝卜', '2016-03-16 14:08:08', '0', '');
INSERT INTO searchrecords VALUES ('295', '土豆', '2016-03-16 14:08:11', '0', '');
INSERT INTO searchrecords VALUES ('296', '玉米', '2016-03-16 14:08:15', '0', '');
INSERT INTO searchrecords VALUES ('297', '娃娃菜', '2016-03-16 14:08:21', '0', '');
INSERT INTO searchrecords VALUES ('298', '娃娃菜', '2016-03-16 14:08:23', '0', '');
INSERT INTO searchrecords VALUES ('299', '娃娃菜', '2016-03-16 16:16:28', '0', '');
INSERT INTO searchrecords VALUES ('300', '包菜', '2016-03-16 16:33:00', '0', '');
INSERT INTO searchrecords VALUES ('301', '娃娃菜', '2016-03-16 16:33:09', '0', '');
INSERT INTO searchrecords VALUES ('302', '包菜', '2016-03-16 16:36:33', '0', '');
INSERT INTO searchrecords VALUES ('303', '油麦菜', '2016-03-16 16:36:51', '0', '');
INSERT INTO searchrecords VALUES ('304', '土豆', '2016-03-16 16:36:55', '0', '');
INSERT INTO searchrecords VALUES ('305', '土豆', '2016-03-16 16:36:56', '0', '');
INSERT INTO searchrecords VALUES ('306', '娃娃菜', '2016-03-16 16:37:00', '0', '');
INSERT INTO searchrecords VALUES ('307', '包菜', '2016-03-16 16:38:08', '0', '');
INSERT INTO searchrecords VALUES ('308', '包菜', '2016-03-16 16:38:12', '0', '');
INSERT INTO searchrecords VALUES ('309', '娃娃菜', '2016-03-16 16:38:16', '0', '');
INSERT INTO searchrecords VALUES ('310', '包菜', '2016-03-16 16:55:34', '0', '');
INSERT INTO searchrecords VALUES ('311', '娃娃菜', '2016-03-16 16:55:42', '0', '');
INSERT INTO searchrecords VALUES ('312', '包菜', '2016-03-16 16:56:13', '0', '');
INSERT INTO searchrecords VALUES ('313', '娃娃菜', '2016-03-16 16:57:26', '0', '');
INSERT INTO searchrecords VALUES ('314', '包菜', '2016-03-16 16:57:56', '0', '');
INSERT INTO searchrecords VALUES ('315', '娃娃菜', '2016-03-16 16:58:39', '0', '');
INSERT INTO searchrecords VALUES ('316', '娃娃菜', '2016-03-16 16:58:49', '0', '');
INSERT INTO searchrecords VALUES ('317', '娃娃菜', '2016-03-16 16:58:53', '0', '');
INSERT INTO searchrecords VALUES ('318', '娃娃菜', '2016-03-16 17:04:58', '0', '');
INSERT INTO searchrecords VALUES ('319', '娃娃菜', '2016-03-16 17:05:10', '0', '');
INSERT INTO searchrecords VALUES ('320', '娃娃菜', '2016-03-16 17:05:28', '0', '');
INSERT INTO searchrecords VALUES ('321', '娃娃菜', '2016-03-16 17:05:31', '0', '');
INSERT INTO searchrecords VALUES ('322', '娃娃菜', '2016-03-16 17:05:33', '0', '');
INSERT INTO searchrecords VALUES ('323', '小白菜', '2016-03-16 17:05:36', '0', '');
INSERT INTO searchrecords VALUES ('324', '菜心', '2016-03-16 17:05:46', '0', '');
INSERT INTO searchrecords VALUES ('325', '土豆', '2016-03-16 17:05:53', '0', '');
INSERT INTO searchrecords VALUES ('326', '包菜', '2016-03-16 17:06:10', '0', '');
INSERT INTO searchrecords VALUES ('327', '菜心', '2016-03-16 17:06:21', '0', '');
INSERT INTO searchrecords VALUES ('328', '菜心', '2016-03-16 17:06:23', '0', '');
INSERT INTO searchrecords VALUES ('329', '包菜', '2016-03-16 17:07:45', '0', '');
INSERT INTO searchrecords VALUES ('330', '菜心', '2016-03-16 17:07:52', '0', '');
INSERT INTO searchrecords VALUES ('331', '包菜', '2016-03-16 17:08:50', '0', '');
INSERT INTO searchrecords VALUES ('332', '娃娃菜', '2016-03-16 17:08:52', '0', '');
INSERT INTO searchrecords VALUES ('333', '娃娃菜', '2016-03-16 17:08:57', '0', '');
INSERT INTO searchrecords VALUES ('334', '土豆', '2016-03-16 17:09:05', '0', '');
INSERT INTO searchrecords VALUES ('335', '菜心', '2016-03-16 17:09:25', '0', '');
INSERT INTO searchrecords VALUES ('336', '白萝卜', '2016-03-16 18:00:19', '0', '');
INSERT INTO searchrecords VALUES ('337', '白萝卜', '2016-03-16 18:23:53', '0', '');
INSERT INTO searchrecords VALUES ('338', '胡萝卜', '2016-03-16 18:23:57', '0', '');
INSERT INTO searchrecords VALUES ('339', '白萝卜', '2016-03-16 21:07:43', '0', '');
INSERT INTO searchrecords VALUES ('340', '胡萝卜', '2016-03-16 21:07:47', '0', '');
INSERT INTO searchrecords VALUES ('341', '白萝卜', '2016-03-16 21:08:07', '0', '');
INSERT INTO searchrecords VALUES ('342', '白萝卜', '2016-03-16 21:12:08', '0', '');
INSERT INTO searchrecords VALUES ('343', '胡萝卜', '2016-03-16 21:12:11', '0', '');
INSERT INTO searchrecords VALUES ('344', '白萝卜', '2016-03-16 21:12:15', '0', '');
INSERT INTO searchrecords VALUES ('345', '胡萝卜', '2016-03-16 21:13:45', '0', '');
INSERT INTO searchrecords VALUES ('346', '胡萝卜', '2016-03-16 21:13:47', '0', '');
INSERT INTO searchrecords VALUES ('347', '菜心', '2016-03-16 21:13:58', '0', '');
INSERT INTO searchrecords VALUES ('348', '白萝卜', '2016-03-16 21:28:20', '0', '');
INSERT INTO searchrecords VALUES ('349', '白萝卜', '2016-03-16 21:52:56', '0', '');
INSERT INTO searchrecords VALUES ('350', '菜心', '2016-03-17 08:56:49', '0', '');
INSERT INTO searchrecords VALUES ('351', '菜心', '2016-03-17 09:14:50', '0', '');
INSERT INTO searchrecords VALUES ('352', '菜椒', '2016-03-17 09:15:22', '0', '');
INSERT INTO searchrecords VALUES ('353', '白萝卜', '2016-03-17 09:15:23', '0', '');
INSERT INTO searchrecords VALUES ('354', '胡萝卜', '2016-03-17 09:18:24', '0', '');
INSERT INTO searchrecords VALUES ('355', '茄子', '2016-03-17 09:19:26', '0', '');
INSERT INTO searchrecords VALUES ('356', '莲藕', '2016-03-17 09:19:31', '0', '');
INSERT INTO searchrecords VALUES ('357', '白萝卜', '2016-03-17 09:19:34', '0', '');
INSERT INTO searchrecords VALUES ('358', '土豆', '2016-03-17 09:25:15', '0', '');
INSERT INTO searchrecords VALUES ('359', '白萝卜', '2016-03-17 09:25:17', '0', '');
INSERT INTO searchrecords VALUES ('360', '白萝卜', '2016-03-17 09:25:20', '0', '');
INSERT INTO searchrecords VALUES ('361', '娃娃菜', '2016-03-17 09:33:41', '0', '');
INSERT INTO searchrecords VALUES ('362', '娃娃菜', '2016-03-17 09:34:52', '0', '');
INSERT INTO searchrecords VALUES ('363', '包菜', '2016-03-17 09:35:07', '0', '');
INSERT INTO searchrecords VALUES ('364', '小白菜', '2016-03-17 09:35:09', '0', '');
INSERT INTO searchrecords VALUES ('365', '油麦菜', '2016-03-17 09:35:22', '0', '');
INSERT INTO searchrecords VALUES ('366', '菜心', '2016-03-17 09:35:24', '0', '');
INSERT INTO searchrecords VALUES ('367', '菜心', '2016-03-17 13:43:48', '0', '');
INSERT INTO searchrecords VALUES ('368', '土豆', '2016-03-17 14:43:17', '0', '');
INSERT INTO searchrecords VALUES ('369', '白萝卜', '2016-03-17 14:43:20', '0', '');
INSERT INTO searchrecords VALUES ('370', '白萝卜', '2016-03-17 14:43:21', '0', '');
INSERT INTO searchrecords VALUES ('371', '白萝卜', '2016-03-17 14:44:39', '0', '');
INSERT INTO searchrecords VALUES ('372', '胡萝卜', '2016-03-17 14:44:57', '0', '');
INSERT INTO searchrecords VALUES ('373', '白萝卜', '2016-03-17 15:00:30', '0', '');
INSERT INTO searchrecords VALUES ('374', '土豆', '2016-03-17 15:28:11', '0', '');
INSERT INTO searchrecords VALUES ('375', '白萝卜', '2016-03-17 15:28:30', '0', '');
INSERT INTO searchrecords VALUES ('376', '白萝卜', '2016-03-17 15:41:17', '0', '');
INSERT INTO searchrecords VALUES ('377', '胡萝卜', '2016-03-17 15:41:31', '0', '');
INSERT INTO searchrecords VALUES ('378', '白萝卜', '2016-03-17 16:04:23', '0', '');
INSERT INTO searchrecords VALUES ('379', '胡萝卜', '2016-03-17 16:04:50', '0', '');
INSERT INTO searchrecords VALUES ('380', '白萝卜', '2016-03-17 16:36:10', '0', '');
INSERT INTO searchrecords VALUES ('381', '胡萝卜', '2016-03-17 16:36:15', '0', '');
INSERT INTO searchrecords VALUES ('382', '菜心', '2016-03-17 16:36:20', '0', '');
INSERT INTO searchrecords VALUES ('383', '白萝卜', '2016-03-17 16:58:13', '0', '');
INSERT INTO searchrecords VALUES ('384', '菜心', '2016-03-17 17:08:42', '0', '');
INSERT INTO searchrecords VALUES ('385', '胡萝卜', '2016-03-17 17:08:46', '0', '');
INSERT INTO searchrecords VALUES ('386', '小白菜', '2016-03-17 17:20:14', '0', '');
INSERT INTO searchrecords VALUES ('387', '小白菜', '2016-03-17 17:20:36', '0', '');
INSERT INTO searchrecords VALUES ('388', '小白菜', '2016-03-17 17:20:53', '0', '');
INSERT INTO searchrecords VALUES ('389', '白萝卜', '2016-03-17 17:23:32', '0', '');
INSERT INTO searchrecords VALUES ('390', '胡萝卜', '2016-03-17 17:23:44', '0', '');
INSERT INTO searchrecords VALUES ('391', '菜心', '2016-03-17 17:23:50', '0', '');
INSERT INTO searchrecords VALUES ('392', '小白菜', '2016-03-17 17:25:04', '0', '');
INSERT INTO searchrecords VALUES ('393', '小白菜', '2016-03-17 17:25:06', '0', '');
INSERT INTO searchrecords VALUES ('394', '小白菜', '2016-03-17 17:25:08', '0', '');
INSERT INTO searchrecords VALUES ('395', '小白菜', '2016-03-17 17:25:08', '0', '');
INSERT INTO searchrecords VALUES ('396', '小白菜', '2016-03-17 17:33:27', '0', '');
INSERT INTO searchrecords VALUES ('397', '小白菜', '2016-03-17 17:33:34', '0', '');
INSERT INTO searchrecords VALUES ('398', '小白菜', '2016-03-17 17:33:53', '0', '');
INSERT INTO searchrecords VALUES ('399', '油麦菜', '2016-03-18 09:53:16', '0', '');
INSERT INTO searchrecords VALUES ('400', '白萝卜', '2016-03-18 09:53:21', '0', '');
INSERT INTO searchrecords VALUES ('401', '菜心', '2016-03-18 09:54:49', '0', '');
INSERT INTO searchrecords VALUES ('402', '莲藕', '2016-03-18 10:33:43', '0', '');
INSERT INTO searchrecords VALUES ('403', '油麦菜', '2016-03-18 10:33:49', '0', '');
INSERT INTO searchrecords VALUES ('404', '娃娃菜', '2016-03-18 10:33:52', '0', '');
INSERT INTO searchrecords VALUES ('405', '菜心', '2016-03-18 10:33:58', '0', '');
INSERT INTO searchrecords VALUES ('406', '包菜', '2016-03-18 10:34:01', '0', '');
INSERT INTO searchrecords VALUES ('407', '土豆', '2016-03-18 10:34:06', '0', '');
INSERT INTO searchrecords VALUES ('408', '白萝卜', '2016-03-18 10:34:09', '0', '');
INSERT INTO searchrecords VALUES ('409', '白萝卜', '2016-03-18 10:36:24', '0', '');
INSERT INTO searchrecords VALUES ('410', '胡萝卜', '2016-03-18 10:38:19', '0', '');
INSERT INTO searchrecords VALUES ('411', '娃娃菜', '2016-03-18 11:46:02', '0', '');
INSERT INTO searchrecords VALUES ('412', '小白菜', '2016-03-18 13:59:48', '0', '');
INSERT INTO searchrecords VALUES ('413', '小白菜', '2016-03-18 13:59:51', '0', '');
INSERT INTO searchrecords VALUES ('414', '菜心', '2016-03-18 15:01:23', '0', '');
INSERT INTO searchrecords VALUES ('415', '小白菜', '2016-03-18 15:02:54', '0', '');
INSERT INTO searchrecords VALUES ('416', '包菜', '2016-03-18 15:16:57', '0', '');
INSERT INTO searchrecords VALUES ('417', '娃娃菜', '2016-03-18 15:17:11', '0', '');
INSERT INTO searchrecords VALUES ('418', '娃娃菜', '2016-03-18 15:17:15', '0', '');
INSERT INTO searchrecords VALUES ('419', '娃娃菜', '2016-03-18 15:17:54', '0', '');
INSERT INTO searchrecords VALUES ('420', '娃娃菜', '2016-03-18 15:17:58', '0', '');
INSERT INTO searchrecords VALUES ('421', '娃娃菜', '2016-03-18 15:17:58', '0', '');
INSERT INTO searchrecords VALUES ('422', '小白菜', '2016-03-18 17:48:44', '0', '');
INSERT INTO searchrecords VALUES ('423', '菜心', '2016-03-18 17:49:45', '0', '');
INSERT INTO searchrecords VALUES ('424', '菠菜', '2016-03-18 17:51:21', '0', '');
INSERT INTO searchrecords VALUES ('425', '白萝卜', '2016-03-18 17:51:32', '0', '');
INSERT INTO searchrecords VALUES ('426', '胡萝卜', '2016-03-18 17:51:45', '0', '');
INSERT INTO searchrecords VALUES ('427', '菜心', '2016-03-18 17:52:58', '0', '');
INSERT INTO searchrecords VALUES ('428', '白萝卜', '2016-03-19 07:06:48', '0', '');
INSERT INTO searchrecords VALUES ('429', '胡萝卜', '2016-03-19 07:09:00', '0', '');
INSERT INTO searchrecords VALUES ('430', '白萝卜', '2016-03-19 12:10:07', '0', '');
INSERT INTO searchrecords VALUES ('431', '菜心', '2016-03-21 10:39:38', '0', '');
INSERT INTO searchrecords VALUES ('432', '包菜', '2016-03-21 10:44:17', '0', '');
INSERT INTO searchrecords VALUES ('433', '菜心', '2016-03-21 10:57:48', '0', '');
INSERT INTO searchrecords VALUES ('434', '菜心', '2016-03-21 10:58:00', '0', '');
INSERT INTO searchrecords VALUES ('435', '娃娃菜', '2016-03-21 11:33:15', '0', '');
INSERT INTO searchrecords VALUES ('436', '娃娃菜', '2016-03-21 11:35:19', '0', '');
INSERT INTO searchrecords VALUES ('437', '娃娃菜', '2016-03-21 11:36:45', '0', '');
INSERT INTO searchrecords VALUES ('438', '小白菜', '2016-03-21 11:45:48', '0', '');
INSERT INTO searchrecords VALUES ('439', '菜心', '2016-03-21 11:46:06', '0', '');
INSERT INTO searchrecords VALUES ('440', '小白菜', '2016-03-21 11:49:28', '0', '');
INSERT INTO searchrecords VALUES ('441', '菜心', '2016-03-21 11:49:31', '0', '');
INSERT INTO searchrecords VALUES ('442', '娃娃菜', '2016-03-21 11:58:47', '0', '');
INSERT INTO searchrecords VALUES ('443', '菜心', '2016-03-21 11:59:09', '0', '');
INSERT INTO searchrecords VALUES ('444', '菜心', '2016-03-21 12:15:44', '0', '');
INSERT INTO searchrecords VALUES ('445', '菜心', '2016-03-21 12:17:02', '0', '');
INSERT INTO searchrecords VALUES ('446', '小白菜', '2016-03-21 12:17:19', '0', '');
INSERT INTO searchrecords VALUES ('447', '包菜', '2016-03-21 12:17:24', '0', '');
INSERT INTO searchrecords VALUES ('448', '白菜', '2016-03-21 13:40:37', '0', '');
INSERT INTO searchrecords VALUES ('449', '白菜', '2016-03-21 13:40:45', '0', '');
INSERT INTO searchrecords VALUES ('450', '菜心', '2016-03-21 13:47:18', '0', '');
INSERT INTO searchrecords VALUES ('451', '菜心', '2016-03-21 13:48:24', '0', '');
INSERT INTO searchrecords VALUES ('452', '娃娃菜', '2016-03-21 13:49:23', '0', '');
INSERT INTO searchrecords VALUES ('453', '油麦菜', '2016-03-21 13:49:26', '0', '');
INSERT INTO searchrecords VALUES ('454', '菜心', '2016-03-21 13:49:27', '0', '');
INSERT INTO searchrecords VALUES ('455', '菜心', '2016-03-21 13:56:05', '0', '');
INSERT INTO searchrecords VALUES ('456', '菜心', '2016-03-21 13:57:20', '0', '');
INSERT INTO searchrecords VALUES ('457', '菜心', '2016-03-21 14:01:02', '0', '');
INSERT INTO searchrecords VALUES ('458', '菜心', '2016-03-21 14:02:30', '0', '');
INSERT INTO searchrecords VALUES ('459', '菜心', '2016-03-21 14:04:21', '0', '');
INSERT INTO searchrecords VALUES ('460', '菜心', '2016-03-21 14:06:10', '0', '');
INSERT INTO searchrecords VALUES ('461', '包菜', '2016-03-21 14:07:36', '0', '');
INSERT INTO searchrecords VALUES ('462', '油麦菜', '2016-03-21 14:07:38', '0', '');
INSERT INTO searchrecords VALUES ('463', '小白菜', '2016-03-21 14:07:40', '0', '');
INSERT INTO searchrecords VALUES ('464', '菜心', '2016-03-21 14:09:14', '0', '');
INSERT INTO searchrecords VALUES ('465', '菜心', '2016-03-21 14:10:24', '0', '');
INSERT INTO searchrecords VALUES ('466', '菜心', '2016-03-21 14:11:39', '0', '');
INSERT INTO searchrecords VALUES ('467', '小白菜', '2016-03-21 15:07:58', '0', '');
INSERT INTO searchrecords VALUES ('468', '菜心', '2016-03-21 15:08:12', '0', '');
INSERT INTO searchrecords VALUES ('469', '娃娃菜', '2016-03-21 15:17:57', '0', '');
INSERT INTO searchrecords VALUES ('470', '小白菜', '2016-03-21 15:17:59', '0', '');
INSERT INTO searchrecords VALUES ('471', '小白菜', '2016-03-21 15:22:39', '0', '');
INSERT INTO searchrecords VALUES ('472', '小白菜', '2016-03-21 15:23:53', '0', '');
INSERT INTO searchrecords VALUES ('473', '菜心', '2016-03-21 15:35:38', '0', '');
INSERT INTO searchrecords VALUES ('474', '菜心', '2016-03-21 15:37:01', '0', '');
INSERT INTO searchrecords VALUES ('475', '娃娃菜', '2016-03-21 15:50:39', '0', '');
INSERT INTO searchrecords VALUES ('476', '娃娃菜', '2016-03-21 15:50:47', '0', '');
INSERT INTO searchrecords VALUES ('477', '小白菜', '2016-03-21 15:51:08', '0', '');
INSERT INTO searchrecords VALUES ('478', '小白菜', '2016-03-21 15:52:38', '0', '');
INSERT INTO searchrecords VALUES ('479', '小白菜', '2016-03-21 15:53:43', '0', '');
INSERT INTO searchrecords VALUES ('480', '小白菜', '2016-03-21 15:57:35', '0', '');
INSERT INTO searchrecords VALUES ('481', '娃娃菜', '2016-03-21 16:00:20', '0', '');
INSERT INTO searchrecords VALUES ('482', '小白菜', '2016-03-21 16:00:50', '0', '');
INSERT INTO searchrecords VALUES ('483', '小白菜', '2016-03-21 16:02:14', '0', '');
INSERT INTO searchrecords VALUES ('484', '娃娃菜', '2016-03-21 16:05:12', '0', '');
INSERT INTO searchrecords VALUES ('485', '小白菜', '2016-03-21 16:05:46', '0', '');
INSERT INTO searchrecords VALUES ('486', '小白菜', '2016-03-21 16:06:50', '0', '');
INSERT INTO searchrecords VALUES ('487', '小白菜', '2016-03-21 16:10:25', '0', '');
INSERT INTO searchrecords VALUES ('488', '小白菜', '2016-03-21 16:11:52', '0', '');
INSERT INTO searchrecords VALUES ('489', '小白菜', '2016-03-21 16:11:57', '0', '');
INSERT INTO searchrecords VALUES ('490', '菜心', '2016-03-21 16:12:00', '0', '');
INSERT INTO searchrecords VALUES ('491', '小白菜', '2016-03-21 16:23:16', '0', '');
INSERT INTO searchrecords VALUES ('492', '娃娃菜', '2016-03-21 16:23:21', '0', '');
INSERT INTO searchrecords VALUES ('493', '菜心', '2016-03-21 16:37:05', '0', '');
INSERT INTO searchrecords VALUES ('494', '菜心', '2016-03-21 16:37:53', '0', '');
INSERT INTO searchrecords VALUES ('495', '娃娃菜', '2016-03-21 16:43:09', '0', '');
INSERT INTO searchrecords VALUES ('496', '小白菜', '2016-03-21 16:43:12', '0', '');
INSERT INTO searchrecords VALUES ('497', '小白菜', '2016-03-21 16:43:15', '0', '');
INSERT INTO searchrecords VALUES ('498', '小白菜', '2016-03-21 16:43:17', '0', '');
INSERT INTO searchrecords VALUES ('499', '小白菜', '2016-03-21 16:43:22', '0', '');
INSERT INTO searchrecords VALUES ('500', '小白菜', '2016-03-21 16:43:24', '0', '');
INSERT INTO searchrecords VALUES ('501', '包菜', '2016-03-21 16:43:27', '0', '');
INSERT INTO searchrecords VALUES ('502', '菜心', '2016-03-21 16:43:30', '0', '');
INSERT INTO searchrecords VALUES ('503', '胡萝卜', '2016-03-21 16:43:34', '0', '');
INSERT INTO searchrecords VALUES ('504', '油麦菜', '2016-03-21 16:43:43', '0', '');
INSERT INTO searchrecords VALUES ('505', '菜心', '2016-03-21 16:43:46', '0', '');
INSERT INTO searchrecords VALUES ('506', '菜心', '2016-03-21 16:50:05', '0', '');
INSERT INTO searchrecords VALUES ('507', '菜心', '2016-03-21 16:50:15', '0', '');
INSERT INTO searchrecords VALUES ('508', '菜心', '2016-03-21 16:51:25', '0', '');
INSERT INTO searchrecords VALUES ('509', '小白菜', '2016-03-21 17:11:34', '0', '');
INSERT INTO searchrecords VALUES ('510', '小白菜', '2016-03-21 17:11:53', '0', '');
INSERT INTO searchrecords VALUES ('511', '小白菜', '2016-03-21 17:12:44', '0', '');
INSERT INTO searchrecords VALUES ('512', '小白菜', '2016-03-21 17:15:02', '0', '');
INSERT INTO searchrecords VALUES ('513', '小白菜', '2016-03-21 17:16:01', '0', '');
INSERT INTO searchrecords VALUES ('514', '小白菜', '2016-03-21 17:17:53', '0', '');
INSERT INTO searchrecords VALUES ('515', '菠菜', '2016-03-21 17:33:18', '0', '');
INSERT INTO searchrecords VALUES ('516', '土豆', '2016-03-21 17:48:05', '0', '');
INSERT INTO searchrecords VALUES ('517', '小白菜', '2016-03-21 21:18:29', '0', '');
INSERT INTO searchrecords VALUES ('518', '包菜', '2016-03-22 09:16:20', '0', '');
INSERT INTO searchrecords VALUES ('519', '娃娃菜', '2016-03-22 09:16:25', '0', '');
INSERT INTO searchrecords VALUES ('520', '菜心', '2016-03-22 09:16:53', '0', '');
INSERT INTO searchrecords VALUES ('521', '菜心', '2016-03-22 09:17:25', '0', '');
INSERT INTO searchrecords VALUES ('522', '菜心', '2016-03-22 09:17:27', '0', '');
INSERT INTO searchrecords VALUES ('523', '菜心', '2016-03-22 09:17:30', '0', '');
INSERT INTO searchrecords VALUES ('524', '菜心', '2016-03-22 09:17:36', '0', '');
INSERT INTO searchrecords VALUES ('525', '菜心', '2016-03-22 09:17:40', '0', '');
INSERT INTO searchrecords VALUES ('526', '菜心', '2016-03-22 09:17:44', '0', '');
INSERT INTO searchrecords VALUES ('527', '菜心', '2016-03-22 09:17:54', '0', '');
INSERT INTO searchrecords VALUES ('528', '胡萝卜', '2016-03-22 09:18:00', '0', '');
INSERT INTO searchrecords VALUES ('529', '菜心', '2016-03-22 09:18:04', '0', '');
INSERT INTO searchrecords VALUES ('530', '白萝卜', '2016-03-22 09:18:08', '0', '');
INSERT INTO searchrecords VALUES ('531', '小白菜', '2016-03-22 09:19:30', '0', '');
INSERT INTO searchrecords VALUES ('532', '包菜', '2016-03-22 15:36:06', '0', '');
INSERT INTO searchrecords VALUES ('533', '小白菜', '2016-03-22 16:27:40', '0', '');
INSERT INTO searchrecords VALUES ('534', '小白菜', '2016-03-22 16:30:47', '0', '');
INSERT INTO searchrecords VALUES ('535', '小白菜', '2016-03-22 16:31:27', '0', '');
INSERT INTO searchrecords VALUES ('536', '小白菜', '2016-03-22 16:31:33', '0', '');
INSERT INTO searchrecords VALUES ('537', '菜心', '2016-03-22 16:54:39', '0', '');
INSERT INTO searchrecords VALUES ('538', '菜椒', '2016-03-22 18:10:34', '0', '');
INSERT INTO searchrecords VALUES ('539', '玉米', '2016-03-22 18:10:36', '0', '');
INSERT INTO searchrecords VALUES ('540', '娃娃菜', '2016-03-23 15:13:21', '0', '');
INSERT INTO searchrecords VALUES ('541', '玉米', '2016-03-23 15:13:26', '0', '');
INSERT INTO searchrecords VALUES ('542', '番茄', '2016-03-23 15:13:28', '0', '');
INSERT INTO searchrecords VALUES ('543', '娃娃菜', '2016-03-23 15:50:03', '0', '');
INSERT INTO searchrecords VALUES ('544', '娃娃菜', '2016-03-23 15:50:50', '0', '');
INSERT INTO searchrecords VALUES ('545', '小白菜', '2016-03-23 17:48:13', '0', '');
INSERT INTO searchrecords VALUES ('546', '小白菜', '2016-03-23 17:49:09', '0', '');
INSERT INTO searchrecords VALUES ('547', '小白菜', '2016-03-23 17:50:19', '0', '');
INSERT INTO searchrecords VALUES ('548', '小白菜', '2016-03-23 17:51:16', '0', '');
INSERT INTO searchrecords VALUES ('549', '娃娃菜', '2016-03-23 17:51:24', '0', '');
INSERT INTO searchrecords VALUES ('550', '小白菜', '2016-03-23 18:56:10', '0', '');
INSERT INTO searchrecords VALUES ('551', '白萝卜', '2016-03-24 11:08:17', '0', '');
INSERT INTO searchrecords VALUES ('552', '白萝卜', '2016-03-24 11:11:32', '0', '');
INSERT INTO searchrecords VALUES ('553', '白萝卜', '2016-03-24 11:16:48', '0', '');
INSERT INTO searchrecords VALUES ('554', '白萝卜', '2016-03-24 11:17:52', '0', '');
INSERT INTO searchrecords VALUES ('555', '白萝卜', '2016-03-24 11:27:51', '0', '');
INSERT INTO searchrecords VALUES ('556', '白萝卜', '2016-03-24 11:28:00', '0', '');
INSERT INTO searchrecords VALUES ('557', '白萝卜', '2016-03-24 11:40:42', '0', '');
INSERT INTO searchrecords VALUES ('558', '白萝卜', '2016-03-24 11:42:00', '0', '');
INSERT INTO searchrecords VALUES ('559', '白萝卜', '2016-03-24 14:03:00', '0', '');
INSERT INTO searchrecords VALUES ('560', '白萝卜', '2016-03-24 14:09:07', '0', '');
INSERT INTO searchrecords VALUES ('561', '胡萝卜', '2016-03-24 14:10:33', '0', '');
INSERT INTO searchrecords VALUES ('562', '胡萝卜', '2016-03-24 14:20:45', '0', '');
INSERT INTO searchrecords VALUES ('563', '番茄', '2016-03-24 14:21:15', '0', '');
INSERT INTO searchrecords VALUES ('564', '白萝卜', '2016-03-24 14:21:18', '0', '');
INSERT INTO searchrecords VALUES ('565', '菜心', '2016-03-24 14:26:06', '0', '');
INSERT INTO searchrecords VALUES ('566', '番茄', '2016-03-24 14:26:24', '0', '');
INSERT INTO searchrecords VALUES ('567', '油麦菜', '2016-03-24 14:26:27', '0', '');
INSERT INTO searchrecords VALUES ('568', '小白菜', '2016-03-24 14:26:34', '0', '');
INSERT INTO searchrecords VALUES ('569', '灯笼椒', '2016-03-24 14:31:21', '0', '');
INSERT INTO searchrecords VALUES ('570', '小白菜', '2016-03-24 14:31:23', '0', '');
INSERT INTO searchrecords VALUES ('571', '白萝卜', '2016-03-24 14:31:31', '0', '');
INSERT INTO searchrecords VALUES ('572', '胡萝卜', '2016-03-24 14:34:57', '0', '');
INSERT INTO searchrecords VALUES ('573', '白萝卜', '2016-03-24 14:47:06', '0', '');
INSERT INTO searchrecords VALUES ('574', '白萝卜', '2016-03-24 14:47:09', '0', '');
INSERT INTO searchrecords VALUES ('575', '胡萝卜', '2016-03-24 14:48:32', '0', '');
INSERT INTO searchrecords VALUES ('576', '白萝卜', '2016-03-24 14:48:50', '0', '');
INSERT INTO searchrecords VALUES ('577', '白萝卜', '2016-03-24 14:49:35', '0', '');
INSERT INTO searchrecords VALUES ('578', '白萝卜', '2016-03-24 14:52:02', '0', '');
INSERT INTO searchrecords VALUES ('579', '白萝卜', '2016-03-24 15:02:07', '0', '');
INSERT INTO searchrecords VALUES ('580', '白萝卜', '2016-03-24 15:02:08', '0', '');
INSERT INTO searchrecords VALUES ('581', '白萝卜', '2016-03-24 15:02:42', '0', '');
INSERT INTO searchrecords VALUES ('582', '胡萝卜', '2016-03-24 15:05:36', '0', '');
INSERT INTO searchrecords VALUES ('583', '白萝卜', '2016-03-24 15:07:00', '0', '');
INSERT INTO searchrecords VALUES ('584', '白萝卜', '2016-03-24 15:07:01', '0', '');
INSERT INTO searchrecords VALUES ('585', '白萝卜', '2016-03-24 15:08:46', '0', '');
INSERT INTO searchrecords VALUES ('586', '白萝卜', '2016-03-24 15:09:46', '0', '');
INSERT INTO searchrecords VALUES ('587', '白萝卜', '2016-03-24 15:11:00', '0', '');
INSERT INTO searchrecords VALUES ('588', '白萝卜', '2016-03-24 15:11:01', '0', '');
INSERT INTO searchrecords VALUES ('589', '白萝卜', '2016-03-24 15:13:39', '0', '');
INSERT INTO searchrecords VALUES ('590', '白萝卜', '2016-03-24 15:13:40', '0', '');
INSERT INTO searchrecords VALUES ('591', '白萝卜', '2016-03-24 15:14:11', '0', '');
INSERT INTO searchrecords VALUES ('592', '胡萝卜', '2016-03-24 15:14:13', '0', '');
INSERT INTO searchrecords VALUES ('593', '胡萝卜', '2016-03-24 15:25:33', '0', '');
INSERT INTO searchrecords VALUES ('594', '白萝卜', '2016-03-24 15:25:37', '0', '');
INSERT INTO searchrecords VALUES ('595', '白萝卜', '2016-03-24 15:30:36', '0', '');
INSERT INTO searchrecords VALUES ('596', '白萝卜', '2016-03-24 15:31:19', '0', '');
INSERT INTO searchrecords VALUES ('597', '白萝卜', '2016-03-24 15:33:55', '0', '');
INSERT INTO searchrecords VALUES ('598', '白萝卜', '2016-03-24 15:35:12', '0', '');
INSERT INTO searchrecords VALUES ('599', '白萝卜', '2016-03-24 15:35:59', '0', '');
INSERT INTO searchrecords VALUES ('600', '白萝卜', '2016-03-24 15:37:48', '0', '');
INSERT INTO searchrecords VALUES ('601', '胡萝卜', '2016-03-24 15:52:40', '0', '');
INSERT INTO searchrecords VALUES ('602', '白萝卜', '2016-03-24 15:52:46', '0', '');
INSERT INTO searchrecords VALUES ('603', '白萝卜', '2016-03-24 15:53:33', '0', '');
INSERT INTO searchrecords VALUES ('604', '白萝卜', '2016-03-24 15:58:46', '0', '');
INSERT INTO searchrecords VALUES ('605', '白萝卜', '2016-03-24 16:01:20', '0', '');
INSERT INTO searchrecords VALUES ('606', '白萝卜', '2016-03-24 16:02:15', '0', '');
INSERT INTO searchrecords VALUES ('607', '白萝卜', '2016-03-24 16:04:34', '0', '');
INSERT INTO searchrecords VALUES ('608', '白萝卜', '2016-03-24 16:06:52', '0', '');
INSERT INTO searchrecords VALUES ('609', '白萝卜', '2016-03-24 16:08:09', '0', '');
INSERT INTO searchrecords VALUES ('610', '白萝卜', '2016-03-24 16:09:07', '0', '');
INSERT INTO searchrecords VALUES ('1000', '白萝卜', '2016-03-24 16:12:43', '0', '');
INSERT INTO searchrecords VALUES ('1001', '白萝卜', '2016-03-24 16:20:59', '0', '');
INSERT INTO searchrecords VALUES ('1002', '白萝卜', '2016-03-24 16:21:51', '0', '');
INSERT INTO searchrecords VALUES ('1003', '白萝卜', '2016-03-24 16:22:57', '0', '');
INSERT INTO searchrecords VALUES ('1004', '白萝卜', '2016-03-24 16:23:58', '0', '');
INSERT INTO searchrecords VALUES ('1005', '胡萝卜', '2016-03-24 16:24:40', '0', '');
INSERT INTO searchrecords VALUES ('1006', '油麦菜', '2016-03-24 16:38:05', '0', '');
INSERT INTO searchrecords VALUES ('1007', '菜心', '2016-03-24 16:38:09', '0', '');
INSERT INTO searchrecords VALUES ('1008', '白萝卜', '2016-03-24 16:48:10', '0', '');
INSERT INTO searchrecords VALUES ('1009', '白萝卜', '2016-03-24 17:03:21', '0', '');
INSERT INTO searchrecords VALUES ('1010', '胡萝卜', '2016-03-24 17:03:31', '0', '');
INSERT INTO searchrecords VALUES ('1011', '白萝卜', '2016-03-24 17:03:41', '0', '');
INSERT INTO searchrecords VALUES ('1012', '白萝卜', '2016-03-24 17:03:54', '0', '');
INSERT INTO searchrecords VALUES ('1013', '胡萝卜', '2016-03-24 17:04:07', '0', '');
INSERT INTO searchrecords VALUES ('1014', '胡萝卜', '2016-03-24 17:04:15', '0', '');
INSERT INTO searchrecords VALUES ('1015', '白萝卜', '2016-03-24 17:04:20', '0', '');
INSERT INTO searchrecords VALUES ('1016', '白萝卜', '2016-03-24 17:05:53', '0', '');
INSERT INTO searchrecords VALUES ('1017', '胡萝卜', '2016-03-24 17:06:36', '0', '');
INSERT INTO searchrecords VALUES ('1018', '白萝卜', '2016-03-24 17:29:24', '0', '');
INSERT INTO searchrecords VALUES ('1019', '小白菜', '2016-03-24 17:31:01', '0', '');
INSERT INTO searchrecords VALUES ('1020', '白萝卜', '2016-03-24 17:31:17', '0', '');
INSERT INTO searchrecords VALUES ('1021', '番茄', '2016-03-24 17:31:29', '0', '');
INSERT INTO searchrecords VALUES ('1022', '白萝卜', '2016-03-24 17:32:55', '0', '');
INSERT INTO searchrecords VALUES ('1023', '胡萝卜', '2016-03-24 17:33:29', '0', '');
INSERT INTO searchrecords VALUES ('1024', '菜心', '2016-03-24 17:38:12', '0', '');
INSERT INTO searchrecords VALUES ('1025', '胡萝卜', '2016-03-24 17:38:50', '0', '');
INSERT INTO searchrecords VALUES ('1026', '白萝卜', '2016-03-24 17:42:59', '0', '');
INSERT INTO searchrecords VALUES ('1027', '白萝卜', '2016-03-24 17:43:09', '0', '');
INSERT INTO searchrecords VALUES ('1028', '胡萝卜', '2016-03-24 17:43:18', '0', '');
INSERT INTO searchrecords VALUES ('1029', '菜心', '2016-03-24 17:43:28', '0', '');
INSERT INTO searchrecords VALUES ('1030', '白萝卜', '2016-03-24 17:45:58', '0', '');
INSERT INTO searchrecords VALUES ('1031', '胡萝卜', '2016-03-24 17:46:05', '0', '');
INSERT INTO searchrecords VALUES ('1032', '菜心', '2016-03-24 17:46:16', '0', '');
INSERT INTO searchrecords VALUES ('1033', '白萝卜', '2016-03-24 17:49:43', '0', '');
INSERT INTO searchrecords VALUES ('1034', '胡萝卜', '2016-03-24 17:49:55', '0', '');
INSERT INTO searchrecords VALUES ('1035', '白萝卜', '2016-03-24 17:54:55', '0', '');
INSERT INTO searchrecords VALUES ('1036', '白萝卜', '2016-03-24 17:55:18', '0', '');
INSERT INTO searchrecords VALUES ('1037', '白萝卜', '2016-03-24 17:56:51', '0', '');
INSERT INTO searchrecords VALUES ('1038', '白萝卜', '2016-03-24 18:01:10', '0', '');
INSERT INTO searchrecords VALUES ('1039', '白萝卜', '2016-03-24 18:02:03', '0', '');
INSERT INTO searchrecords VALUES ('1040', '白萝卜', '2016-03-24 18:08:40', '0', '');
INSERT INTO searchrecords VALUES ('1041', '白萝卜', '2016-03-24 18:09:28', '0', '');
INSERT INTO searchrecords VALUES ('1042', '白萝卜', '2016-03-24 18:09:29', '0', '');
INSERT INTO searchrecords VALUES ('1043', '白萝卜', '2016-03-24 18:09:56', '0', '');
INSERT INTO searchrecords VALUES ('1044', '胡萝卜', '2016-03-24 18:09:59', '0', '');
INSERT INTO searchrecords VALUES ('1045', '小白菜', '2016-03-24 18:10:13', '0', '');
INSERT INTO searchrecords VALUES ('1046', '菜心', '2016-03-24 18:10:22', '0', '');
INSERT INTO searchrecords VALUES ('1047', '白萝卜', '2016-03-24 18:10:43', '0', '');
INSERT INTO searchrecords VALUES ('1048', '白萝卜', '2016-03-24 18:11:25', '0', '');
INSERT INTO searchrecords VALUES ('1049', '白萝卜', '2016-03-24 18:11:41', '0', '');
INSERT INTO searchrecords VALUES ('1050', '白萝卜', '2016-03-24 18:14:08', '0', '');
INSERT INTO searchrecords VALUES ('1051', '白萝卜', '2016-03-24 18:14:40', '0', '');
INSERT INTO searchrecords VALUES ('1052', '白萝卜', '2016-03-24 18:17:53', '0', '');
INSERT INTO searchrecords VALUES ('1053', '白萝卜', '2016-03-24 18:18:04', '0', '');
INSERT INTO searchrecords VALUES ('1054', '白萝卜', '2016-03-24 18:33:12', '0', '');
INSERT INTO searchrecords VALUES ('1055', '白萝卜', '2016-03-25 08:56:00', '0', '');
INSERT INTO searchrecords VALUES ('1056', '胡萝卜', '2016-03-25 10:26:38', '0', '');
INSERT INTO searchrecords VALUES ('1057', '白萝卜', '2016-03-25 10:27:17', '0', '');
INSERT INTO searchrecords VALUES ('1058', '白萝卜', '2016-03-25 10:58:35', '0', '');
INSERT INTO searchrecords VALUES ('1059', '白萝卜', '2016-03-25 12:52:46', '0', '');
INSERT INTO searchrecords VALUES ('1060', '西瓜', '2016-03-25 14:36:57', '0', '');
INSERT INTO searchrecords VALUES ('1061', '西瓜', '2016-03-25 14:37:26', '0', '');
INSERT INTO searchrecords VALUES ('1062', '白萝卜', '2016-03-25 14:37:48', '0', '');
INSERT INTO searchrecords VALUES ('1063', '西瓜', '2016-03-25 14:47:57', '0', '');
INSERT INTO searchrecords VALUES ('1064', '西瓜', '2016-03-25 14:52:27', '0', '');
INSERT INTO searchrecords VALUES ('1065', '西瓜', '2016-03-25 14:55:10', '0', '');
INSERT INTO searchrecords VALUES ('1066', '西瓜', '2016-03-25 15:00:14', '0', '');
INSERT INTO searchrecords VALUES ('1067', '白萝卜', '2016-03-25 15:00:53', '0', '');
INSERT INTO searchrecords VALUES ('1068', '白萝卜', '2016-03-25 15:01:53', '0', '');
INSERT INTO searchrecords VALUES ('1069', '西瓜', '2016-03-25 15:16:49', '0', '');
INSERT INTO searchrecords VALUES ('1070', '白萝卜', '2016-03-25 15:18:02', '0', '');
INSERT INTO searchrecords VALUES ('1071', '西瓜', '2016-03-25 15:18:59', '0', '');
INSERT INTO searchrecords VALUES ('1072', '西瓜', '2016-03-25 15:25:14', '0', '');
INSERT INTO searchrecords VALUES ('1073', '西瓜', '2016-03-25 15:31:22', '0', '');
INSERT INTO searchrecords VALUES ('1074', '西瓜', '2016-03-25 16:05:48', '0', '');
INSERT INTO searchrecords VALUES ('1075', '西瓜', '2016-03-25 16:33:47', '0', '');
INSERT INTO searchrecords VALUES ('1076', '白萝卜', '2016-03-25 16:38:05', '0', '');
INSERT INTO searchrecords VALUES ('1077', '白萝卜', '2016-03-25 16:41:34', '0', '');
INSERT INTO searchrecords VALUES ('1078', '菜心', '2016-03-25 16:41:46', '0', '');
INSERT INTO searchrecords VALUES ('1079', '白萝卜', '2016-03-25 16:48:01', '0', '');
INSERT INTO searchrecords VALUES ('1080', '白萝卜', '2016-03-25 16:48:05', '0', '');
INSERT INTO searchrecords VALUES ('1081', '白萝卜', '2016-03-25 16:49:43', '0', '');
INSERT INTO searchrecords VALUES ('1082', '西瓜', '2016-03-25 16:49:54', '0', '');
INSERT INTO searchrecords VALUES ('1083', '白萝卜', '2016-03-25 16:52:25', '0', '');
INSERT INTO searchrecords VALUES ('1084', '西瓜', '2016-03-25 17:36:26', '0', '');
INSERT INTO searchrecords VALUES ('1085', '西瓜', '2016-03-25 17:58:32', '0', '');
INSERT INTO searchrecords VALUES ('1086', '西瓜', '2016-03-25 17:59:10', '0', '');
INSERT INTO searchrecords VALUES ('1087', '青椒', '2016-03-25 17:59:14', '0', '');
INSERT INTO searchrecords VALUES ('1088', '茄子', '2016-03-25 17:59:19', '0', '');
INSERT INTO searchrecords VALUES ('1089', '白萝卜', '2016-03-25 18:02:13', '0', '');
INSERT INTO searchrecords VALUES ('1090', '胡萝卜', '2016-03-25 18:04:20', '0', '');
INSERT INTO searchrecords VALUES ('1091', '白萝卜', '2016-03-25 18:05:26', '0', '');
INSERT INTO searchrecords VALUES ('1092', '胡萝卜', '2016-03-25 18:05:29', '0', '');
INSERT INTO searchrecords VALUES ('1093', '胡萝卜', '2016-03-25 18:06:26', '0', '');
INSERT INTO searchrecords VALUES ('1094', '白萝卜', '2016-03-25 18:07:09', '0', '');
INSERT INTO searchrecords VALUES ('1095', '胡萝卜', '2016-03-25 18:08:20', '0', '');
INSERT INTO searchrecords VALUES ('1096', '胡萝卜', '2016-03-25 18:09:59', '0', '');
INSERT INTO searchrecords VALUES ('1097', '西瓜', '2016-03-27 22:35:28', '0', '');
INSERT INTO searchrecords VALUES ('1098', '白萝卜', '2016-03-27 22:36:27', '0', '');
INSERT INTO searchrecords VALUES ('1099', '西瓜', '2016-03-28 10:36:12', '0', '');
INSERT INTO searchrecords VALUES ('1100', '白萝卜', '2016-03-28 10:58:29', '0', '');
INSERT INTO searchrecords VALUES ('1101', '白萝卜', '2016-03-28 11:12:56', '0', '');
INSERT INTO searchrecords VALUES ('1102', '胡萝卜', '2016-03-28 11:13:03', '0', '');
INSERT INTO searchrecords VALUES ('1103', '白萝卜', '2016-03-28 11:13:59', '0', '');
INSERT INTO searchrecords VALUES ('1104', '白萝卜', '2016-03-28 11:15:54', '0', '');
INSERT INTO searchrecords VALUES ('1105', '白萝卜', '2016-03-28 11:17:25', '0', '');
INSERT INTO searchrecords VALUES ('1106', '白萝卜', '2016-03-28 11:18:49', '0', '');
INSERT INTO searchrecords VALUES ('1107', '胡萝卜', '2016-03-28 11:19:21', '0', '');
INSERT INTO searchrecords VALUES ('1108', '白萝卜', '2016-03-28 11:19:41', '0', '');
INSERT INTO searchrecords VALUES ('1109', '胡萝卜', '2016-03-28 11:21:33', '0', '');
INSERT INTO searchrecords VALUES ('1110', '胡萝卜', '2016-03-28 11:29:56', '0', '');
INSERT INTO searchrecords VALUES ('1111', '白萝卜', '2016-03-28 11:32:20', '0', '');
INSERT INTO searchrecords VALUES ('1112', '胡萝卜', '2016-03-28 11:32:51', '0', '');
INSERT INTO searchrecords VALUES ('1113', '白萝卜', '2016-03-28 11:33:33', '0', '');
INSERT INTO searchrecords VALUES ('1114', '白萝卜', '2016-03-28 11:33:58', '0', '');
INSERT INTO searchrecords VALUES ('1115', '胡萝卜', '2016-03-28 11:34:00', '0', '');
INSERT INTO searchrecords VALUES ('1116', '白萝卜', '2016-03-28 11:34:18', '0', '');
INSERT INTO searchrecords VALUES ('1117', '白萝卜', '2016-03-28 11:38:07', '0', '');
INSERT INTO searchrecords VALUES ('1118', '白萝卜', '2016-03-28 11:39:50', '0', '');
INSERT INTO searchrecords VALUES ('1119', '白萝卜', '2016-03-28 11:40:09', '0', '');
INSERT INTO searchrecords VALUES ('1120', '白萝卜', '2016-03-28 11:40:30', '0', '');
INSERT INTO searchrecords VALUES ('1121', '白萝卜', '2016-03-28 12:03:41', '0', '');
INSERT INTO searchrecords VALUES ('1122', '白萝卜', '2016-03-28 13:44:43', '0', '');
INSERT INTO searchrecords VALUES ('1123', '胡萝卜', '2016-03-28 13:44:46', '0', '');
INSERT INTO searchrecords VALUES ('1124', '胡萝卜', '2016-03-28 13:44:54', '0', '');
INSERT INTO searchrecords VALUES ('1125', '小白菜', '2016-03-28 13:47:28', '0', '');
INSERT INTO searchrecords VALUES ('1126', '菜心', '2016-03-28 13:47:46', '0', '');
INSERT INTO searchrecords VALUES ('1127', '菜心', '2016-03-28 13:48:05', '0', '');
INSERT INTO searchrecords VALUES ('1128', '白萝卜', '2016-03-28 13:52:07', '0', '');
INSERT INTO searchrecords VALUES ('1129', '白萝卜', '2016-03-28 14:35:20', '0', '');
INSERT INTO searchrecords VALUES ('1130', '白萝卜', '2016-03-28 14:36:21', '0', '');
INSERT INTO searchrecords VALUES ('1131', '测试菜', '2016-03-28 14:46:26', '0', '');
INSERT INTO searchrecords VALUES ('1132', '番茄', '2016-03-28 14:46:33', '0', '');
INSERT INTO searchrecords VALUES ('1133', '油麦菜', '2016-03-28 14:46:39', '0', '');
INSERT INTO searchrecords VALUES ('1134', '小白菜', '2016-03-28 14:46:55', '0', '');
INSERT INTO searchrecords VALUES ('1135', '小白菜', '2016-03-28 14:56:29', '0', '');
INSERT INTO searchrecords VALUES ('1136', '白菜', '2016-03-28 14:56:51', '0', '');
INSERT INTO searchrecords VALUES ('1137', '包菜', '2016-03-28 14:57:02', '0', '');
INSERT INTO searchrecords VALUES ('1138', '白萝卜', '2016-03-28 14:57:08', '0', '');
INSERT INTO searchrecords VALUES ('1139', '白萝卜', '2016-03-28 16:09:00', '0', '');
INSERT INTO searchrecords VALUES ('1140', '胡萝卜', '2016-03-28 16:09:05', '0', '');
INSERT INTO searchrecords VALUES ('1141', '玉米', '2016-03-28 16:09:12', '0', '');
INSERT INTO searchrecords VALUES ('1142', '番茄', '2016-03-28 16:09:14', '0', '');
INSERT INTO searchrecords VALUES ('1143', '测试菜', '2016-03-28 16:09:18', '0', '');
INSERT INTO searchrecords VALUES ('1144', '小白菜', '2016-03-28 16:09:23', '0', '');
INSERT INTO searchrecords VALUES ('1145', '白萝卜', '2016-03-29 10:00:56', '0', '');
INSERT INTO searchrecords VALUES ('1146', '白萝卜', '2016-03-29 10:00:57', '0', '');
INSERT INTO searchrecords VALUES ('1147', '白萝卜', '2016-03-29 10:41:49', '0', '');
INSERT INTO searchrecords VALUES ('1148', '白萝卜', '2016-03-29 11:05:12', '0', '');
INSERT INTO searchrecords VALUES ('1149', '包菜', '2016-03-29 11:05:19', '0', '');
INSERT INTO searchrecords VALUES ('1150', '娃娃菜', '2016-03-29 11:05:25', '0', '');
INSERT INTO searchrecords VALUES ('1151', '土豆', '2016-03-29 11:05:29', '0', '');
INSERT INTO searchrecords VALUES ('1152', '菠菜', '2016-03-29 11:05:33', '0', '');
INSERT INTO searchrecords VALUES ('1153', '白萝卜', '2016-03-29 11:32:55', '0', '');
INSERT INTO searchrecords VALUES ('1154', '白萝卜', '2016-03-29 11:32:57', '0', '');
INSERT INTO searchrecords VALUES ('1155', '白萝卜', '2016-03-29 11:50:14', '0', '');
INSERT INTO searchrecords VALUES ('1156', '白萝卜', '2016-03-29 11:50:20', '0', '');
INSERT INTO searchrecords VALUES ('1157', '我', '2016-03-29 13:35:27', '0', '');
INSERT INTO searchrecords VALUES ('1158', 'hhhhh', '2016-03-29 14:04:26', '0', '');
INSERT INTO searchrecords VALUES ('1159', '白萝卜', '2016-03-29 14:21:17', '0', '');
INSERT INTO searchrecords VALUES ('1160', '胡萝卜', '2016-03-29 14:21:20', '0', '');
INSERT INTO searchrecords VALUES ('1161', '测试菜', '2016-03-29 14:21:33', '0', '');
INSERT INTO searchrecords VALUES ('1162', '菜心', '2016-03-29 14:21:42', '0', '');
INSERT INTO searchrecords VALUES ('1163', '白萝卜', '2016-03-29 15:03:15', '0', '');
INSERT INTO searchrecords VALUES ('1164', '胡萝卜', '2016-03-29 15:03:19', '0', '');
INSERT INTO searchrecords VALUES ('1165', '白萝卜', '2016-03-29 15:06:43', '0', '');
INSERT INTO searchrecords VALUES ('1166', '娃娃菜', '2016-03-29 15:06:49', '0', '');
INSERT INTO searchrecords VALUES ('1167', '白萝卜', '2016-03-29 15:07:07', '0', '');
INSERT INTO searchrecords VALUES ('1168', '白萝卜', '2016-03-29 15:36:54', '0', '');
INSERT INTO searchrecords VALUES ('1169', '胡萝卜', '2016-03-29 15:36:56', '0', '');
INSERT INTO searchrecords VALUES ('1170', '菜心', '2016-03-29 15:37:09', '0', '');
INSERT INTO searchrecords VALUES ('1171', '胡萝卜', '2016-03-29 15:38:27', '0', '');
INSERT INTO searchrecords VALUES ('1172', '油麦菜', '2016-03-29 15:38:29', '0', '');
INSERT INTO searchrecords VALUES ('1173', '白萝卜', '2016-03-29 15:38:32', '0', '');
INSERT INTO searchrecords VALUES ('1174', '玉米', '2016-03-29 15:39:49', '0', '');
INSERT INTO searchrecords VALUES ('1175', '胡萝卜', '2016-03-29 15:38:44', '0', '');
INSERT INTO searchrecords VALUES ('1176', '测试菜', '2016-03-29 15:40:00', '0', '');
INSERT INTO searchrecords VALUES ('1177', '包菜', '2016-03-29 15:40:04', '0', '');
INSERT INTO searchrecords VALUES ('1178', '白萝卜', '2016-03-29 15:40:09', '0', '');
INSERT INTO searchrecords VALUES ('1179', '白萝卜', '2016-03-29 15:40:43', '0', '');
INSERT INTO searchrecords VALUES ('1180', '白萝卜', '2016-03-29 15:41:48', '0', '');
INSERT INTO searchrecords VALUES ('1181', '白萝卜', '2016-03-29 15:41:58', '0', '');
INSERT INTO searchrecords VALUES ('1182', '胡萝卜', '2016-03-29 15:42:02', '0', '');
INSERT INTO searchrecords VALUES ('1183', '油麦菜', '2016-03-29 15:42:06', '0', '');
INSERT INTO searchrecords VALUES ('1184', '菜心', '2016-03-29 15:42:09', '0', '');
INSERT INTO searchrecords VALUES ('1185', '白萝卜', '2016-03-29 15:43:42', '0', '');
INSERT INTO searchrecords VALUES ('1186', '白萝卜', '2016-03-29 15:45:44', '0', '');
INSERT INTO searchrecords VALUES ('1187', '白萝卜', '2016-03-29 15:47:54', '0', '');
INSERT INTO searchrecords VALUES ('1188', '菜心', '2016-03-29 15:47:52', '0', '');
INSERT INTO searchrecords VALUES ('1189', '油麦菜', '2016-03-29 15:47:55', '0', '');
INSERT INTO searchrecords VALUES ('1190', '胡萝卜', '2016-03-29 15:47:59', '0', '');
INSERT INTO searchrecords VALUES ('1191', '胡萝卜', '2016-03-29 15:49:48', '0', '');
INSERT INTO searchrecords VALUES ('1192', '白萝卜', '2016-03-29 15:49:52', '0', '');
INSERT INTO searchrecords VALUES ('1193', '白萝卜', '2016-03-29 15:54:07', '0', '');
INSERT INTO searchrecords VALUES ('1194', '胡萝卜', '2016-03-29 15:54:11', '0', '');
INSERT INTO searchrecords VALUES ('1195', '白萝卜', '2016-03-29 15:56:06', '0', '');
INSERT INTO searchrecords VALUES ('1196', '胡萝卜', '2016-03-29 15:56:11', '0', '');
INSERT INTO searchrecords VALUES ('1197', '白萝卜', '2016-03-29 16:02:37', '0', '');
INSERT INTO searchrecords VALUES ('1198', '白萝卜', '2016-03-29 16:02:32', '0', '');
INSERT INTO searchrecords VALUES ('1199', '菜心', '2016-03-29 16:02:38', '0', '');
INSERT INTO searchrecords VALUES ('1200', '白萝卜', '2016-03-29 16:05:28', '0', '');
INSERT INTO searchrecords VALUES ('1201', '胡萝卜', '2016-03-29 16:05:32', '0', '');
INSERT INTO searchrecords VALUES ('1202', '菜心', '2016-03-29 16:05:37', '0', '');
INSERT INTO searchrecords VALUES ('1203', '白萝卜', '2016-03-29 16:08:32', '0', '');
INSERT INTO searchrecords VALUES ('1204', '胡萝卜', '2016-03-29 16:08:36', '0', '');
INSERT INTO searchrecords VALUES ('1205', '菜心', '2016-03-29 16:08:41', '0', '');
INSERT INTO searchrecords VALUES ('1206', '白萝卜', '2016-03-30 09:52:59', '0', '');
INSERT INTO searchrecords VALUES ('1207', '胡萝卜', '2016-03-30 09:53:01', '0', '');
INSERT INTO searchrecords VALUES ('1208', '白萝卜', '2016-03-30 10:25:58', '0', '');
INSERT INTO searchrecords VALUES ('1209', '胡萝卜', '2016-03-30 10:26:17', '0', '');
INSERT INTO searchrecords VALUES ('1210', '白萝卜', '2016-03-30 10:36:50', '0', '');
INSERT INTO searchrecords VALUES ('1211', '白萝卜', '2016-03-30 10:40:16', '0', '');
INSERT INTO searchrecords VALUES ('1212', '白萝卜', '2016-03-30 10:58:29', '0', '');
INSERT INTO searchrecords VALUES ('1213', '白萝卜', '2016-03-30 11:01:38', '0', '');
INSERT INTO searchrecords VALUES ('1214', '???', '2016-03-30 11:12:12', '0', '');
INSERT INTO searchrecords VALUES ('1215', '???', '2016-03-30 11:12:15', '0', '');
INSERT INTO searchrecords VALUES ('1216', '???', '2016-03-30 11:12:23', '0', '');
INSERT INTO searchrecords VALUES ('1217', '白萝卜', '2016-03-30 11:12:53', '0', '');
INSERT INTO searchrecords VALUES ('1218', '???', '2016-03-30 11:14:45', '0', '');
INSERT INTO searchrecords VALUES ('1219', '???', '2016-03-30 11:14:51', '0', '');
INSERT INTO searchrecords VALUES ('1220', '???', '2016-03-30 11:17:22', '0', '');
INSERT INTO searchrecords VALUES ('1221', '???', '2016-03-30 11:17:56', '0', '');
INSERT INTO searchrecords VALUES ('1222', '???', '2016-03-30 11:17:56', '0', '');
INSERT INTO searchrecords VALUES ('1223', '???', '2016-03-30 11:17:56', '0', '');
INSERT INTO searchrecords VALUES ('1224', '???', '2016-03-30 11:17:58', '0', '');
INSERT INTO searchrecords VALUES ('1225', '???', '2016-03-30 11:17:59', '0', '');
INSERT INTO searchrecords VALUES ('1226', '???', '2016-03-30 11:18:04', '0', '');
INSERT INTO searchrecords VALUES ('1227', '???', '2016-03-30 11:18:06', '0', '');
INSERT INTO searchrecords VALUES ('1228', '???', '2016-03-30 11:23:10', '0', '');
INSERT INTO searchrecords VALUES ('1229', '???', '2016-03-30 11:31:50', '0', '');
INSERT INTO searchrecords VALUES ('1230', '白萝卜', '2016-03-30 11:33:08', '0', '');
INSERT INTO searchrecords VALUES ('1231', '白萝卜', '2016-03-30 11:37:53', '0', '');
INSERT INTO searchrecords VALUES ('1232', '白萝卜', '2016-03-30 11:38:12', '0', '');
INSERT INTO searchrecords VALUES ('1233', '白萝卜', '2016-03-30 11:38:22', '0', '');
INSERT INTO searchrecords VALUES ('1234', '白萝卜', '2016-03-30 11:37:18', '0', '');
INSERT INTO searchrecords VALUES ('1235', '白萝卜', '2016-03-30 11:46:33', '0', '');
INSERT INTO searchrecords VALUES ('1236', '白萝卜', '2016-03-30 11:57:54', '0', '');
INSERT INTO searchrecords VALUES ('1237', '白萝卜', '2016-03-30 12:00:39', '0', '');
INSERT INTO searchrecords VALUES ('1238', '白萝卜', '2016-03-30 12:03:55', '0', '');
INSERT INTO searchrecords VALUES ('1239', 'ç½èå', '2016-03-30 14:08:45', '0', '');
INSERT INTO searchrecords VALUES ('1240', 'è¡èå', '2016-03-30 14:08:47', '0', '');
INSERT INTO searchrecords VALUES ('1241', 'æµè¯åå2', '2016-03-30 14:09:12', '0', '');
INSERT INTO searchrecords VALUES ('1242', 'çç±³', '2016-03-30 14:09:15', '0', '');
INSERT INTO searchrecords VALUES ('1243', 'çªè', '2016-03-30 14:09:18', '0', '');
INSERT INTO searchrecords VALUES ('1244', 'èå¿', '2016-03-30 14:09:24', '0', '');
INSERT INTO searchrecords VALUES ('1245', '白萝卜', '2016-03-30 14:14:10', '0', '');
INSERT INTO searchrecords VALUES ('1246', '白萝卜', '2016-03-30 14:14:34', '0', '');
INSERT INTO searchrecords VALUES ('1247', '白萝卜', '2016-03-30 14:14:45', '0', '');
INSERT INTO searchrecords VALUES ('1248', '白萝卜', '2016-03-30 14:15:23', '0', '');
INSERT INTO searchrecords VALUES ('1249', '白萝卜', '2016-03-30 14:17:29', '0', '');
INSERT INTO searchrecords VALUES ('1250', '白萝卜', '2016-03-30 14:17:49', '0', '');
INSERT INTO searchrecords VALUES ('1251', 'æ°å¢æµè¯åå3', '2016-03-30 14:16:52', '0', '');
INSERT INTO searchrecords VALUES ('1252', 'èå¿', '2016-03-30 14:16:56', '0', '');
INSERT INTO searchrecords VALUES ('1253', 'å°ç½è', '2016-03-30 14:17:01', '0', '');
INSERT INTO searchrecords VALUES ('1254', '白萝卜', '2016-03-30 14:18:30', '0', '');
INSERT INTO searchrecords VALUES ('1255', '白萝卜', '2016-03-30 14:18:35', '0', '');
INSERT INTO searchrecords VALUES ('1256', '白萝卜', '2016-03-30 14:18:36', '0', '');
INSERT INTO searchrecords VALUES ('1257', '白萝卜', '2016-03-30 14:18:42', '0', '');
INSERT INTO searchrecords VALUES ('1258', '白萝卜', '2016-03-30 14:20:51', '0', '');
INSERT INTO searchrecords VALUES ('1259', '白萝卜', '2016-03-30 14:21:02', '0', '');
INSERT INTO searchrecords VALUES ('1260', '白萝卜', '2016-03-30 14:21:02', '0', '');
INSERT INTO searchrecords VALUES ('1261', '白萝卜', '2016-03-30 14:23:27', '0', '');
INSERT INTO searchrecords VALUES ('1262', '白萝卜', '2016-03-30 14:25:57', '0', '');
INSERT INTO searchrecords VALUES ('1263', 'ç½èå', '2016-03-30 14:28:42', '0', '');
INSERT INTO searchrecords VALUES ('1264', 'è¡èå', '2016-03-30 14:28:46', '0', '');
INSERT INTO searchrecords VALUES ('1265', 'ç½èå', '2016-03-30 14:29:25', '0', '');
INSERT INTO searchrecords VALUES ('1266', 'ç½èå', '2016-03-30 14:29:28', '0', '');
INSERT INTO searchrecords VALUES ('1267', 'è¡èå', '2016-03-30 14:29:30', '0', '');
INSERT INTO searchrecords VALUES ('1268', 'è¡èå', '2016-03-30 14:29:31', '0', '');
INSERT INTO searchrecords VALUES ('1269', 'æ°å¢æµè¯åå3', '2016-03-30 14:29:35', '0', '');
INSERT INTO searchrecords VALUES ('1270', 'å°ç½è', '2016-03-30 14:29:36', '0', '');
INSERT INTO searchrecords VALUES ('1271', 'æµè¯åå2', '2016-03-30 14:29:37', '0', '');
INSERT INTO searchrecords VALUES ('1272', 'æµè¯è', '2016-03-30 14:29:39', '0', '');
INSERT INTO searchrecords VALUES ('1273', 'æµè¯åå1', '2016-03-30 14:29:43', '0', '');
INSERT INTO searchrecords VALUES ('1274', 'æµè¯è', '2016-03-30 14:29:46', '0', '');
INSERT INTO searchrecords VALUES ('1275', 'æµè¯è', '2016-03-30 14:29:50', '0', '');
INSERT INTO searchrecords VALUES ('1276', 'ç¯ç¬¼æ¤', '2016-03-30 14:29:52', '0', '');
INSERT INTO searchrecords VALUES ('1277', 'ç½èå', '2016-03-30 14:29:53', '0', '');
INSERT INTO searchrecords VALUES ('1278', 'ç½èå', '2016-03-30 14:30:00', '0', '');
INSERT INTO searchrecords VALUES ('1279', 'è¡èå', '2016-03-30 14:30:02', '0', '');
INSERT INTO searchrecords VALUES ('1280', 'è¡èå', '2016-03-30 14:30:11', '0', '');
INSERT INTO searchrecords VALUES ('1281', 'ç½èå', '2016-03-30 14:30:14', '0', '');
INSERT INTO searchrecords VALUES ('1282', 'çç±³', '2016-03-30 14:30:32', '0', '');
INSERT INTO searchrecords VALUES ('1283', 'è¡èå', '2016-03-30 14:31:09', '0', '');
INSERT INTO searchrecords VALUES ('1284', 'è¡èå', '2016-03-30 14:31:40', '0', '');
INSERT INTO searchrecords VALUES ('1285', '白萝卜', '2016-03-30 14:33:20', '0', '');
INSERT INTO searchrecords VALUES ('1286', '小白菜', '2016-03-30 14:33:47', '0', '');
INSERT INTO searchrecords VALUES ('1287', '白萝卜', '2016-03-30 14:34:32', '0', '');
INSERT INTO searchrecords VALUES ('1288', '白萝卜', '2016-03-30 14:34:38', '0', '');
INSERT INTO searchrecords VALUES ('1289', '白萝卜', '2016-03-30 14:46:19', '0', '');
INSERT INTO searchrecords VALUES ('1290', '胡萝卜', '2016-03-30 14:49:30', '0', '');
INSERT INTO searchrecords VALUES ('1291', '白萝卜', '2016-03-30 14:52:50', '0', '');
INSERT INTO searchrecords VALUES ('1292', '白萝卜', '2016-03-30 15:05:29', '0', '');
INSERT INTO searchrecords VALUES ('1293', '白萝卜', '2016-03-30 15:44:23', '0', '');
INSERT INTO searchrecords VALUES ('1294', '小白菜', '2016-03-30 15:44:31', '0', '');
INSERT INTO searchrecords VALUES ('1295', '小白菜', '2016-03-30 15:44:39', '0', '');
INSERT INTO searchrecords VALUES ('1296', '小白菜', '2016-03-30 15:44:41', '0', '');
INSERT INTO searchrecords VALUES ('1297', '商品测试4', '2016-03-30 15:45:47', '0', '');
INSERT INTO searchrecords VALUES ('1298', '商品测试4', '2016-03-30 15:45:52', '0', '');
INSERT INTO searchrecords VALUES ('1299', '商品测试4', '2016-03-30 15:46:45', '0', '');
INSERT INTO searchrecords VALUES ('1300', '白萝卜', '2016-03-30 15:48:09', '0', '');
INSERT INTO searchrecords VALUES ('1301', '白萝卜', '2016-03-30 15:53:07', '0', '');
INSERT INTO searchrecords VALUES ('1302', '胡萝卜', '2016-03-30 15:55:33', '0', '');
INSERT INTO searchrecords VALUES ('1303', '胡萝卜', '2016-03-30 15:55:40', '0', '');
INSERT INTO searchrecords VALUES ('1304', '商品测试4', '2016-03-30 15:54:36', '0', '');
INSERT INTO searchrecords VALUES ('1305', '胡萝卜', '2016-03-30 15:56:17', '0', '');
INSERT INTO searchrecords VALUES ('1306', '胡萝卜', '2016-03-30 15:56:19', '0', '');
INSERT INTO searchrecords VALUES ('1307', '胡萝卜', '2016-03-30 15:56:22', '0', '');
INSERT INTO searchrecords VALUES ('1308', '胡萝卜', '2016-03-30 15:56:27', '0', '');
INSERT INTO searchrecords VALUES ('1309', '新增商品测试3', '2016-03-30 15:56:29', '0', '');
INSERT INTO searchrecords VALUES ('1310', '胡萝卜', '2016-03-30 15:56:34', '0', '');
INSERT INTO searchrecords VALUES ('1311', '商品测试4', '2016-03-30 15:57:58', '0', '');
INSERT INTO searchrecords VALUES ('1312', '商品测试4', '2016-03-30 15:58:03', '0', '');
INSERT INTO searchrecords VALUES ('1313', '油麦菜', '2016-03-30 15:58:12', '0', '');
INSERT INTO searchrecords VALUES ('1314', '番茄', '2016-03-30 15:58:18', '0', '');
INSERT INTO searchrecords VALUES ('1315', '包菜', '2016-03-30 15:58:21', '0', '');
INSERT INTO searchrecords VALUES ('1316', '菠菜', '2016-03-30 15:58:25', '0', '');
INSERT INTO searchrecords VALUES ('1317', '商品测试4', '2016-03-30 15:58:34', '0', '');
INSERT INTO searchrecords VALUES ('1318', '番茄', '2016-03-30 15:58:47', '0', '');
INSERT INTO searchrecords VALUES ('1319', '白萝卜', '2016-03-30 15:59:04', '0', '');
INSERT INTO searchrecords VALUES ('1320', '白萝卜', '2016-03-30 15:59:07', '0', '');
INSERT INTO searchrecords VALUES ('1321', '白萝卜', '2016-03-30 15:59:09', '0', '');
INSERT INTO searchrecords VALUES ('1322', '西瓜', '2016-03-30 15:59:28', '0', '');
INSERT INTO searchrecords VALUES ('1323', '白萝卜', '2016-03-30 16:02:00', '0', '');
INSERT INTO searchrecords VALUES ('1324', '白萝卜', '2016-03-30 16:02:14', '0', '');
INSERT INTO searchrecords VALUES ('1325', '白萝卜', '2016-03-30 16:02:19', '0', '');
INSERT INTO searchrecords VALUES ('1326', '白萝卜', '2016-03-30 16:02:26', '0', '');
INSERT INTO searchrecords VALUES ('1327', '白萝卜', '2016-03-30 16:05:12', '0', '');
INSERT INTO searchrecords VALUES ('1328', '白萝卜', '2016-03-30 16:05:54', '0', '');
INSERT INTO searchrecords VALUES ('1329', '白萝卜', '2016-03-30 16:06:24', '0', '');
INSERT INTO searchrecords VALUES ('1330', '白萝卜', '2016-03-30 16:06:25', '0', '');
INSERT INTO searchrecords VALUES ('1331', '白萝卜', '2016-03-30 16:06:37', '0', '');
INSERT INTO searchrecords VALUES ('1332', '白萝卜', '2016-03-30 16:06:40', '0', '');
INSERT INTO searchrecords VALUES ('1333', '白萝卜', '2016-03-30 16:06:41', '0', '');
INSERT INTO searchrecords VALUES ('1334', '胡萝卜', '2016-03-30 16:07:10', '0', '');
INSERT INTO searchrecords VALUES ('1335', '白萝卜', '2016-03-30 16:07:15', '0', '');
INSERT INTO searchrecords VALUES ('1336', '胡萝卜', '2016-03-30 16:07:22', '0', '');
INSERT INTO searchrecords VALUES ('1337', '白萝卜', '2016-03-30 16:07:42', '0', '');
INSERT INTO searchrecords VALUES ('1338', '白萝卜', '2016-03-30 16:07:45', '0', '');
INSERT INTO searchrecords VALUES ('1339', '白萝卜', '2016-03-30 16:07:46', '0', '');
INSERT INTO searchrecords VALUES ('1340', '白萝卜', '2016-03-30 16:08:18', '0', '');
INSERT INTO searchrecords VALUES ('1341', '胡萝卜', '2016-03-30 16:08:22', '0', '');
INSERT INTO searchrecords VALUES ('1342', '番茄', '2016-03-30 16:08:31', '0', '');
INSERT INTO searchrecords VALUES ('1343', '胡萝卜', '2016-03-30 16:09:24', '0', '');
INSERT INTO searchrecords VALUES ('1344', '胡萝卜', '2016-03-30 16:09:26', '0', '');
INSERT INTO searchrecords VALUES ('1345', '胡萝卜', '2016-03-30 16:09:27', '0', '');
INSERT INTO searchrecords VALUES ('1346', '番茄', '2016-03-30 16:09:33', '0', '');
INSERT INTO searchrecords VALUES ('1347', '小白菜', '2016-03-30 16:09:37', '0', '');
INSERT INTO searchrecords VALUES ('1348', '小白菜', '2016-03-30 16:09:38', '0', '');
INSERT INTO searchrecords VALUES ('1349', '小白菜', '2016-03-30 16:09:39', '0', '');
INSERT INTO searchrecords VALUES ('1350', '包菜', '2016-03-30 16:09:56', '0', '');
INSERT INTO searchrecords VALUES ('1351', '包菜', '2016-03-30 16:10:34', '0', '');
INSERT INTO searchrecords VALUES ('1352', '番茄', '2016-03-30 16:11:07', '0', '');
INSERT INTO searchrecords VALUES ('1353', '番茄', '2016-03-30 16:11:16', '0', '');
INSERT INTO searchrecords VALUES ('1354', '土豆', '2016-03-30 16:11:20', '0', '');
INSERT INTO searchrecords VALUES ('1355', '油麦菜', '2016-03-30 16:11:23', '0', '');
INSERT INTO searchrecords VALUES ('1356', '油麦菜', '2016-03-30 16:11:25', '0', '');
INSERT INTO searchrecords VALUES ('1357', '胡萝卜', '2016-03-30 16:11:30', '0', '');
INSERT INTO searchrecords VALUES ('1358', '番茄', '2016-03-30 16:11:44', '0', '');
INSERT INTO searchrecords VALUES ('1359', '白萝卜', '2016-03-30 16:11:49', '0', '');
INSERT INTO searchrecords VALUES ('1360', '白萝卜', '2016-03-30 16:11:57', '0', '');
INSERT INTO searchrecords VALUES ('1361', '玉米', '2016-03-30 16:12:02', '0', '');
INSERT INTO searchrecords VALUES ('1362', '番茄', '2016-03-30 16:12:07', '0', '');
INSERT INTO searchrecords VALUES ('1363', '胡萝卜', '2016-03-30 16:12:13', '0', '');
INSERT INTO searchrecords VALUES ('1364', '胡萝卜', '2016-03-30 16:12:20', '0', '');
INSERT INTO searchrecords VALUES ('1365', '胡萝卜', '2016-03-30 16:12:23', '0', '');
INSERT INTO searchrecords VALUES ('1366', '胡萝卜', '2016-03-30 16:12:31', '0', '');
INSERT INTO searchrecords VALUES ('1367', '白萝卜', '2016-03-30 16:13:17', '0', '');
INSERT INTO searchrecords VALUES ('1368', '白萝卜', '2016-03-30 16:13:22', '0', '');
INSERT INTO searchrecords VALUES ('1369', '白萝卜', '2016-03-30 16:13:27', '0', '');
INSERT INTO searchrecords VALUES ('1370', 'çªè', '2016-03-30 16:23:29', '0', '');
INSERT INTO searchrecords VALUES ('1371', 'ç½èå', '2016-03-30 16:23:35', '0', '');
INSERT INTO searchrecords VALUES ('1372', 'è¡èå', '2016-03-30 16:23:50', '0', '');
INSERT INTO searchrecords VALUES ('1373', '白萝卜', '2016-03-30 16:25:41', '0', '');
INSERT INTO searchrecords VALUES ('1374', '白萝卜', '2016-03-30 16:25:51', '0', '');
INSERT INTO searchrecords VALUES ('1375', '白萝卜', '2016-03-30 16:25:53', '0', '');
INSERT INTO searchrecords VALUES ('1376', '胡萝卜', '2016-03-30 16:26:04', '0', '');
INSERT INTO searchrecords VALUES ('1377', '胡萝卜', '2016-03-30 16:26:05', '0', '');
INSERT INTO searchrecords VALUES ('1378', 'åè', '2016-03-30 16:25:59', '0', '');
INSERT INTO searchrecords VALUES ('1379', 'çªè', '2016-03-30 16:26:02', '0', '');
INSERT INTO searchrecords VALUES ('1380', 'çªè', '2016-03-30 16:26:04', '0', '');
INSERT INTO searchrecords VALUES ('1381', 'ç½èå', '2016-03-30 16:26:07', '0', '');
INSERT INTO searchrecords VALUES ('1382', 'è¡èå', '2016-03-30 16:26:09', '0', '');
INSERT INTO searchrecords VALUES ('1383', 'ç½èå', '2016-03-30 16:26:12', '0', '');
INSERT INTO searchrecords VALUES ('1384', 'åè±', '2016-03-30 16:26:17', '0', '');
INSERT INTO searchrecords VALUES ('1385', 'åè±', '2016-03-30 16:26:22', '0', '');
INSERT INTO searchrecords VALUES ('1386', 'åè±', '2016-03-30 16:26:24', '0', '');
INSERT INTO searchrecords VALUES ('1387', 'åè±', '2016-03-30 16:26:27', '0', '');
INSERT INTO searchrecords VALUES ('1388', 'åè±', '2016-03-30 16:26:32', '0', '');
INSERT INTO searchrecords VALUES ('1389', 'ååæµè¯4', '2016-03-30 16:27:57', '0', '');
INSERT INTO searchrecords VALUES ('1390', 'çªè', '2016-03-30 16:28:00', '0', '');
INSERT INTO searchrecords VALUES ('1391', 'ç½èå', '2016-03-30 16:28:01', '0', '');
INSERT INTO searchrecords VALUES ('1392', 'è¡èå', '2016-03-30 16:28:04', '0', '');
INSERT INTO searchrecords VALUES ('1393', 'çç±³', '2016-03-30 16:29:31', '0', '');
INSERT INTO searchrecords VALUES ('1394', 'çç±³', '2016-03-30 16:29:38', '0', '');
INSERT INTO searchrecords VALUES ('1395', 'çç±³', '2016-03-30 16:29:39', '0', '');
INSERT INTO searchrecords VALUES ('1396', 'çªè', '2016-03-30 16:29:42', '0', '');
INSERT INTO searchrecords VALUES ('1397', 'çªè', '2016-03-30 16:29:42', '0', '');
INSERT INTO searchrecords VALUES ('1398', 'ç½èå', '2016-03-30 16:29:45', '0', '');
INSERT INTO searchrecords VALUES ('1399', 'è¡èå', '2016-03-30 16:29:48', '0', '');
INSERT INTO searchrecords VALUES ('1400', '玉米', '2016-03-30 16:33:15', '0', '');
INSERT INTO searchrecords VALUES ('1401', '番茄', '2016-03-30 16:33:18', '0', '');
INSERT INTO searchrecords VALUES ('1402', '白萝卜', '2016-03-30 16:33:21', '0', '');
INSERT INTO searchrecords VALUES ('1403', '胡萝卜', '2016-03-30 16:33:23', '0', '');
INSERT INTO searchrecords VALUES ('1404', '白萝卜', '2016-03-30 16:33:27', '0', '');
INSERT INTO searchrecords VALUES ('1405', 'ç½èå', '2016-03-30 16:33:20', '0', '');
INSERT INTO searchrecords VALUES ('1406', 'è¡èå', '2016-03-30 16:33:23', '0', '');
INSERT INTO searchrecords VALUES ('1407', '白萝卜', '2016-03-30 16:34:53', '0', '');
INSERT INTO searchrecords VALUES ('1408', '白萝卜', '2016-03-30 16:34:58', '0', '');
INSERT INTO searchrecords VALUES ('1409', '白萝卜', '2016-03-30 16:36:47', '0', '');
INSERT INTO searchrecords VALUES ('1410', '白萝卜', '2016-03-30 16:36:51', '0', '');
INSERT INTO searchrecords VALUES ('1411', '白萝卜', '2016-03-30 16:41:11', '0', '');
INSERT INTO searchrecords VALUES ('1412', '白萝卜', '2016-03-30 16:41:19', '0', '');
INSERT INTO searchrecords VALUES ('1413', '白萝卜', '2016-03-30 16:41:28', '0', '');
INSERT INTO searchrecords VALUES ('1414', '白萝卜', '2016-03-30 16:41:31', '0', '');
INSERT INTO searchrecords VALUES ('1415', '白萝卜', '2016-03-30 16:41:32', '0', '');
INSERT INTO searchrecords VALUES ('1416', '白萝卜', '2016-03-30 16:41:33', '0', '');
INSERT INTO searchrecords VALUES ('1417', '白萝卜', '2016-03-30 16:41:34', '0', '');
INSERT INTO searchrecords VALUES ('1418', '白萝卜', '2016-03-30 16:41:36', '0', '');
INSERT INTO searchrecords VALUES ('1419', '白萝卜', '2016-03-30 16:41:37', '0', '');
INSERT INTO searchrecords VALUES ('1420', '白萝卜', '2016-03-30 16:41:38', '0', '');
INSERT INTO searchrecords VALUES ('1421', '白萝卜', '2016-03-30 16:41:38', '0', '');
INSERT INTO searchrecords VALUES ('1422', '白萝卜', '2016-03-30 16:41:39', '0', '');
INSERT INTO searchrecords VALUES ('1423', '白萝卜', '2016-03-30 16:41:39', '0', '');
INSERT INTO searchrecords VALUES ('1424', '白萝卜', '2016-03-30 16:41:40', '0', '');
INSERT INTO searchrecords VALUES ('1425', '白萝卜', '2016-03-30 16:42:32', '0', '');
INSERT INTO searchrecords VALUES ('1426', '白萝卜', '2016-03-30 16:43:39', '0', '');
INSERT INTO searchrecords VALUES ('1427', '白萝卜', '2016-03-30 16:43:58', '0', '');
INSERT INTO searchrecords VALUES ('1428', '白萝卜', '2016-03-30 16:44:01', '0', '');
INSERT INTO searchrecords VALUES ('1429', '白萝卜', '2016-03-30 16:44:05', '0', '');
INSERT INTO searchrecords VALUES ('1430', '白萝卜', '2016-03-30 16:44:55', '0', '');
INSERT INTO searchrecords VALUES ('1431', '胡萝卜', '2016-03-30 16:45:36', '0', '');
INSERT INTO searchrecords VALUES ('1432', '胡萝卜', '2016-03-30 16:45:41', '0', '');
INSERT INTO searchrecords VALUES ('1433', '胡萝卜', '2016-03-30 16:48:33', '0', '');
INSERT INTO searchrecords VALUES ('1434', '番茄', '2016-03-30 16:49:45', '0', '');
INSERT INTO searchrecords VALUES ('1435', '番茄', '2016-03-30 16:49:48', '0', '');
INSERT INTO searchrecords VALUES ('1436', '白萝卜', '2016-03-30 16:49:56', '0', '');
INSERT INTO searchrecords VALUES ('1437', '白萝卜', '2016-03-30 16:50:07', '0', '');
INSERT INTO searchrecords VALUES ('1438', '白萝卜', '2016-03-30 16:50:09', '0', '');
INSERT INTO searchrecords VALUES ('1439', '白萝卜', '2016-03-30 16:50:36', '0', '');
INSERT INTO searchrecords VALUES ('1440', '白萝卜', '2016-03-30 16:51:10', '0', '');
INSERT INTO searchrecords VALUES ('1441', '白萝卜', '2016-03-30 16:53:04', '0', '');
INSERT INTO searchrecords VALUES ('1442', '小白菜', '2016-03-30 16:53:10', '0', '');
INSERT INTO searchrecords VALUES ('1443', '小白菜', '2016-03-30 16:53:13', '0', '');
INSERT INTO searchrecords VALUES ('1444', '小白菜', '2016-03-30 16:53:15', '0', '');
INSERT INTO searchrecords VALUES ('1445', '小白菜', '2016-03-30 16:53:22', '0', '');
INSERT INTO searchrecords VALUES ('1446', '商品测试4', '2016-03-30 16:56:50', '0', '');
INSERT INTO searchrecords VALUES ('1447', '土豆', '2016-03-30 17:27:07', '0', '');
INSERT INTO searchrecords VALUES ('1448', '天涯明月刀', '2016-03-30 17:28:42', '0', '');
INSERT INTO searchrecords VALUES ('1449', '麒麟', '2016-03-30 17:29:42', '0', '');
INSERT INTO searchrecords VALUES ('1450', 'çç±³', '2016-03-30 17:41:38', '0', '');
INSERT INTO searchrecords VALUES ('1451', 'è¡èå', '2016-03-30 17:41:49', '0', '');
INSERT INTO searchrecords VALUES ('1452', 'è¡èå', '2016-03-30 17:42:20', '0', '');
INSERT INTO searchrecords VALUES ('1453', 'ç½èå', '2016-03-30 17:59:04', '0', '');
INSERT INTO searchrecords VALUES ('1454', 'å°ç½è', '2016-03-30 17:59:13', '0', '');
INSERT INTO searchrecords VALUES ('1455', 'ç½èå', '2016-03-30 17:59:37', '0', '');
INSERT INTO searchrecords VALUES ('1456', 'ç½èå', '2016-03-30 18:00:33', '0', '');
INSERT INTO searchrecords VALUES ('1457', 'ç½èå', '2016-03-30 18:00:35', '0', '');
INSERT INTO searchrecords VALUES ('1458', 'ååæµè¯4', '2016-03-31 09:26:40', '0', '');
INSERT INTO searchrecords VALUES ('1459', 'çªè', '2016-03-31 09:26:44', '0', '');
INSERT INTO searchrecords VALUES ('1460', '西瓜', '2016-03-31 13:38:44', '0', '');
INSERT INTO searchrecords VALUES ('1461', '娃娃菜', '2016-03-31 13:39:26', '0', '');
INSERT INTO searchrecords VALUES ('1462', '发菜1', '2016-03-31 13:39:29', '0', '');
INSERT INTO searchrecords VALUES ('1463', '西瓜', '2016-03-31 13:39:34', '0', '');
INSERT INTO searchrecords VALUES ('1464', '发菜1', '2016-03-31 13:40:33', '0', '');
INSERT INTO searchrecords VALUES ('1465', '发菜1', '2016-03-31 13:40:49', '0', '');
INSERT INTO searchrecords VALUES ('1466', '西瓜', '2016-03-31 13:40:51', '0', '');
INSERT INTO searchrecords VALUES ('1467', '西瓜', '2016-03-31 13:41:05', '0', '');
INSERT INTO searchrecords VALUES ('1468', '西瓜', '2016-03-31 13:41:44', '0', '');
INSERT INTO searchrecords VALUES ('1469', '娃娃菜', '2016-03-31 13:42:56', '0', '');
INSERT INTO searchrecords VALUES ('1470', '西瓜', '2016-03-31 13:42:59', '0', '');
INSERT INTO searchrecords VALUES ('1471', '西瓜', '2016-03-31 13:48:19', '0', '');
INSERT INTO searchrecords VALUES ('1472', '番茄', '2016-03-31 13:48:35', '0', '');
INSERT INTO searchrecords VALUES ('1473', '西瓜', '2016-03-31 13:48:41', '0', '');
INSERT INTO searchrecords VALUES ('1474', '西瓜', '2016-03-31 13:51:41', '0', '');
INSERT INTO searchrecords VALUES ('1475', '西瓜', '2016-03-31 13:52:55', '0', '');
INSERT INTO searchrecords VALUES ('1476', '西瓜', '2016-03-31 13:54:09', '0', '');
INSERT INTO searchrecords VALUES ('1477', '西瓜', '2016-03-31 14:02:16', '0', '');
INSERT INTO searchrecords VALUES ('1478', '西瓜', '2016-03-31 14:12:08', '0', '');
INSERT INTO searchrecords VALUES ('1479', '西瓜', '2016-03-31 14:12:53', '0', '');
INSERT INTO searchrecords VALUES ('1480', '西瓜', '2016-03-31 14:14:26', '0', '');
INSERT INTO searchrecords VALUES ('1481', '西瓜', '2016-03-31 14:17:35', '0', '');
INSERT INTO searchrecords VALUES ('1482', '西瓜', '2016-03-31 14:18:23', '0', '');
INSERT INTO searchrecords VALUES ('1483', '胡萝卜', '2016-03-31 16:22:05', '0', '');
INSERT INTO searchrecords VALUES ('1484', '包菜', '2016-03-31 17:54:20', '0', '');
INSERT INTO searchrecords VALUES ('1485', '西瓜', '2016-03-31 17:54:32', '0', '');
INSERT INTO searchrecords VALUES ('1486', '土豆', '2016-03-31 17:54:36', '0', '');
INSERT INTO searchrecords VALUES ('1487', '西瓜', '2016-03-31 17:54:48', '0', '');
INSERT INTO searchrecords VALUES ('1488', '包菜', '2016-03-31 17:56:18', '0', '');
INSERT INTO searchrecords VALUES ('1489', '白萝卜', '2016-03-31 17:56:25', '0', '');
INSERT INTO searchrecords VALUES ('1490', '胡萝卜', '2016-03-31 17:56:40', '0', '');
INSERT INTO searchrecords VALUES ('1491', '胡萝卜', '2016-03-31 17:57:51', '0', '');
INSERT INTO searchrecords VALUES ('1492', '白萝卜', '2016-03-31 17:58:07', '0', '');
INSERT INTO searchrecords VALUES ('1493', '白萝卜', '2016-03-31 17:58:08', '0', '');
INSERT INTO searchrecords VALUES ('1494', '白萝卜', '2016-03-31 17:58:10', '0', '');
INSERT INTO searchrecords VALUES ('1495', '白萝卜', '2016-04-01 10:05:53', '0', '');
INSERT INTO searchrecords VALUES ('1496', '油麦菜', '2016-04-01 10:07:46', '0', '');
INSERT INTO searchrecords VALUES ('1497', '番茄', '2016-04-01 10:08:16', '0', '');
INSERT INTO searchrecords VALUES ('1498', '胡萝卜', '2016-04-01 10:08:27', '0', '');
INSERT INTO searchrecords VALUES ('1499', 'å°ç½è', '2016-04-01 10:15:02', '0', '');
INSERT INTO searchrecords VALUES ('1500', 'é»è±', '2016-04-01 10:15:17', '0', '');
INSERT INTO searchrecords VALUES ('1501', 'å°ç½è', '2016-04-06 15:19:59', '0', '');
INSERT INTO searchrecords VALUES ('1502', 'Hhjjjjnbbnnnnbvvvc', '2016-04-07 18:04:42', '0', '');
INSERT INTO searchrecords VALUES ('1503', 'Hhjjjjnbbnnnnbvvvc', '2016-04-07 18:05:59', '0', '');
INSERT INTO searchrecords VALUES ('1504', 'ç½èå', '2016-04-08 09:17:00', '0', '');
INSERT INTO searchrecords VALUES ('1505', 'èå¿', '2016-04-08 09:17:24', '0', '');
INSERT INTO searchrecords VALUES ('1506', 'å°ç½è', '2016-04-08 09:24:16', '0', '');
INSERT INTO searchrecords VALUES ('1507', '111', '2016-04-08 09:24:27', '0', '');

-- ----------------------------
-- Table structure for `secondlevelorder`
-- ----------------------------
DROP TABLE IF EXISTS `secondlevelorder`;
CREATE TABLE `secondlevelorder` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单管理-二级订单表主键',
  `secondlevelorderNo` char(20) DEFAULT NULL COMMENT '二级订单编号',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺主键',
  `idUser` int(11) DEFAULT NULL COMMENT '下单人主键',
  `creationordertime` datetime DEFAULT NULL COMMENT '下单时间',
  `orderstatus` int(11) DEFAULT NULL COMMENT '订单状态，0=待支付，1=待处理，5=已接单，2=已发货，3=已签收，4=已取消，6=已评分，7=已归集,8=已拒单',
  `isurgent` char(1) DEFAULT NULL COMMENT '是否紧急订单，Y=紧急订单，N为正常订单',
  `arrivaltime` datetime DEFAULT NULL COMMENT '到货时间',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  `canceltime` datetime DEFAULT NULL COMMENT '取消订单时间',
  `paytime` datetime DEFAULT NULL COMMENT '支付时间',
  `deliverytime` datetime DEFAULT NULL COMMENT '发货时间',
  `signtime` datetime DEFAULT NULL COMMENT '签收时间',
  `orderprice` decimal(16,2) DEFAULT NULL COMMENT '订单总价',
  `signname` varchar(20) DEFAULT NULL COMMENT '签收人名称',
  PRIMARY KEY (`idNumber`),
  KEY `FK108FC1BE40EB09D1` (`idUser`),
  CONSTRAINT `FK108FC1BE40EB09D1` FOREIGN KEY (`idUser`) REFERENCES `t_tlr_mgmt` (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1036 DEFAULT CHARSET=utf8 COMMENT='订单管理-二级订单表secondlevelorder';

-- ----------------------------
-- Records of secondlevelorder
-- ----------------------------
INSERT INTO secondlevelorder VALUES ('1027', '20160408170739000001', null, '1077', '2016-04-08 17:13:43', '6', 'N', '2016-04-09 17:13:43', '2016-04-08 17:07:39', '0', null, null, null, null, null, null, '2016-04-08 17:07:43', null, '2016-04-08 17:07:49', '0.30', '吴世桢');
INSERT INTO secondlevelorder VALUES ('1028', '20160408171049000002', null, '1077', '2016-04-08 17:12:30', '3', 'N', '2016-04-09 17:12:30', '2016-04-08 17:10:49', '0', null, null, null, null, null, null, '2016-04-08 17:10:52', null, '2016-04-08 17:11:03', '0.01', '吴世桢');
INSERT INTO secondlevelorder VALUES ('1029', '20160408171940000003', null, '1077', '2016-04-08 17:19:26', '1', 'N', '2016-04-09 17:19:26', '2016-04-08 17:19:40', '0', null, null, null, null, null, null, '2016-04-08 17:19:45', null, null, '0.04', null);
INSERT INTO secondlevelorder VALUES ('1030', '20160408172015000004', null, '1077', '2016-04-08 17:20:01', '1', 'N', '2016-04-09 17:20:01', '2016-04-08 17:20:15', '0', null, null, null, null, null, null, '2016-04-08 17:22:09', null, null, '0.02', null);
INSERT INTO secondlevelorder VALUES ('1031', '20160408172137000005', null, '1077', '2016-04-08 17:21:28', '1', 'N', '2016-04-09 17:21:28', '2016-04-08 17:21:37', '0', null, null, null, null, null, null, '2016-04-08 17:22:00', null, null, '0.01', null);
INSERT INTO secondlevelorder VALUES ('1032', '20160408172710000006', null, '1077', '2016-04-08 17:26:58', '1', 'N', '2016-04-09 17:26:58', '2016-04-08 17:27:10', '0', null, null, null, null, null, null, '2016-04-08 17:33:56', null, null, '0.02', null);
INSERT INTO secondlevelorder VALUES ('1033', '20160408172723000007', null, '1077', '2016-04-08 17:27:13', '1', 'N', '2016-04-09 17:27:13', '2016-04-08 17:27:23', '0', null, null, null, null, null, null, '2016-04-08 17:33:46', null, null, '0.01', null);
INSERT INTO secondlevelorder VALUES ('1034', '20160408173816000008', null, '1077', '2016-04-08 17:40:05', '1', 'N', '2016-04-09 17:40:05', '2016-04-08 17:38:16', '0', null, null, null, null, null, null, '2016-04-08 17:40:33', null, null, '22.00', null);
INSERT INTO secondlevelorder VALUES ('1035', '20160408173830000009', null, '1077', '2016-04-08 17:40:21', '1', 'N', '2016-04-09 17:40:21', '2016-04-08 17:38:30', '0', null, null, null, null, null, null, '2016-04-08 17:40:23', null, null, '0.02', null);

-- ----------------------------
-- Table structure for `secondorderdetails`
-- ----------------------------
DROP TABLE IF EXISTS `secondorderdetails`;
CREATE TABLE `secondorderdetails` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单管理-归集后的二级订单详情表主键',
  `idFirstorder` int(11) DEFAULT NULL COMMENT '一级订单主键',
  `idSecondorder` int(11) DEFAULT NULL COMMENT '二级订单主键',
  `secondorderNo` char(20) DEFAULT NULL COMMENT '二级订单编号',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` varchar(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单管理-归集后的二级订单详情表secondorderdetails';

-- ----------------------------
-- Records of secondorderdetails
-- ----------------------------

-- ----------------------------
-- Table structure for `shoppingcart`
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `idCommodity` int(11) DEFAULT NULL COMMENT '  商品主键',
  `idLevel` int(11) DEFAULT NULL COMMENT '商品级别主键',
  `buynumber` int(11) DEFAULT NULL COMMENT '购买数量',
  `status` int(11) DEFAULT NULL COMMENT '状态，0=初始态，1=已提交订单',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1079 DEFAULT CHARSET=utf8 COMMENT='购物车表';

-- ----------------------------
-- Records of shoppingcart
-- ----------------------------
INSERT INTO shoppingcart VALUES ('1000', '1077', '1000', '1000', '6', '0', '2016-04-08 13:42:12', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1001', '1077', '1000', '1000', '1', '0', '2016-04-08 14:17:29', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1002', '1077', '1000', '1001', '1', '0', '2016-04-08 14:21:22', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1003', '1077', '1000', '1000', '1', '0', '2016-04-08 14:20:18', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1004', '1077', '1000', '1000', '3', '0', '2016-04-08 14:23:27', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1005', '1077', '1000', '1002', '7', '0', '2016-04-08 14:26:48', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1006', '1058', '1000', '1000', '1', '0', '2016-04-08 14:25:55', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1007', '1077', '1000', '1000', '5', '0', '2016-04-08 14:28:14', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1008', '1077', '1000', '1002', '5', '0', '2016-04-08 14:28:17', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1009', '1077', '1000', '1001', '5', '0', '2016-04-08 14:28:19', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1010', '1077', '1000', '1000', '1', '0', '2016-04-08 14:28:50', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1011', '1077', '1000', '1001', '1', '0', '2016-04-08 14:30:40', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1012', '1077', '1000', '1002', '1', '0', '2016-04-08 14:31:18', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1013', '1077', '1000', '1001', '1', '0', '2016-04-08 14:31:44', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1014', '1077', '1000', '1000', '9', '0', '2016-04-08 14:34:12', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1015', '1077', '1000', '1002', '9', '0', '2016-04-08 14:34:13', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1016', '1077', '1000', '1001', '9', '0', '2016-04-08 14:34:16', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1017', '1077', '1000', '1000', '1', '0', '2016-04-08 14:52:46', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1018', '1077', '1000', '1000', '1', '0', '2016-04-08 15:24:06', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1019', '1077', '1000', '1001', '9', '0', '2016-04-08 15:26:33', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1020', '1077', '1000', '1000', '17', '0', '2016-04-08 15:26:33', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1021', '1077', '1000', '1000', '9', '0', '2016-04-08 15:28:47', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1022', '1077', '1000', '1002', '9', '0', '2016-04-08 15:28:48', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1023', '1077', '1000', '1000', '1', '0', '2016-04-08 15:27:32', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1024', '1077', '1000', '1000', '3', '0', '2016-04-08 15:30:10', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1025', '1077', '1000', '1002', '1', '0', '2016-04-08 15:33:54', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1026', '1077', '1000', '1000', '1', '0', '2016-04-08 15:34:47', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1027', '1077', '1000', '1000', '1', '0', '2016-04-08 15:40:03', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1028', '1077', '1000', '1000', '1', '0', '2016-04-08 15:43:09', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1029', '1077', '1007', '1008', '1', '0', '2016-04-08 15:44:08', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1030', '1077', '1000', '1001', '7', '0', '2016-04-08 15:45:15', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1031', '1077', '1000', '1000', '7', '0', '2016-04-08 15:45:16', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1032', '1077', '1000', '1000', '1', '0', '2016-04-08 15:50:35', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1033', '1077', '1005', '1005', '1', '0', '2016-04-08 15:56:38', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1034', '1077', '1000', '1000', '1', '0', '2016-04-08 15:57:09', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1035', '1077', '1000', '1002', '1', '0', '2016-04-08 16:00:37', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1036', '1077', '1000', '1000', '1', '0', '2016-04-08 16:01:49', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1037', '1077', '1000', '1000', '1', '0', '2016-04-08 16:07:38', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1038', '1077', '1000', '1000', '1', '0', '2016-04-08 16:10:44', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1039', '1154', '1000', '1000', '1', '0', '2016-04-08 16:19:58', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1040', '1077', '1000', '1001', '1', '0', '2016-04-08 16:20:27', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1041', '1077', '1007', '1008', '1', '0', '2016-04-08 16:20:42', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1042', '1077', '1000', '1002', '1', '0', '2016-04-08 16:21:03', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1043', '1077', '1005', '1005', '1', '0', '2016-04-08 16:21:04', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1044', '1154', '1000', '1000', '1', '0', '2016-04-08 16:24:50', '0', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1045', '1077', '1000', '1002', '26', '0', '2016-04-08 16:30:13', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1046', '1077', '1000', '1001', '1', '0', '2016-04-08 16:35:07', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1047', '1077', '1000', '1001', '2', '0', '2016-04-08 16:40:04', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1048', '1077', '1000', '1002', '2', '0', '2016-04-08 16:40:41', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1049', '1077', '1007', '1008', '1', '0', '2016-04-08 16:55:36', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1050', '1077', '1000', '1001', '1', '0', '2016-04-08 16:55:49', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1051', '1077', '1000', '1000', '1', '0', '2016-04-08 16:55:50', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1052', '1077', '1000', '1002', '1', '0', '2016-04-08 16:55:51', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1053', '1077', '1000', '1002', '1', '0', '2016-04-08 16:56:58', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1054', '1077', '1000', '1000', '1', '0', '2016-04-08 16:57:02', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1055', '1156', '1000', '1000', '1', '0', '2016-04-08 17:01:24', '0', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1056', '1077', '1000', '1000', '10', '0', '2016-04-08 17:07:22', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1057', '1077', '1000', '1001', '10', '0', '2016-04-08 17:07:23', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1058', '1077', '1007', '1008', '1', '0', '2016-04-08 17:08:08', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1059', '1077', '1000', '1000', '1', '0', '2016-04-08 17:09:18', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1060', '1077', '1000', '1002', '1', '0', '2016-04-08 17:13:57', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1061', '1077', '1000', '1000', '1', '0', '2016-04-08 17:19:27', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1062', '1077', '1000', '1000', '1', '0', '2016-04-08 17:20:00', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1063', '1077', '1000', '1001', '1', '0', '2016-04-08 17:20:01', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1064', '1077', '1000', '1000', '1', '0', '2016-04-08 17:26:58', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1065', '1077', '1000', '1001', '1', '0', '2016-04-08 17:27:00', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1066', '1077', '1000', '1000', '1', '0', '2016-04-08 17:37:56', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1067', '1077', '1000', '1001', '1', '0', '2016-04-08 17:37:59', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1068', '1077', '1005', '1005', '1', '0', '2016-04-08 17:38:02', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1069', '1077', '1000', '1001', '1', '0', '2016-04-08 17:43:25', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1070', '1077', '1000', '1001', '1', '0', '2016-04-08 17:45:27', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1071', '1077', '1000', '1002', '1', '0', '2016-04-08 17:47:20', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1072', '1077', '1000', '1000', '1', '0', '2016-04-08 17:48:58', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1073', '1077', '1000', '1001', '1', '0', '2016-04-08 17:49:03', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1074', '1077', '1000', '1002', '1', '0', '2016-04-08 17:49:06', '1', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1075', '1077', '1000', '1000', '1', '0', '2016-04-08 18:01:01', '0', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1076', '1077', '1000', '1001', '1', '0', '2016-04-08 18:01:03', '0', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1077', '1077', '1000', '1002', '1', '0', '2016-04-08 18:01:06', '0', null, null, null, null, null);
INSERT INTO shoppingcart VALUES ('1078', '1077', '1005', '1005', '1', '0', '2016-04-08 18:07:12', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `storage`
-- ----------------------------
DROP TABLE IF EXISTS `storage`;
CREATE TABLE `storage` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '仓储物流-入库商品表主键',
  `storagetime` datetime DEFAULT NULL COMMENT '入库时间',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `idStoragebills` int(11) DEFAULT NULL COMMENT '入库单表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '入库人主键',
  `storagenum` int(11) DEFAULT NULL COMMENT '入库数量',
  `specifications` varchar(10) DEFAULT NULL COMMENT '规格',
  `price` decimal(16,2) DEFAULT NULL COMMENT '单价',
  `weight` int(11) DEFAULT NULL COMMENT '重量',
  `company` varchar(10) DEFAULT NULL COMMENT '单位',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(20) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(30) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1049 DEFAULT CHARSET=utf8 COMMENT='仓储物流-入库商品表storage';

-- ----------------------------
-- Records of storage
-- ----------------------------
INSERT INTO storage VALUES ('1043', '2016-04-01 15:37:42', '1011', '1027', null, '12', '个', '21.00', '12', 'kg', '16-04-01 15:37:42', '0', null, null, null, null, null);
INSERT INTO storage VALUES ('1044', '2016-04-01 15:37:52', '1015', '1027', null, '12', '个', '12.00', '12', 'kg', '16-04-01 15:37:52', '0', null, null, null, null, null);
INSERT INTO storage VALUES ('1045', '2016-04-01 15:38:09', '1006', '1027', null, '567', '个', '0.50', '12', 'kg', '16-04-01 15:38:09', '0', null, null, null, null, null);
INSERT INTO storage VALUES ('1046', '2016-04-05 08:37:09', '1013', '1028', null, '12', '个', '21.00', '12', 'kg', '16-04-05 08:37:09', '0', null, null, null, null, null);
INSERT INTO storage VALUES ('1047', '2016-04-05 08:37:37', '1031', '1028', null, '99', '个', '5.00', '1', 'kg', '16-04-05 08:37:37', '0', null, null, null, null, null);
INSERT INTO storage VALUES ('1048', '2016-04-08 10:34:46', '1055', '1028', null, '40', '一百', '200.00', '20', 'KG', '16-04-08 10:34:46', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `storagebills`
-- ----------------------------
DROP TABLE IF EXISTS `storagebills`;
CREATE TABLE `storagebills` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `storagetime` datetime DEFAULT NULL COMMENT '入库时间',
  `storageperson` varchar(30) DEFAULT NULL COMMENT '经办人',
  `storagebill` char(20) DEFAULT NULL COMMENT '入库单号',
  `idStore` int(11) DEFAULT NULL COMMENT '入库店铺主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(2) DEFAULT NULL COMMENT '删除标识，默认为0，删除则改为1',
  `back1` varchar(30) DEFAULT NULL COMMENT '预留字段',
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1030 DEFAULT CHARSET=utf8 COMMENT='入库单表storagebills';

-- ----------------------------
-- Records of storagebills
-- ----------------------------
INSERT INTO storagebills VALUES ('1028', '2016-04-01 16:54:17', '测试用户', '20160405 2986', '1021', '16-04-01 16:54:06', '0', null);
INSERT INTO storagebills VALUES ('1029', '2016-04-07 00:00:00', '系统管理员', null, '1021', '16-04-07 18:05:10', '0', null);
INSERT INTO storagebills VALUES ('1027', '2016-03-30 16:23:12', '测试用户', '20160331 8716', '1025', '16-03-30 16:23:19', '0', null);
INSERT INTO storagebills VALUES ('1026', '2016-03-30 13:17:30', '测试用户', null, '1001', '16-03-30 13:17:34', '0', null);

-- ----------------------------
-- Table structure for `storebrand`
-- ----------------------------
DROP TABLE IF EXISTS `storebrand`;
CREATE TABLE `storebrand` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '店铺品牌表主键',
  `brandname` varchar(20) DEFAULT NULL COMMENT '品牌名称',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺表主键',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  `back3` decimal(16,4) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1177 DEFAULT CHARSET=utf8 COMMENT='店铺品牌表storebrand';

-- ----------------------------
-- Records of storebrand
-- ----------------------------
INSERT INTO storebrand VALUES ('1001', '如意情', '1021', '16-04-07 20:32:00', null, null, null, null);
INSERT INTO storebrand VALUES ('1003', 'lvdou', '1008', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1004', 'huangdou', '1008', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1005', 'adfadf', '1015', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1006', 'gada', '1015', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1007', 'gadf', '1016', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1008', 'gsadfasf', '1016', '16-04-05 15:24:46', '1', null, null, null);
INSERT INTO storebrand VALUES ('1009', '金事达', '1001', '16-04-06 09:24:34', '1', null, null, null);
INSERT INTO storebrand VALUES ('1010', '如意菜', '1001', '16-04-08 10:42:12', null, null, null, null);
INSERT INTO storebrand VALUES ('1011', '金事达', '1001', '16-04-05 09:46:21', '1', null, null, null);
INSERT INTO storebrand VALUES ('1012', '如意情', '1001', '2016-03-02 15:26:02', '0', null, null, null);
INSERT INTO storebrand VALUES ('1013', '金事达', '1001', '2016-03-02 15:26:02', '0', null, null, null);
INSERT INTO storebrand VALUES ('1014', '如意情', '1001', '2016-03-02 15:26:02', '0', null, null, null);
INSERT INTO storebrand VALUES ('1015', '金事达', '1001', '2016-03-02 15:28:31', '0', null, null, null);
INSERT INTO storebrand VALUES ('1016', '金事达', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1017', '如意情', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1018', '金事达', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1019', '如意情', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1020', '金事达', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1021', '如意情', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1022', '金', '1001', '2016-03-02 15:30:00', '0', null, null, null);
INSERT INTO storebrand VALUES ('1023', '小米', '1001', '2016-03-02 15:34:14', '0', null, null, null);
INSERT INTO storebrand VALUES ('1024', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1025', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1026', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1027', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1028', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1029', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1030', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1031', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1032', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1033', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1034', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1035', '金事达', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1036', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1037', '金事达s', '1001', '16-03-16 16:35:49', null, null, null, null);
INSERT INTO storebrand VALUES ('1038', '如意情', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1039', '金', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1040', '小米了咯了', '1001', '2016-03-02 15:52:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1103', '小米', '1011', '2016-03-03 15:51:17', '0', null, null, null);
INSERT INTO storebrand VALUES ('1105', '发1', '1017', '2016-03-03 15:57:11', null, null, null, null);
INSERT INTO storebrand VALUES ('1106', '发2', '1017', '2016-03-03 15:57:11', null, null, null, null);
INSERT INTO storebrand VALUES ('1107', '罚3', '1017', '2016-03-03 15:57:11', null, null, null, null);
INSERT INTO storebrand VALUES ('1109', '魅族', '1011', '2016-03-04 14:55:05', '0', null, null, null);
INSERT INTO storebrand VALUES ('1110', '格力', '1011', '2016-03-04 14:55:48', '0', null, null, null);
INSERT INTO storebrand VALUES ('1111', '活动过后', '1019', '2016-03-07 16:24:40', null, null, null, null);
INSERT INTO storebrand VALUES ('1112', '化工厂', '1019', '2016-03-07 16:24:40', null, null, null, null);
INSERT INTO storebrand VALUES ('1113', 'å°ç±³', '1011', '2016-03-09 15:24:49', '0', null, null, null);
INSERT INTO storebrand VALUES ('1114', 'é­æ', '1011', '2016-03-09 15:24:49', '0', null, null, null);
INSERT INTO storebrand VALUES ('1115', 'æ ¼å', '1011', '2016-03-09 15:24:49', '0', null, null, null);
INSERT INTO storebrand VALUES ('1116', 'Ã¥Â°ÂÃ§Â±Â³', '1011', '2016-03-09 15:35:09', '0', null, null, null);
INSERT INTO storebrand VALUES ('1117', 'Ã©Â­ÂÃ¦ÂÂ', '1011', '2016-03-09 15:35:09', '0', null, null, null);
INSERT INTO storebrand VALUES ('1118', 'dasdas', '1011', '16-03-16 14:04:49', null, null, null, null);
INSERT INTO storebrand VALUES ('1119', '了来了', '1011', '2016-03-16 17:15:19', '0', null, null, null);
INSERT INTO storebrand VALUES ('1120', '娇兰佳人', '1025', '2016-03-16 17:15:19', null, null, null, null);
INSERT INTO storebrand VALUES ('1121', '打发第三方', '1032', '2016-03-30 09:41:38', null, null, null, null);
INSERT INTO storebrand VALUES ('1122', '感动', '1032', '2016-03-30 09:41:38', null, null, null, null);
INSERT INTO storebrand VALUES ('1123', '打的费', '1033', '2016-03-30 09:58:03', null, null, null, null);
INSERT INTO storebrand VALUES ('1124', '和梵蒂冈', '1033', '2016-03-30 09:58:03', null, null, null, null);
INSERT INTO storebrand VALUES ('1125', '事达', '1034', '2016-03-30 10:00:56', null, null, null, null);
INSERT INTO storebrand VALUES ('1126', '发发', '1035', '2016-03-30 10:21:23', null, null, null, null);
INSERT INTO storebrand VALUES ('1127', '广东省', '1035', '2016-03-30 10:21:23', null, null, null, null);
INSERT INTO storebrand VALUES ('1128', '分公司', '1036', '2016-03-30 10:56:40', null, null, null, null);
INSERT INTO storebrand VALUES ('1129', '格式的奉公守法', '1036', '2016-03-30 10:56:40', null, null, null, null);
INSERT INTO storebrand VALUES ('1130', '阿萨德发', '1045', '2016-04-01 11:22:41', null, null, null, null);
INSERT INTO storebrand VALUES ('1131', '阿萨德发', '1046', '2016-04-01 11:22:36', null, null, null, null);
INSERT INTO storebrand VALUES ('1132', '股份公司', '1047', '2016-04-01 11:40:38', null, null, null, null);
INSERT INTO storebrand VALUES ('1133', '阿迪达斯', '1048', '2016-04-01 14:16:49', null, null, null, null);
INSERT INTO storebrand VALUES ('1134', '测试牌', '1000', '16-04-01 15:21:48', '0', null, null, null);
INSERT INTO storebrand VALUES ('1135', '很好的', '1050', '2016-04-05 14:14:50', null, null, null, null);
INSERT INTO storebrand VALUES ('1136', '可能吧', '1050', '2016-04-05 14:14:50', null, null, null, null);
INSERT INTO storebrand VALUES ('1137', '发广告', '1053', '2016-04-05 15:43:05', null, null, null, null);
INSERT INTO storebrand VALUES ('1138', '搭噶尔', '1054', '2016-04-05 15:45:46', null, null, null, null);
INSERT INTO storebrand VALUES ('1139', 'gadfadfg', '1055', '2016-04-05 15:48:09', null, null, null, null);
INSERT INTO storebrand VALUES ('1140', '啦啦啦', '1001', '16-04-05 16:10:19', '1', null, null, null);
INSERT INTO storebrand VALUES ('1147', '世纪', '1021', '2016-04-05 16:49:16', '0', null, null, null);
INSERT INTO storebrand VALUES ('1148', '世纪②', '1021', '2016-04-05 16:50:18', '0', null, null, null);
INSERT INTO storebrand VALUES ('1149', '美食达', '1056', '2016-04-05 17:10:11', null, null, null, null);
INSERT INTO storebrand VALUES ('1150', '连达', '1056', '2016-04-05 17:10:11', null, null, null, null);
INSERT INTO storebrand VALUES ('1151', '世纪天成', '1057', '2016-04-05 18:02:16', null, null, null, null);
INSERT INTO storebrand VALUES ('1152', '天成世纪', '1057', '2016-04-05 18:02:16', null, null, null, null);
INSERT INTO storebrand VALUES ('1153', 'éç©', '1052', '2016-04-05 18:08:11', '0', null, null, null);
INSERT INTO storebrand VALUES ('1154', '不放过双方各', '1058', '2016-04-05 18:45:20', null, null, null, null);
INSERT INTO storebrand VALUES ('1155', '测试品牌1', '1060', '2016-04-06 09:54:28', null, null, null, null);
INSERT INTO storebrand VALUES ('1156', '测试品牌2', '1060', '2016-04-06 09:54:28', null, null, null, null);
INSERT INTO storebrand VALUES ('1157', '测试品牌1', '1061', '2016-04-06 10:14:43', null, null, null, null);
INSERT INTO storebrand VALUES ('1158', '测试品牌2', '1061', '2016-04-06 10:14:43', null, null, null, null);
INSERT INTO storebrand VALUES ('1159', '阿迪达斯', '1062', '2016-04-06 10:20:49', null, null, null, null);
INSERT INTO storebrand VALUES ('1160', '亚特兰蒂斯', '1064', '2016-04-06 10:59:42', '0', null, null, null);
INSERT INTO storebrand VALUES ('1161', '阿迪达斯', '1066', '2016-04-06 11:22:57', null, null, null, null);
INSERT INTO storebrand VALUES ('1162', 'éç©', '1063', '2016-04-06 11:37:49', '0', null, null, null);
INSERT INTO storebrand VALUES ('1163', '品牌1', '1067', '2016-04-06 11:46:47', null, null, null, null);
INSERT INTO storebrand VALUES ('1164', '品牌2', '1067', '2016-04-06 11:46:47', null, null, null, null);
INSERT INTO storebrand VALUES ('1165', '水培菜', '1069', '2016-04-06 11:59:44', null, null, null, null);
INSERT INTO storebrand VALUES ('1166', 'å°éº¦ç°', '1068', '2016-04-06 13:39:45', '0', null, null, null);
INSERT INTO storebrand VALUES ('1167', '小麦田', '1070', '2016-04-06 14:09:10', '0', null, null, null);
INSERT INTO storebrand VALUES ('1168', '达力', '1072', '2016-04-07 09:52:00', null, null, null, null);
INSERT INTO storebrand VALUES ('1169', '绿盎', '1072', '2016-04-07 09:52:00', null, null, null, null);
INSERT INTO storebrand VALUES ('1170', '大范甘迪', '1073', '2016-04-07 11:43:05', null, null, null, null);
INSERT INTO storebrand VALUES ('1171', '时过分过分', '1074', '2016-04-07 13:56:40', null, null, null, null);
INSERT INTO storebrand VALUES ('1172', '佳鲜', '1073', '2016-04-08 09:13:02', null, null, null, null);
INSERT INTO storebrand VALUES ('1173', '壹鲜', '1073', '2016-04-08 09:13:02', null, null, null, null);
INSERT INTO storebrand VALUES ('1174', '水培菜', '1069', '16-04-08 10:37:38', '0', null, null, null);
INSERT INTO storebrand VALUES ('1175', '发大发', '1074', '2016-04-08 10:53:17', null, null, null, null);
INSERT INTO storebrand VALUES ('1176', '123123', '1076', '2016-04-08 11:00:57', null, null, null, null);

-- ----------------------------
-- Table structure for `store_images`
-- ----------------------------
DROP TABLE IF EXISTS `store_images`;
CREATE TABLE `store_images` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '产地风采图片表主键',
  `idStoreStyle` int(11) DEFAULT NULL COMMENT '风采表主键',
  `imagename` varchar(50) DEFAULT NULL COMMENT '图片名称',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1035 DEFAULT CHARSET=utf8 COMMENT='产地风采图片表store_images';

-- ----------------------------
-- Records of store_images
-- ----------------------------
INSERT INTO store_images VALUES ('1000', '1000', '1.png', '2016-01-26 12:34:56', '1', null, null);
INSERT INTO store_images VALUES ('1001', '1000', '2.png', '2016-01-26 12:34:56', '1', null, null);
INSERT INTO store_images VALUES ('1002', '1001', '94ac7ba7-993e-4dde-9c35-8f3f91281d17.jpg', '2016-03-02 11:12:29', null, null, null);
INSERT INTO store_images VALUES ('1003', '1001', '1bd520df-c20b-446a-9645-fb64301df1a8.png', '2016-03-02 11:12:29', null, null, null);
INSERT INTO store_images VALUES ('1004', '1000', '4835445a-c5ca-4158-93f4-174c0ae8be39.jpg', '2016-03-02 11:13:47', '1', null, null);
INSERT INTO store_images VALUES ('1005', '1000', '1815c7a5-6fa8-4ca9-9db4-514208234829.png', '2016-03-02 11:13:47', '1', null, null);
INSERT INTO store_images VALUES ('1006', '1002', 'bfddb426-583f-456b-aa28-77c905c5bd68.jpg', '2016-03-02 11:33:17', null, null, null);
INSERT INTO store_images VALUES ('1007', '1003', '095f6027-b149-407a-b886-d069e62b16be.jpg', '2016-03-02 16:59:13', null, null, null);
INSERT INTO store_images VALUES ('1008', '1003', '859dae68-2bd6-40d6-85ef-6d754ee1a66a.png', '2016-03-02 16:59:13', null, null, null);
INSERT INTO store_images VALUES ('1009', '1004', 'b1341fc0-f9de-4a5f-9c7c-4bf708d5fdf9.jpg', '2016-03-03 15:25:02', '1', null, null);
INSERT INTO store_images VALUES ('1010', '1004', 'd4e4314c-8fff-4b0e-8497-237edf5364a3.png', '2016-03-03 15:42:15', null, null, null);
INSERT INTO store_images VALUES ('1011', '1005', '3d85f82a-3927-4463-9830-15c2ead9e9c6.jpg', '2016-03-03 17:56:20', '1', null, null);
INSERT INTO store_images VALUES ('1012', '1005', '257e2b93-64ad-4ad3-971d-0e93fd886fed.png', '2016-03-03 17:56:20', '1', null, null);
INSERT INTO store_images VALUES ('1013', '1005', '4931cd00-c950-4183-aa46-d399a997a68d.png', '2016-03-03 17:59:15', '1', null, null);
INSERT INTO store_images VALUES ('1014', '1005', '341fcfe2-c471-4070-b568-93c805dd6c1f.png', '2016-03-03 17:59:15', '1', null, null);
INSERT INTO store_images VALUES ('1015', '1005', 'c4b9db38-89c8-4bd7-872f-916f14d103a1.jpg', '2016-03-03 17:59:15', '1', null, null);
INSERT INTO store_images VALUES ('1016', '1005', 'b926243a-eb00-46e5-96fd-c128c099219b.jpg', '2016-03-03 17:59:51', null, null, null);
INSERT INTO store_images VALUES ('1017', '1005', '41eba4d8-5725-411e-990c-ea43e41d8f04.png', '2016-03-03 17:59:51', null, null, null);
INSERT INTO store_images VALUES ('1018', '1000', '1FF9E1B467CF8EBB95C6A4479BB126B8.jpg', '2016-03-03 17:59:51', '0', null, null);
INSERT INTO store_images VALUES ('1019', '1000', '520_430.jpg', '2016-03-03 17:59:51', '0', null, null);
INSERT INTO store_images VALUES ('1020', '1000', '10531227.jpg', '2016-03-03 17:59:51', '0', null, null);
INSERT INTO store_images VALUES ('1021', '1007', 'e784b35f-4675-45f0-b55c-9ca833104ba9.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1022', '1007', 'c55e0c1e-6d38-4944-969f-42bc6883ef1a.png', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1023', '1006', '290746.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1024', '1006', '290747.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1025', '1006', '290748.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1026', '1006', '290750.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1027', '1006', '291397.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1028', '1008', '201281121544190197.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1029', '1008', 'co120114233137-41.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1030', '1008', '2377619128275668099.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1031', '1008', '3360529746949980150.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1032', '1008', '1328843365067797089.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_images VALUES ('1033', '1009', '840c87d9-5faa-468b-8afb-e0b8522df436.png', '2016-03-31 18:27:54', null, null, null);
INSERT INTO store_images VALUES ('1034', '1009', 'b3bef80d-9012-4675-a589-c87a33e0b827.jpg', '2016-03-31 18:27:54', null, null, null);

-- ----------------------------
-- Table structure for `store_product`
-- ----------------------------
DROP TABLE IF EXISTS `store_product`;
CREATE TABLE `store_product` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '产地主营产品表主键',
  `idStoreStyle` int(11) DEFAULT NULL COMMENT '产地风采表主键',
  `idCommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `productname` varchar(20) DEFAULT NULL COMMENT '主营产品名称',
  `imgname` varchar(50) DEFAULT NULL COMMENT '图片名称',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1057 DEFAULT CHARSET=utf8 COMMENT='产地主营产品表store_product';

-- ----------------------------
-- Records of store_product
-- ----------------------------
INSERT INTO store_product VALUES ('1000', '1000', null, '花花菜', '111.png', '2016-01-26 12:13:20', '1', null, null);
INSERT INTO store_product VALUES ('1001', '1000', null, '花菜', '222.png', '2016-01-26 12:13:20', '1', null, null);
INSERT INTO store_product VALUES ('1002', '1000', null, '花心菜', '333.png', '2016-01-26 12:13:20', '1', null, null);
INSERT INTO store_product VALUES ('1003', '1001', null, '花开菜', '04e1afff-4d35-43ce-ae96-2865c45656d1.jpg', '2016-03-02 11:12:29', null, null, null);
INSERT INTO store_product VALUES ('1004', '1001', null, '花籽菜', 'f81860eb-fa56-4162-9edf-907465ee4240.png', '2016-03-02 11:12:29', null, null, null);
INSERT INTO store_product VALUES ('1005', '1000', null, '花花菜3', 'd9d924dd-de4f-4496-a944-131c9da34eb8.png', null, '1', null, null);
INSERT INTO store_product VALUES ('1006', '1000', null, '花花菜2', 'b735819d-be9d-40e9-bf25-a35f3d7fced6.jpg', null, '1', null, null);
INSERT INTO store_product VALUES ('1007', '1000', null, '花花菜2', 'de567cb5-2624-402e-9391-8b60966029f0.jpg', null, '1', null, null);
INSERT INTO store_product VALUES ('1008', '1000', null, '及法定1', 'e1854095-a1f4-4300-a564-8fbe38a18d25.png', '2016-03-02 11:29:46', '1', null, null);
INSERT INTO store_product VALUES ('1009', '1000', null, '花花菜3', 'e6d9e6b5-bdc8-4df7-b8b9-b5a02622f323.jpg', '2016-03-02 11:31:57', '1', null, null);
INSERT INTO store_product VALUES ('1010', '1000', null, '花花菜1', '252749ea-fb3e-4b6e-ba5e-2bfab0be3326.jpg', '2016-03-02 11:32:37', '1', null, null);
INSERT INTO store_product VALUES ('1011', '1002', null, '阿嘎达的', '9eebf8dd-78ae-4eea-b769-d6c7523fcc97.jpg', '2016-03-02 11:33:17', null, null, null);
INSERT INTO store_product VALUES ('1012', '1002', null, '嘎达', '53609150-f110-4150-bb79-278719d354e6.png', '2016-03-02 11:33:17', null, null, null);
INSERT INTO store_product VALUES ('1040', '1003', null, '发菜1', '61490c74-6cb6-4bae-b9f3-104f0082bb14.jpg', '2016-03-03 11:45:30', null, null, null);
INSERT INTO store_product VALUES ('1041', '1004', null, '嘎达', 'ad9b46a9-c037-422f-8998-35cb498679cb.jpg', '2016-03-03 15:42:15', null, null, null);
INSERT INTO store_product VALUES ('1042', '1004', null, '发的', '0b3f4080-ce94-4bf4-978f-e505425eeefa.jpg', '2016-03-03 15:42:15', null, null, null);
INSERT INTO store_product VALUES ('1043', '1004', null, '发大发3', 'd0f0f9b2-ece7-4511-aceb-dd19d035b3f4.jpg', '2016-03-03 15:45:21', null, null, null);
INSERT INTO store_product VALUES ('1044', '1000', null, '大白菜', 'Img214156800.jpg', '2016-03-03 15:45:21', '0', null, null);
INSERT INTO store_product VALUES ('1045', '1000', null, '小白菜', '20111114151403_9062.jpg', '2016-03-03 15:45:21', '0', null, null);
INSERT INTO store_product VALUES ('1046', '1000', null, '紫背天葵', 't013c88b42dbc7e1ce5.jpg', '2016-03-03 15:45:21', '0', null, null);
INSERT INTO store_product VALUES ('1047', '1007', null, '娃娃菜1', '397a3a36-c9fc-4f68-9158-e9458636313c.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1048', '1007', null, '娃娃菜2', '5acb080c-9e7c-40e4-98ef-318abac73881.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1049', '1006', '1029', '小白菜', '290751.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1050', '1006', '1030', '菜心', '290752.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1051', '1006', '1031', '白萝卜', '290753.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1052', '1006', '1032', '红萝卜', '290754.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1053', '1006', null, '时尚girl菜', '290755.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1054', '1008', '1033', '西瓜', '20129259115995.jpg', '2016-03-15 10:00:15', null, null, null);
INSERT INTO store_product VALUES ('1055', '1009', null, '娃娃菜', '14460ac1-218a-4572-b159-ea133671cf52.png', '2016-03-31 18:27:54', null, null, null);
INSERT INTO store_product VALUES ('1056', '1009', null, '笑白菜', 'e309aa0d-201a-46f9-a581-4aa5a3b34ff9.png', '2016-03-31 18:27:54', null, null, null);

-- ----------------------------
-- Table structure for `store_style`
-- ----------------------------
DROP TABLE IF EXISTS `store_style`;
CREATE TABLE `store_style` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '产地风采表主键',
  `idStore` int(11) DEFAULT NULL COMMENT '店铺表主键',
  `frofile` varchar(500) DEFAULT NULL COMMENT '简介',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(20) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1010 DEFAULT CHARSET=utf8 COMMENT='产地风采表store_style';

-- ----------------------------
-- Records of store_style
-- ----------------------------
INSERT INTO store_style VALUES ('1000', '1001', '廊坊海泽田绿色农产品基地成立于2010年7月，下辖海泽田绿色农产展示园和海泽田绿色农产品示范园，占地450亩。分别位于永清县大辛阁乡和曹家务乡。公司现有员工150人，其中本科以上农业专业人员15人，专业技术人员50人。  基地成立以来在集团公司的正确领导和全体员工的共同努力下，已初具规模。海泽田绿色农产展示园占地60亩，园内建有高标准的日光温室6座和高标准的塑料大棚12座。棚内全部配备了防虫网、粘虫板、微喷等生物物理防治设施。主要蔬菜品种有荷兰小黄瓜、樱桃西红柿、优质西葫芦、布利塔长茄等国内外高端品种。日常在园区技术顾问的指导下，按绿色蔬菜标准实行标准化生产，产品全部通过了绿色认证。并且，园内还建有沼气池和蔬菜初加工车间及停车场、餐厅等设施，做到了生产加工销售餐饮一条龙服务。海泽田农产品示范园按照规划将建成390亩的绿色蔬菜示范基地和廊坊有机农产品交易中心。届时，各个国际农业物流公司将汇聚一堂，保鲜库、冷藏库、加工厂、转运基地、配送中心、星级酒店等一应俱全。  同时，我园区在北京成立了海泽田“我买菜”网站，该网站是集信息发布、网络销售、网络配送一体化的蔬菜。', '2016-01-26 12:1234', '0', null, null, null, null, null);
INSERT INTO store_style VALUES ('1001', '1001', 'adfasdf', '2016-03-02 11:12:29', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1002', '1001', '打发点', '2016-03-02 11:33:17', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1003', '1016', '就离开三轮的年', '2016-03-02 16:59:13', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1004', '1015', '就发了你发发', '2016-03-03 15:21:01', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1005', '1017', '', '2016-03-03 17:56:20', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1006', '1021', '廊坊海泽田绿色农产品基地成立于2010年7月，下辖海泽田绿色农产展示园和海泽田绿色农产品示范园，占地450亩。分别位于永清县大辛阁乡和曹家务乡。公司现有员工150人，其中本科以上农业专业人员15人，专业技术人员50人。  基地成立以来在集团公司的正确领导和全体员工的共同努力下，已初具规模。海泽田绿色农产展示园占地60亩，园内建有高标准的日光温室6座和高标准的塑料大棚12座。棚内全部配备了防虫网、粘虫板、微喷等生物物理防治设施。主要蔬菜品种有荷兰小黄瓜、樱桃西红柿、优质西葫芦、布利塔长茄等国内外高端品种。日常在园区技术顾问的指导下，按绿色蔬菜标准实行标准化生产，产品全部通过了绿色认证。并且，园内还建有沼气池和蔬菜初加工车间及停车场、餐厅等设施，做到了生产加工销售餐饮一条龙服务。海泽田农产品示范园按照规划将建成390亩的绿色蔬菜示范基地和廊坊有机农产品交易中心。届时，各个国际农业物流公司将汇聚一堂，保鲜库、冷藏库、加工厂、转运基地、配送中心、星级酒店等一应俱全。  同时，我园区在北京成立了海泽田“我买菜”网站，该网站是集信息发布、网络销售、网络配送一体化的蔬菜。', '2016-03-03 17:56:20', '0', null, null, null, null, null);
INSERT INTO store_style VALUES ('1007', '1011', '好地方', '2016-03-15 10:00:15', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1008', '1025', '廊坊海泽田绿色农产品基地成立于2010年7月，下辖海泽田绿色农产展示园和海泽田绿色农产品示范园，占地450亩。分别位于永清县大辛阁乡和曹家务乡。公司现有员工150人，其中本科以上农业专业人员15人，专业技术人员50人。  基地成立以来在集团公司的正确领导和全体员工的共同努力下，已初具规模。海泽田绿色农产展示园占地60亩，园内建有高标准的日光温室6座和高标准的塑料大棚12座。棚内全部配备了防虫网、粘虫板、微喷等生物物理防治设施。主要蔬菜品种有荷兰小黄瓜、樱桃西红柿、优质西葫芦、布利塔长茄等国内外高端品种。日常在园区技术顾问的指导下，按绿色蔬菜标准实行标准化生产，产品全部通过了绿色认证。并且，园内还建有沼气池和蔬菜初加工车间及停车场、餐厅等设施，做到了生产加工销售餐饮一条龙服务。海泽田农产品示范园按照规划将建成390亩的绿色蔬菜示范基地和廊坊有机农产品交易中心。届时，各个国际农业物流公司将汇聚一堂，保鲜库、冷藏库、加工厂、转运基地、配送中心、星级酒店等一应俱全。  同时，我园区在北京成立了海泽田“我买菜”网站，该网站是集信息发布、网络销售、网络配送一体化的蔬菜。', '2016-03-15 10:00:15', null, null, null, null, null, null);
INSERT INTO store_style VALUES ('1009', '1036', '好地方哦\r\n', '2016-03-31 18:27:15', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `substation`
-- ----------------------------
DROP TABLE IF EXISTS `substation`;
CREATE TABLE `substation` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-分站表主键',
  `ipaddress` varchar(20) DEFAULT NULL COMMENT 'ip地址',
  `dbname` char(20) DEFAULT NULL COMMENT '数据库名称',
  `portNo` char(5) DEFAULT NULL COMMENT '端口号',
  `username` varchar(30) DEFAULT NULL COMMENT '用户名',
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `ts` char(11) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  `back3` decimal(16,4) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='系统管理-分站表substation';

-- ----------------------------
-- Records of substation
-- ----------------------------
INSERT INTO substation VALUES ('8', '127.0.0.3', 'testdb', null, 'root2', '111111', null, null, null, null, null);
INSERT INTO substation VALUES ('9', '120.1.1.1', 'DB2', null, 'fzng', '123', null, null, null, null, null);
INSERT INTO substation VALUES ('10', '192.168.0.2', 'text1', null, 'adminstrator', '10086', null, null, null, null, null);

-- ----------------------------
-- Table structure for `sub_integralrule`
-- ----------------------------
DROP TABLE IF EXISTS `sub_integralrule`;
CREATE TABLE `sub_integralrule` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '档案管理-积分规则子表主键',
  `idIntegralrule` int(11) DEFAULT NULL COMMENT '积分规则主表主键',
  `title` varchar(50) DEFAULT NULL COMMENT '标题',
  `note` varchar(500) DEFAULT NULL COMMENT '描述',
  `serial` int(11) DEFAULT NULL COMMENT '序号',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(50) DEFAULT NULL COMMENT '预留字段2',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1014 DEFAULT CHARSET=utf8 COMMENT='档案管理-积分规则子表sub_integralrule';

-- ----------------------------
-- Records of sub_integralrule
-- ----------------------------
INSERT INTO sub_integralrule VALUES ('1000', '1', '一、积分获得', '<p>1、购买商品：通过平台购买任何商品，按照订单金额，以10元=1积分的比例，获得相应积分。</p><p>2、充值积分：预先充值，以5元=1积分的比例，获得相应积分</p><p>3、赠送积分：“e鲜”平台举办的活动有可能会获得积分赠送</p><p>4、商品评价：适用商品评价功能，对于有效评价，平台给予相应的积分奖励。</p><p>(1)所有评价都是由系统自动赠送积分，无效评价不给分</p><p>(2)同一订单或相隔十五日的订单的相同商品，只有一次评价可以赠送积分</p><p>5、推荐好友：用户通过平台提供的推荐码推荐好友成功注册后会获得一定的积分</p><p>6、满意度评价奖励积分：评价大与1000元的订单可以获得1积分', '1', '2016-02-19 12:00:00', '0', null, null);
INSERT INTO sub_integralrule VALUES ('1007', null, '二、积分的使用及规则', '<p>1、积分可在平台兑换可购物的电子券，电子券兑换比例为1：10</p><p>2、使用积分兑换的购物券为电子券，有效期为一年，电子券每次可使用多张</p><p>2、使用积分兑换的购物券为电子券，有效期为一年，电子券每次可使用多张</p><p>3、用户所购买的商品在办理退换货时，根据用户购买时赠送的积分进行扣除</p><p>4、如用户违反平台规定，平台可以扣除相应积分</p><p>5、e鲜对积分有最终解释权，平台积分只适用于用户下单', '1', '2016-02-19 12:00:00', '0', null, null);
INSERT INTO sub_integralrule VALUES ('1012', null, '三、积分查询', '每位用户可以在自己账户中查询到其积分详细情况', '1', '2016-02-19 12:00:00', '0', null, null);
INSERT INTO sub_integralrule VALUES ('1013', null, '三、什么规则', '维护积分规则', null, '16-03-28 13:59:57', null, null, null);

-- ----------------------------
-- Table structure for `summaryofearnings`
-- ----------------------------
DROP TABLE IF EXISTS `summaryofearnings`;
CREATE TABLE `summaryofearnings` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '收益概述主键',
  `summary` char(100) DEFAULT NULL COMMENT '概述',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(1) DEFAULT NULL COMMENT '删除标志',
  `back1` char(100) DEFAULT NULL COMMENT '预留字段1',
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of summaryofearnings
-- ----------------------------
INSERT INTO summaryofearnings VALUES ('1', '收益除了充值能获取收益外，还有很多方式可以获取收益哦，当然预充值收益效率最高的哦。', '2016-02-22 14:00:00', '0', null);

-- ----------------------------
-- Table structure for `syslog`
-- ----------------------------
DROP TABLE IF EXISTS `syslog`;
CREATE TABLE `syslog` (
  `idNumber` varchar(32) NOT NULL,
  `userid` varchar(50) DEFAULT NULL,
  `brno` varchar(100) DEFAULT NULL,
  `business` varchar(20) NOT NULL,
  `realDay` varchar(8) NOT NULL,
  `realTime` varchar(20) NOT NULL,
  `subjectMatter` varchar(2000) NOT NULL,
  `flag` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of syslog
-- ----------------------------

-- ----------------------------
-- Table structure for `sysmessage`
-- ----------------------------
DROP TABLE IF EXISTS `sysmessage`;
CREATE TABLE `sysmessage` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-系统消息表主键',
  `msgtitle` varchar(30) DEFAULT NULL COMMENT '标题',
  `releasetime` datetime DEFAULT NULL COMMENT '发布时间',
  `msgtype` varchar(200) DEFAULT NULL COMMENT '公告类型0=系统文本消息、1=系统图文消息、',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `msgimgname` varchar(200) DEFAULT NULL COMMENT '预留字段1',
  `back2` varchar(30) DEFAULT NULL COMMENT '预留字段2',
  `back3` decimal(16,4) DEFAULT NULL COMMENT '预留字段3',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1024 DEFAULT CHARSET=utf8 COMMENT='系统管理-系统消息表sysmessage';

-- ----------------------------
-- Records of sysmessage
-- ----------------------------
INSERT INTO sysmessage VALUES ('1006', '华为P9', '2016-04-05 16:53:31', '0', null, null, null, null, null);
INSERT INTO sysmessage VALUES ('1020', 'g', '2016-04-07 00:00:00', '0', '16-04-07 15:42:01', null, null, null, null);
INSERT INTO sysmessage VALUES ('1022', 's', '2016-04-07 00:00:00', '1', '16-04-07 16:03:20', null, null, null, null);
INSERT INTO sysmessage VALUES ('1023', 'f', '2016-04-07 00:00:00', '1', '16-04-07 16:31:27', null, null, null, null);

-- ----------------------------
-- Table structure for `sysmsgcontent`
-- ----------------------------
DROP TABLE IF EXISTS `sysmsgcontent`;
CREATE TABLE `sysmsgcontent` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-系统消息内容表主键',
  `idSysmessge` int(11) DEFAULT NULL COMMENT '系统消息主键',
  `msgcontent` varchar(200) DEFAULT NULL COMMENT '消息内容',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(20) DEFAULT NULL COMMENT '预留字段1',
  `subTitle` varchar(50) DEFAULT NULL COMMENT '子标题',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1017 DEFAULT CHARSET=utf8 COMMENT='系统管理-系统消息内容表sysmsgcontent';

-- ----------------------------
-- Records of sysmsgcontent
-- ----------------------------
INSERT INTO sysmsgcontent VALUES ('1000', '1000', '呀呀呀呀呀呀呀呀呀呀呀呀哎呀呀', '2016-01-28 00:00:00', '0', null, '一、优惠大放送');
INSERT INTO sysmsgcontent VALUES ('1007', '1001', '20多岁，男人通常还处于起步阶段，是一生中的最低点；而此时，女人却处于一生中最好的时候。一个人，若甘心把最好的时间，给了最差的你。为什么不知道珍惜？——马丁', '2016-03-16 00:00:00', null, null, '四、邀请好友安装app送100积分活动');
INSERT INTO sysmsgcontent VALUES ('1010', '1006', '华为P9高配版3688', '2016-04-05 00:00:00', null, null, '三、华为p9高配版');
INSERT INTO sysmsgcontent VALUES ('1013', '1020', 'g', '16-04-07 15:42:02', null, null, '');
INSERT INTO sysmsgcontent VALUES ('1014', '1021', 'asdasdas', '16-04-07 15:50:37', null, null, 's');
INSERT INTO sysmsgcontent VALUES ('1015', '1022', 's', '16-04-07 16:03:21', null, null, 's');
INSERT INTO sysmsgcontent VALUES ('1016', '1023', 'f', '16-04-07 16:31:28', null, null, 'f');

-- ----------------------------
-- Table structure for `sysmsgimages`
-- ----------------------------
DROP TABLE IF EXISTS `sysmsgimages`;
CREATE TABLE `sysmsgimages` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-系统消息图片表主键',
  `idSysmsgconent` int(11) DEFAULT NULL COMMENT '消息内容表主键',
  `msgimgname` varchar(50) DEFAULT NULL COMMENT '图片名称',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(20) DEFAULT NULL COMMENT '预留字段',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=utf8 COMMENT='系统管理-系统消息图片表sysmsgimages';

-- ----------------------------
-- Records of sysmsgimages
-- ----------------------------
INSERT INTO sysmsgimages VALUES ('1000', '1004', 'msg1.jpg', '2016-01-28 00:00:00', '0', null);
INSERT INTO sysmsgimages VALUES ('1001', '1005', 'msg2.jpg', '2016-01-28 00:00:00', '0', null);
INSERT INTO sysmsgimages VALUES ('1002', '1006', 'msg3.jpg', '2016-01-28 00:00:00', '0', null);
INSERT INTO sysmsgimages VALUES ('1003', '1007', 'msg4.jpg', '2016-01-28 00:00:00', '0', null);
INSERT INTO sysmsgimages VALUES ('1004', '1015', '16a1a1b1-6b3f-49e1-930c-de7f526ad987.jpg', '16-04-07 16:03:21', null, null);
INSERT INTO sysmsgimages VALUES ('1005', '1016', 'b4901bea-1fa3-494e-a587-84875b6f85cc.jpg', '16-04-07 16:31:28', null, null);

-- ----------------------------
-- Table structure for `tbarea`
-- ----------------------------
DROP TABLE IF EXISTS `tbarea`;
CREATE TABLE `tbarea` (
  `areaid` bigint(8) NOT NULL DEFAULT '0',
  `areaname` varchar(255) DEFAULT NULL,
  `pid` bigint(8) DEFAULT '0',
  PRIMARY KEY (`areaid`),
  KEY `areaid` (`areaid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbarea
-- ----------------------------
INSERT INTO tbarea VALUES ('110000', '北京市', '0');
INSERT INTO tbarea VALUES ('110100', '市辖区', '110000');
INSERT INTO tbarea VALUES ('110101', '东城区', '110100');
INSERT INTO tbarea VALUES ('110102', '西城区', '110100');
INSERT INTO tbarea VALUES ('110105', '朝阳区', '110100');
INSERT INTO tbarea VALUES ('110106', '丰台区', '110100');
INSERT INTO tbarea VALUES ('110107', '石景山区', '110100');
INSERT INTO tbarea VALUES ('110108', '海淀区', '110100');
INSERT INTO tbarea VALUES ('110109', '门头沟区', '110100');
INSERT INTO tbarea VALUES ('110111', '房山区', '110100');
INSERT INTO tbarea VALUES ('110112', '通州区', '110100');
INSERT INTO tbarea VALUES ('110113', '顺义区', '110100');
INSERT INTO tbarea VALUES ('110114', '昌平区', '110100');
INSERT INTO tbarea VALUES ('110115', '大兴区', '110100');
INSERT INTO tbarea VALUES ('110116', '怀柔区', '110100');
INSERT INTO tbarea VALUES ('110117', '平谷区', '110100');
INSERT INTO tbarea VALUES ('110200', '县', '110000');
INSERT INTO tbarea VALUES ('110228', '密云县', '110200');
INSERT INTO tbarea VALUES ('110229', '延庆县', '110200');
INSERT INTO tbarea VALUES ('120000', '天津市', '0');
INSERT INTO tbarea VALUES ('120100', '市辖区', '120000');
INSERT INTO tbarea VALUES ('120101', '和平区', '120100');
INSERT INTO tbarea VALUES ('120102', '河东区', '120100');
INSERT INTO tbarea VALUES ('120103', '河西区', '120100');
INSERT INTO tbarea VALUES ('120104', '南开区', '120100');
INSERT INTO tbarea VALUES ('120105', '河北区', '120100');
INSERT INTO tbarea VALUES ('120106', '红桥区', '120100');
INSERT INTO tbarea VALUES ('120110', '东丽区', '120100');
INSERT INTO tbarea VALUES ('120111', '西青区', '120100');
INSERT INTO tbarea VALUES ('120112', '津南区', '120100');
INSERT INTO tbarea VALUES ('120113', '北辰区', '120100');
INSERT INTO tbarea VALUES ('120114', '武清区', '120100');
INSERT INTO tbarea VALUES ('120115', '宝坻区', '120100');
INSERT INTO tbarea VALUES ('120116', '滨海新区', '120100');
INSERT INTO tbarea VALUES ('120200', '县', '120000');
INSERT INTO tbarea VALUES ('120221', '宁河县', '120200');
INSERT INTO tbarea VALUES ('120223', '静海县', '120200');
INSERT INTO tbarea VALUES ('120225', '蓟县', '120200');
INSERT INTO tbarea VALUES ('130000', '河北省', '0');
INSERT INTO tbarea VALUES ('130100', '石家庄市', '130000');
INSERT INTO tbarea VALUES ('130101', '市辖区', '130100');
INSERT INTO tbarea VALUES ('130102', '长安区', '130100');
INSERT INTO tbarea VALUES ('130103', '桥东区', '130100');
INSERT INTO tbarea VALUES ('130104', '桥西区', '130100');
INSERT INTO tbarea VALUES ('130105', '新华区', '130100');
INSERT INTO tbarea VALUES ('130107', '井陉矿区', '130100');
INSERT INTO tbarea VALUES ('130108', '裕华区', '130100');
INSERT INTO tbarea VALUES ('130121', '井陉县', '130100');
INSERT INTO tbarea VALUES ('130123', '正定县', '130100');
INSERT INTO tbarea VALUES ('130124', '栾城县', '130100');
INSERT INTO tbarea VALUES ('130125', '行唐县', '130100');
INSERT INTO tbarea VALUES ('130126', '灵寿县', '130100');
INSERT INTO tbarea VALUES ('130127', '高邑县', '130100');
INSERT INTO tbarea VALUES ('130128', '深泽县', '130100');
INSERT INTO tbarea VALUES ('130129', '赞皇县', '130100');
INSERT INTO tbarea VALUES ('130130', '无极县', '130100');
INSERT INTO tbarea VALUES ('130131', '平山县', '130100');
INSERT INTO tbarea VALUES ('130132', '元氏县', '130100');
INSERT INTO tbarea VALUES ('130133', '赵县', '130100');
INSERT INTO tbarea VALUES ('130181', '辛集市', '130100');
INSERT INTO tbarea VALUES ('130182', '藁城市', '130100');
INSERT INTO tbarea VALUES ('130183', '晋州市', '130100');
INSERT INTO tbarea VALUES ('130184', '新乐市', '130100');
INSERT INTO tbarea VALUES ('130185', '鹿泉市', '130100');
INSERT INTO tbarea VALUES ('130200', '唐山市', '130000');
INSERT INTO tbarea VALUES ('130201', '市辖区', '130200');
INSERT INTO tbarea VALUES ('130202', '路南区', '130200');
INSERT INTO tbarea VALUES ('130203', '路北区', '130200');
INSERT INTO tbarea VALUES ('130204', '古冶区', '130200');
INSERT INTO tbarea VALUES ('130205', '开平区', '130200');
INSERT INTO tbarea VALUES ('130207', '丰南区', '130200');
INSERT INTO tbarea VALUES ('130208', '丰润区', '130200');
INSERT INTO tbarea VALUES ('130209', '曹妃甸区', '130200');
INSERT INTO tbarea VALUES ('130223', '滦县', '130200');
INSERT INTO tbarea VALUES ('130224', '滦南县', '130200');
INSERT INTO tbarea VALUES ('130225', '乐亭县', '130200');
INSERT INTO tbarea VALUES ('130227', '迁西县', '130200');
INSERT INTO tbarea VALUES ('130229', '玉田县', '130200');
INSERT INTO tbarea VALUES ('130281', '遵化市', '130200');
INSERT INTO tbarea VALUES ('130283', '迁安市', '130200');
INSERT INTO tbarea VALUES ('130300', '秦皇岛市', '130000');
INSERT INTO tbarea VALUES ('130301', '市辖区', '130300');
INSERT INTO tbarea VALUES ('130302', '海港区', '130300');
INSERT INTO tbarea VALUES ('130303', '山海关区', '130300');
INSERT INTO tbarea VALUES ('130304', '北戴河区', '130300');
INSERT INTO tbarea VALUES ('130321', '青龙满族自治县', '130300');
INSERT INTO tbarea VALUES ('130322', '昌黎县', '130300');
INSERT INTO tbarea VALUES ('130323', '抚宁县', '130300');
INSERT INTO tbarea VALUES ('130324', '卢龙县', '130300');
INSERT INTO tbarea VALUES ('130400', '邯郸市', '130000');
INSERT INTO tbarea VALUES ('130401', '市辖区', '130400');
INSERT INTO tbarea VALUES ('130402', '邯山区', '130400');
INSERT INTO tbarea VALUES ('130403', '丛台区', '130400');
INSERT INTO tbarea VALUES ('130404', '复兴区', '130400');
INSERT INTO tbarea VALUES ('130406', '峰峰矿区', '130400');
INSERT INTO tbarea VALUES ('130421', '邯郸县', '130400');
INSERT INTO tbarea VALUES ('130423', '临漳县', '130400');
INSERT INTO tbarea VALUES ('130424', '成安县', '130400');
INSERT INTO tbarea VALUES ('130425', '大名县', '130400');
INSERT INTO tbarea VALUES ('130426', '涉县', '130400');
INSERT INTO tbarea VALUES ('130427', '磁县', '130400');
INSERT INTO tbarea VALUES ('130428', '肥乡县', '130400');
INSERT INTO tbarea VALUES ('130429', '永年县', '130400');
INSERT INTO tbarea VALUES ('130430', '邱县', '130400');
INSERT INTO tbarea VALUES ('130431', '鸡泽县', '130400');
INSERT INTO tbarea VALUES ('130432', '广平县', '130400');
INSERT INTO tbarea VALUES ('130433', '馆陶县', '130400');
INSERT INTO tbarea VALUES ('130434', '魏县', '130400');
INSERT INTO tbarea VALUES ('130435', '曲周县', '130400');
INSERT INTO tbarea VALUES ('130481', '武安市', '130400');
INSERT INTO tbarea VALUES ('130500', '邢台市', '130000');
INSERT INTO tbarea VALUES ('130501', '市辖区', '130500');
INSERT INTO tbarea VALUES ('130502', '桥东区', '130500');
INSERT INTO tbarea VALUES ('130503', '桥西区', '130500');
INSERT INTO tbarea VALUES ('130521', '邢台县', '130500');
INSERT INTO tbarea VALUES ('130522', '临城县', '130500');
INSERT INTO tbarea VALUES ('130523', '内丘县', '130500');
INSERT INTO tbarea VALUES ('130524', '柏乡县', '130500');
INSERT INTO tbarea VALUES ('130525', '隆尧县', '130500');
INSERT INTO tbarea VALUES ('130526', '任县', '130500');
INSERT INTO tbarea VALUES ('130527', '南和县', '130500');
INSERT INTO tbarea VALUES ('130528', '宁晋县', '130500');
INSERT INTO tbarea VALUES ('130529', '巨鹿县', '130500');
INSERT INTO tbarea VALUES ('130530', '新河县', '130500');
INSERT INTO tbarea VALUES ('130531', '广宗县', '130500');
INSERT INTO tbarea VALUES ('130532', '平乡县', '130500');
INSERT INTO tbarea VALUES ('130533', '威县', '130500');
INSERT INTO tbarea VALUES ('130534', '清河县', '130500');
INSERT INTO tbarea VALUES ('130535', '临西县', '130500');
INSERT INTO tbarea VALUES ('130581', '南宫市', '130500');
INSERT INTO tbarea VALUES ('130582', '沙河市', '130500');
INSERT INTO tbarea VALUES ('130600', '保定市', '130000');
INSERT INTO tbarea VALUES ('130601', '市辖区', '130600');
INSERT INTO tbarea VALUES ('130602', '新市区', '130600');
INSERT INTO tbarea VALUES ('130603', '北市区', '130600');
INSERT INTO tbarea VALUES ('130604', '南市区', '130600');
INSERT INTO tbarea VALUES ('130621', '满城县', '130600');
INSERT INTO tbarea VALUES ('130622', '清苑县', '130600');
INSERT INTO tbarea VALUES ('130623', '涞水县', '130600');
INSERT INTO tbarea VALUES ('130624', '阜平县', '130600');
INSERT INTO tbarea VALUES ('130625', '徐水县', '130600');
INSERT INTO tbarea VALUES ('130626', '定兴县', '130600');
INSERT INTO tbarea VALUES ('130627', '唐县', '130600');
INSERT INTO tbarea VALUES ('130628', '高阳县', '130600');
INSERT INTO tbarea VALUES ('130629', '容城县', '130600');
INSERT INTO tbarea VALUES ('130630', '涞源县', '130600');
INSERT INTO tbarea VALUES ('130631', '望都县', '130600');
INSERT INTO tbarea VALUES ('130632', '安新县', '130600');
INSERT INTO tbarea VALUES ('130633', '易县', '130600');
INSERT INTO tbarea VALUES ('130634', '曲阳县', '130600');
INSERT INTO tbarea VALUES ('130635', '蠡县', '130600');
INSERT INTO tbarea VALUES ('130636', '顺平县', '130600');
INSERT INTO tbarea VALUES ('130637', '博野县', '130600');
INSERT INTO tbarea VALUES ('130638', '雄县', '130600');
INSERT INTO tbarea VALUES ('130681', '涿州市', '130600');
INSERT INTO tbarea VALUES ('130682', '定州市', '130600');
INSERT INTO tbarea VALUES ('130683', '安国市', '130600');
INSERT INTO tbarea VALUES ('130684', '高碑店市', '130600');
INSERT INTO tbarea VALUES ('130700', '张家口市', '130000');
INSERT INTO tbarea VALUES ('130701', '市辖区', '130700');
INSERT INTO tbarea VALUES ('130702', '桥东区', '130700');
INSERT INTO tbarea VALUES ('130703', '桥西区', '130700');
INSERT INTO tbarea VALUES ('130705', '宣化区', '130700');
INSERT INTO tbarea VALUES ('130706', '下花园区', '130700');
INSERT INTO tbarea VALUES ('130721', '宣化县', '130700');
INSERT INTO tbarea VALUES ('130722', '张北县', '130700');
INSERT INTO tbarea VALUES ('130723', '康保县', '130700');
INSERT INTO tbarea VALUES ('130724', '沽源县', '130700');
INSERT INTO tbarea VALUES ('130725', '尚义县', '130700');
INSERT INTO tbarea VALUES ('130726', '蔚县', '130700');
INSERT INTO tbarea VALUES ('130727', '阳原县', '130700');
INSERT INTO tbarea VALUES ('130728', '怀安县', '130700');
INSERT INTO tbarea VALUES ('130729', '万全县', '130700');
INSERT INTO tbarea VALUES ('130730', '怀来县', '130700');
INSERT INTO tbarea VALUES ('130731', '涿鹿县', '130700');
INSERT INTO tbarea VALUES ('130732', '赤城县', '130700');
INSERT INTO tbarea VALUES ('130733', '崇礼县', '130700');
INSERT INTO tbarea VALUES ('130800', '承德市', '130000');
INSERT INTO tbarea VALUES ('130801', '市辖区', '130800');
INSERT INTO tbarea VALUES ('130802', '双桥区', '130800');
INSERT INTO tbarea VALUES ('130803', '双滦区', '130800');
INSERT INTO tbarea VALUES ('130804', '鹰手营子矿区', '130800');
INSERT INTO tbarea VALUES ('130821', '承德县', '130800');
INSERT INTO tbarea VALUES ('130822', '兴隆县', '130800');
INSERT INTO tbarea VALUES ('130823', '平泉县', '130800');
INSERT INTO tbarea VALUES ('130824', '滦平县', '130800');
INSERT INTO tbarea VALUES ('130825', '隆化县', '130800');
INSERT INTO tbarea VALUES ('130826', '丰宁满族自治县', '130800');
INSERT INTO tbarea VALUES ('130827', '宽城满族自治县', '130800');
INSERT INTO tbarea VALUES ('130828', '围场满族蒙古族自治县', '130800');
INSERT INTO tbarea VALUES ('130900', '沧州市', '130000');
INSERT INTO tbarea VALUES ('130901', '市辖区', '130900');
INSERT INTO tbarea VALUES ('130902', '新华区', '130900');
INSERT INTO tbarea VALUES ('130903', '运河区', '130900');
INSERT INTO tbarea VALUES ('130921', '沧县', '130900');
INSERT INTO tbarea VALUES ('130922', '青县', '130900');
INSERT INTO tbarea VALUES ('130923', '东光县', '130900');
INSERT INTO tbarea VALUES ('130924', '海兴县', '130900');
INSERT INTO tbarea VALUES ('130925', '盐山县', '130900');
INSERT INTO tbarea VALUES ('130926', '肃宁县', '130900');
INSERT INTO tbarea VALUES ('130927', '南皮县', '130900');
INSERT INTO tbarea VALUES ('130928', '吴桥县', '130900');
INSERT INTO tbarea VALUES ('130929', '献县', '130900');
INSERT INTO tbarea VALUES ('130930', '孟村回族自治县', '130900');
INSERT INTO tbarea VALUES ('130981', '泊头市', '130900');
INSERT INTO tbarea VALUES ('130982', '任丘市', '130900');
INSERT INTO tbarea VALUES ('130983', '黄骅市', '130900');
INSERT INTO tbarea VALUES ('130984', '河间市', '130900');
INSERT INTO tbarea VALUES ('131000', '廊坊市', '130000');
INSERT INTO tbarea VALUES ('131001', '市辖区', '131000');
INSERT INTO tbarea VALUES ('131002', '安次区', '131000');
INSERT INTO tbarea VALUES ('131003', '广阳区', '131000');
INSERT INTO tbarea VALUES ('131022', '固安县', '131000');
INSERT INTO tbarea VALUES ('131023', '永清县', '131000');
INSERT INTO tbarea VALUES ('131024', '香河县', '131000');
INSERT INTO tbarea VALUES ('131025', '大城县', '131000');
INSERT INTO tbarea VALUES ('131026', '文安县', '131000');
INSERT INTO tbarea VALUES ('131028', '大厂回族自治县', '131000');
INSERT INTO tbarea VALUES ('131081', '霸州市', '131000');
INSERT INTO tbarea VALUES ('131082', '三河市', '131000');
INSERT INTO tbarea VALUES ('131100', '衡水市', '130000');
INSERT INTO tbarea VALUES ('131101', '市辖区', '131100');
INSERT INTO tbarea VALUES ('131102', '桃城区', '131100');
INSERT INTO tbarea VALUES ('131121', '枣强县', '131100');
INSERT INTO tbarea VALUES ('131122', '武邑县', '131100');
INSERT INTO tbarea VALUES ('131123', '武强县', '131100');
INSERT INTO tbarea VALUES ('131124', '饶阳县', '131100');
INSERT INTO tbarea VALUES ('131125', '安平县', '131100');
INSERT INTO tbarea VALUES ('131126', '故城县', '131100');
INSERT INTO tbarea VALUES ('131127', '景县', '131100');
INSERT INTO tbarea VALUES ('131128', '阜城县', '131100');
INSERT INTO tbarea VALUES ('131181', '冀州市', '131100');
INSERT INTO tbarea VALUES ('131182', '深州市', '131100');
INSERT INTO tbarea VALUES ('140000', '山西省', '0');
INSERT INTO tbarea VALUES ('140100', '太原市', '140000');
INSERT INTO tbarea VALUES ('140101', '市辖区', '140100');
INSERT INTO tbarea VALUES ('140105', '小店区', '140100');
INSERT INTO tbarea VALUES ('140106', '迎泽区', '140100');
INSERT INTO tbarea VALUES ('140107', '杏花岭区', '140100');
INSERT INTO tbarea VALUES ('140108', '尖草坪区', '140100');
INSERT INTO tbarea VALUES ('140109', '万柏林区', '140100');
INSERT INTO tbarea VALUES ('140110', '晋源区', '140100');
INSERT INTO tbarea VALUES ('140121', '清徐县', '140100');
INSERT INTO tbarea VALUES ('140122', '阳曲县', '140100');
INSERT INTO tbarea VALUES ('140123', '娄烦县', '140100');
INSERT INTO tbarea VALUES ('140181', '古交市', '140100');
INSERT INTO tbarea VALUES ('140200', '大同市', '140000');
INSERT INTO tbarea VALUES ('140201', '市辖区', '140200');
INSERT INTO tbarea VALUES ('140202', '城区', '140200');
INSERT INTO tbarea VALUES ('140203', '矿区', '140200');
INSERT INTO tbarea VALUES ('140211', '南郊区', '140200');
INSERT INTO tbarea VALUES ('140212', '新荣区', '140200');
INSERT INTO tbarea VALUES ('140221', '阳高县', '140200');
INSERT INTO tbarea VALUES ('140222', '天镇县', '140200');
INSERT INTO tbarea VALUES ('140223', '广灵县', '140200');
INSERT INTO tbarea VALUES ('140224', '灵丘县', '140200');
INSERT INTO tbarea VALUES ('140225', '浑源县', '140200');
INSERT INTO tbarea VALUES ('140226', '左云县', '140200');
INSERT INTO tbarea VALUES ('140227', '大同县', '140200');
INSERT INTO tbarea VALUES ('140300', '阳泉市', '140000');
INSERT INTO tbarea VALUES ('140301', '市辖区', '140300');
INSERT INTO tbarea VALUES ('140302', '城区', '140300');
INSERT INTO tbarea VALUES ('140303', '矿区', '140300');
INSERT INTO tbarea VALUES ('140311', '郊区', '140300');
INSERT INTO tbarea VALUES ('140321', '平定县', '140300');
INSERT INTO tbarea VALUES ('140322', '盂县', '140300');
INSERT INTO tbarea VALUES ('140400', '长治市', '140000');
INSERT INTO tbarea VALUES ('140401', '市辖区', '140400');
INSERT INTO tbarea VALUES ('140402', '城区', '140400');
INSERT INTO tbarea VALUES ('140411', '郊区', '140400');
INSERT INTO tbarea VALUES ('140421', '长治县', '140400');
INSERT INTO tbarea VALUES ('140423', '襄垣县', '140400');
INSERT INTO tbarea VALUES ('140424', '屯留县', '140400');
INSERT INTO tbarea VALUES ('140425', '平顺县', '140400');
INSERT INTO tbarea VALUES ('140426', '黎城县', '140400');
INSERT INTO tbarea VALUES ('140427', '壶关县', '140400');
INSERT INTO tbarea VALUES ('140428', '长子县', '140400');
INSERT INTO tbarea VALUES ('140429', '武乡县', '140400');
INSERT INTO tbarea VALUES ('140430', '沁县', '140400');
INSERT INTO tbarea VALUES ('140431', '沁源县', '140400');
INSERT INTO tbarea VALUES ('140481', '潞城市', '140400');
INSERT INTO tbarea VALUES ('140500', '晋城市', '140000');
INSERT INTO tbarea VALUES ('140501', '晋城市市辖区', '140500');
INSERT INTO tbarea VALUES ('140502', '城区', '140500');
INSERT INTO tbarea VALUES ('140521', '沁水县', '140500');
INSERT INTO tbarea VALUES ('140522', '阳城县', '140500');
INSERT INTO tbarea VALUES ('140524', '陵川县', '140500');
INSERT INTO tbarea VALUES ('140525', '泽州县', '140500');
INSERT INTO tbarea VALUES ('140581', '高平市', '140500');
INSERT INTO tbarea VALUES ('140600', '朔州市', '140000');
INSERT INTO tbarea VALUES ('140601', '市辖区', '140600');
INSERT INTO tbarea VALUES ('140602', '朔城区', '140600');
INSERT INTO tbarea VALUES ('140603', '平鲁区', '140600');
INSERT INTO tbarea VALUES ('140621', '山阴县', '140600');
INSERT INTO tbarea VALUES ('140622', '应县', '140600');
INSERT INTO tbarea VALUES ('140623', '右玉县', '140600');
INSERT INTO tbarea VALUES ('140624', '怀仁县', '140600');
INSERT INTO tbarea VALUES ('140700', '晋中市', '140000');
INSERT INTO tbarea VALUES ('140701', '市辖区', '140700');
INSERT INTO tbarea VALUES ('140702', '榆次区', '140700');
INSERT INTO tbarea VALUES ('140721', '榆社县', '140700');
INSERT INTO tbarea VALUES ('140722', '左权县', '140700');
INSERT INTO tbarea VALUES ('140723', '和顺县', '140700');
INSERT INTO tbarea VALUES ('140724', '昔阳县', '140700');
INSERT INTO tbarea VALUES ('140725', '寿阳县', '140700');
INSERT INTO tbarea VALUES ('140726', '太谷县', '140700');
INSERT INTO tbarea VALUES ('140727', '祁县', '140700');
INSERT INTO tbarea VALUES ('140728', '平遥县', '140700');
INSERT INTO tbarea VALUES ('140729', '灵石县', '140700');
INSERT INTO tbarea VALUES ('140781', '介休市', '140700');
INSERT INTO tbarea VALUES ('140800', '运城市', '140000');
INSERT INTO tbarea VALUES ('140801', '市辖区', '140800');
INSERT INTO tbarea VALUES ('140802', '盐湖区', '140800');
INSERT INTO tbarea VALUES ('140821', '临猗县', '140800');
INSERT INTO tbarea VALUES ('140822', '万荣县', '140800');
INSERT INTO tbarea VALUES ('140823', '闻喜县', '140800');
INSERT INTO tbarea VALUES ('140824', '稷山县', '140800');
INSERT INTO tbarea VALUES ('140825', '新绛县', '140800');
INSERT INTO tbarea VALUES ('140826', '绛县', '140800');
INSERT INTO tbarea VALUES ('140827', '垣曲县', '140800');
INSERT INTO tbarea VALUES ('140828', '夏县', '140800');
INSERT INTO tbarea VALUES ('140829', '平陆县', '140800');
INSERT INTO tbarea VALUES ('140830', '芮城县', '140800');
INSERT INTO tbarea VALUES ('140881', '永济市', '140800');
INSERT INTO tbarea VALUES ('140882', '河津市', '140800');
INSERT INTO tbarea VALUES ('140900', '忻州市', '140000');
INSERT INTO tbarea VALUES ('140901', '市辖区', '140900');
INSERT INTO tbarea VALUES ('140902', '忻府区', '140900');
INSERT INTO tbarea VALUES ('140921', '定襄县', '140900');
INSERT INTO tbarea VALUES ('140922', '五台县', '140900');
INSERT INTO tbarea VALUES ('140923', '代县', '140900');
INSERT INTO tbarea VALUES ('140924', '繁峙县', '140900');
INSERT INTO tbarea VALUES ('140925', '宁武县', '140900');
INSERT INTO tbarea VALUES ('140926', '静乐县', '140900');
INSERT INTO tbarea VALUES ('140927', '神池县', '140900');
INSERT INTO tbarea VALUES ('140928', '五寨县', '140900');
INSERT INTO tbarea VALUES ('140929', '岢岚县', '140900');
INSERT INTO tbarea VALUES ('140930', '河曲县', '140900');
INSERT INTO tbarea VALUES ('140931', '保德县', '140900');
INSERT INTO tbarea VALUES ('140932', '偏关县', '140900');
INSERT INTO tbarea VALUES ('140981', '原平市', '140900');
INSERT INTO tbarea VALUES ('141000', '临汾市', '140000');
INSERT INTO tbarea VALUES ('141001', '市辖区', '141000');
INSERT INTO tbarea VALUES ('141002', '尧都区', '141000');
INSERT INTO tbarea VALUES ('141021', '曲沃县', '141000');
INSERT INTO tbarea VALUES ('141022', '翼城县', '141000');
INSERT INTO tbarea VALUES ('141023', '襄汾县', '141000');
INSERT INTO tbarea VALUES ('141024', '洪洞县', '141000');
INSERT INTO tbarea VALUES ('141025', '古县', '141000');
INSERT INTO tbarea VALUES ('141026', '安泽县', '141000');
INSERT INTO tbarea VALUES ('141027', '浮山县', '141000');
INSERT INTO tbarea VALUES ('141028', '吉县', '141000');
INSERT INTO tbarea VALUES ('141029', '乡宁县', '141000');
INSERT INTO tbarea VALUES ('141030', '大宁县', '141000');
INSERT INTO tbarea VALUES ('141031', '隰县', '141000');
INSERT INTO tbarea VALUES ('141032', '永和县', '141000');
INSERT INTO tbarea VALUES ('141033', '蒲县', '141000');
INSERT INTO tbarea VALUES ('141034', '汾西县', '141000');
INSERT INTO tbarea VALUES ('141081', '侯马市', '141000');
INSERT INTO tbarea VALUES ('141082', '霍州市', '141000');
INSERT INTO tbarea VALUES ('141100', '吕梁市', '140000');
INSERT INTO tbarea VALUES ('141101', '市辖区', '141100');
INSERT INTO tbarea VALUES ('141102', '离石区', '141100');
INSERT INTO tbarea VALUES ('141121', '文水县', '141100');
INSERT INTO tbarea VALUES ('141122', '交城县', '141100');
INSERT INTO tbarea VALUES ('141123', '兴县', '141100');
INSERT INTO tbarea VALUES ('141124', '临县', '141100');
INSERT INTO tbarea VALUES ('141125', '柳林县', '141100');
INSERT INTO tbarea VALUES ('141126', '石楼县', '141100');
INSERT INTO tbarea VALUES ('141127', '岚县', '141100');
INSERT INTO tbarea VALUES ('141128', '方山县', '141100');
INSERT INTO tbarea VALUES ('141129', '中阳县', '141100');
INSERT INTO tbarea VALUES ('141130', '交口县', '141100');
INSERT INTO tbarea VALUES ('141181', '孝义市', '141100');
INSERT INTO tbarea VALUES ('141182', '汾阳市', '141100');
INSERT INTO tbarea VALUES ('150000', '内蒙古自治区', '0');
INSERT INTO tbarea VALUES ('150100', '呼和浩特市', '150000');
INSERT INTO tbarea VALUES ('150101', '市辖区', '150100');
INSERT INTO tbarea VALUES ('150102', '新城区', '150100');
INSERT INTO tbarea VALUES ('150103', '回民区', '150100');
INSERT INTO tbarea VALUES ('150104', '玉泉区', '150100');
INSERT INTO tbarea VALUES ('150105', '赛罕区', '150100');
INSERT INTO tbarea VALUES ('150121', '土默特左旗', '150100');
INSERT INTO tbarea VALUES ('150122', '托克托县', '150100');
INSERT INTO tbarea VALUES ('150123', '和林格尔县', '150100');
INSERT INTO tbarea VALUES ('150124', '清水河县', '150100');
INSERT INTO tbarea VALUES ('150125', '武川县', '150100');
INSERT INTO tbarea VALUES ('150200', '包头市', '150000');
INSERT INTO tbarea VALUES ('150201', '市辖区', '150200');
INSERT INTO tbarea VALUES ('150202', '东河区', '150200');
INSERT INTO tbarea VALUES ('150203', '昆都仑区', '150200');
INSERT INTO tbarea VALUES ('150204', '青山区', '150200');
INSERT INTO tbarea VALUES ('150205', '石拐区', '150200');
INSERT INTO tbarea VALUES ('150206', '白云鄂博矿区', '150200');
INSERT INTO tbarea VALUES ('150207', '九原区', '150200');
INSERT INTO tbarea VALUES ('150221', '土默特右旗', '150200');
INSERT INTO tbarea VALUES ('150222', '固阳县', '150200');
INSERT INTO tbarea VALUES ('150223', '达尔罕茂明安联合旗', '150200');
INSERT INTO tbarea VALUES ('150300', '乌海市', '150000');
INSERT INTO tbarea VALUES ('150301', '市辖区', '150300');
INSERT INTO tbarea VALUES ('150302', '海勃湾区', '150300');
INSERT INTO tbarea VALUES ('150303', '海南区', '150300');
INSERT INTO tbarea VALUES ('150304', '乌达区', '150300');
INSERT INTO tbarea VALUES ('150400', '赤峰市', '150000');
INSERT INTO tbarea VALUES ('150401', '市辖区', '150400');
INSERT INTO tbarea VALUES ('150402', '红山区', '150400');
INSERT INTO tbarea VALUES ('150403', '元宝山区', '150400');
INSERT INTO tbarea VALUES ('150404', '松山区', '150400');
INSERT INTO tbarea VALUES ('150421', '阿鲁科尔沁旗', '150400');
INSERT INTO tbarea VALUES ('150422', '巴林左旗', '150400');
INSERT INTO tbarea VALUES ('150423', '巴林右旗', '150400');
INSERT INTO tbarea VALUES ('150424', '林西县', '150400');
INSERT INTO tbarea VALUES ('150425', '克什克腾旗', '150400');
INSERT INTO tbarea VALUES ('150426', '翁牛特旗', '150400');
INSERT INTO tbarea VALUES ('150428', '喀喇沁旗', '150400');
INSERT INTO tbarea VALUES ('150429', '宁城县', '150400');
INSERT INTO tbarea VALUES ('150430', '敖汉旗', '150400');
INSERT INTO tbarea VALUES ('150500', '通辽市', '150000');
INSERT INTO tbarea VALUES ('150501', '市辖区', '150500');
INSERT INTO tbarea VALUES ('150502', '科尔沁区', '150500');
INSERT INTO tbarea VALUES ('150521', '科尔沁左翼中旗', '150500');
INSERT INTO tbarea VALUES ('150522', '科尔沁左翼后旗', '150500');
INSERT INTO tbarea VALUES ('150523', '开鲁县', '150500');
INSERT INTO tbarea VALUES ('150524', '库伦旗', '150500');
INSERT INTO tbarea VALUES ('150525', '奈曼旗', '150500');
INSERT INTO tbarea VALUES ('150526', '扎鲁特旗', '150500');
INSERT INTO tbarea VALUES ('150581', '霍林郭勒市', '150500');
INSERT INTO tbarea VALUES ('150600', '鄂尔多斯市', '150000');
INSERT INTO tbarea VALUES ('150601', '市辖区', '150600');
INSERT INTO tbarea VALUES ('150602', '东胜区', '150600');
INSERT INTO tbarea VALUES ('150621', '达拉特旗', '150600');
INSERT INTO tbarea VALUES ('150622', '准格尔旗', '150600');
INSERT INTO tbarea VALUES ('150623', '鄂托克前旗', '150600');
INSERT INTO tbarea VALUES ('150624', '鄂托克旗', '150600');
INSERT INTO tbarea VALUES ('150625', '杭锦旗', '150600');
INSERT INTO tbarea VALUES ('150626', '乌审旗', '150600');
INSERT INTO tbarea VALUES ('150627', '伊金霍洛旗', '150600');
INSERT INTO tbarea VALUES ('150700', '呼伦贝尔市', '150000');
INSERT INTO tbarea VALUES ('150701', '市辖区', '150700');
INSERT INTO tbarea VALUES ('150702', '海拉尔区', '150700');
INSERT INTO tbarea VALUES ('150721', '阿荣旗', '150700');
INSERT INTO tbarea VALUES ('150722', '莫力达瓦达斡尔族自治旗', '150700');
INSERT INTO tbarea VALUES ('150723', '鄂伦春自治旗', '150700');
INSERT INTO tbarea VALUES ('150724', '鄂温克族自治旗', '150700');
INSERT INTO tbarea VALUES ('150725', '陈巴尔虎旗', '150700');
INSERT INTO tbarea VALUES ('150726', '新巴尔虎左旗', '150700');
INSERT INTO tbarea VALUES ('150727', '新巴尔虎右旗', '150700');
INSERT INTO tbarea VALUES ('150781', '满洲里市', '150700');
INSERT INTO tbarea VALUES ('150782', '牙克石市', '150700');
INSERT INTO tbarea VALUES ('150783', '扎兰屯市', '150700');
INSERT INTO tbarea VALUES ('150784', '额尔古纳市', '150700');
INSERT INTO tbarea VALUES ('150785', '根河市', '150700');
INSERT INTO tbarea VALUES ('150800', '巴彦淖尔市', '150000');
INSERT INTO tbarea VALUES ('150801', '市辖区', '150800');
INSERT INTO tbarea VALUES ('150802', '临河区', '150800');
INSERT INTO tbarea VALUES ('150821', '五原县', '150800');
INSERT INTO tbarea VALUES ('150822', '磴口县', '150800');
INSERT INTO tbarea VALUES ('150823', '乌拉特前旗', '150800');
INSERT INTO tbarea VALUES ('150824', '乌拉特中旗', '150800');
INSERT INTO tbarea VALUES ('150825', '乌拉特后旗', '150800');
INSERT INTO tbarea VALUES ('150826', '杭锦后旗', '150800');
INSERT INTO tbarea VALUES ('150900', '乌兰察布市', '150000');
INSERT INTO tbarea VALUES ('150901', '市辖区', '150900');
INSERT INTO tbarea VALUES ('150902', '集宁区', '150900');
INSERT INTO tbarea VALUES ('150921', '卓资县', '150900');
INSERT INTO tbarea VALUES ('150922', '化德县', '150900');
INSERT INTO tbarea VALUES ('150923', '商都县', '150900');
INSERT INTO tbarea VALUES ('150924', '兴和县', '150900');
INSERT INTO tbarea VALUES ('150925', '凉城县', '150900');
INSERT INTO tbarea VALUES ('150926', '察哈尔右翼前旗', '150900');
INSERT INTO tbarea VALUES ('150927', '察哈尔右翼中旗', '150900');
INSERT INTO tbarea VALUES ('150928', '察哈尔右翼后旗', '150900');
INSERT INTO tbarea VALUES ('150929', '四子王旗', '150900');
INSERT INTO tbarea VALUES ('150981', '丰镇市', '150900');
INSERT INTO tbarea VALUES ('152200', '兴安盟', '150000');
INSERT INTO tbarea VALUES ('152201', '乌兰浩特市', '152200');
INSERT INTO tbarea VALUES ('152202', '阿尔山市', '152200');
INSERT INTO tbarea VALUES ('152221', '科尔沁右翼前旗', '152200');
INSERT INTO tbarea VALUES ('152222', '科尔沁右翼中旗', '152200');
INSERT INTO tbarea VALUES ('152223', '扎赉特旗', '152200');
INSERT INTO tbarea VALUES ('152224', '突泉县', '152200');
INSERT INTO tbarea VALUES ('152500', '锡林郭勒盟', '150000');
INSERT INTO tbarea VALUES ('152501', '二连浩特市', '152500');
INSERT INTO tbarea VALUES ('152502', '锡林浩特市', '152500');
INSERT INTO tbarea VALUES ('152522', '阿巴嘎旗', '152500');
INSERT INTO tbarea VALUES ('152523', '苏尼特左旗', '152500');
INSERT INTO tbarea VALUES ('152524', '苏尼特右旗', '152500');
INSERT INTO tbarea VALUES ('152525', '东乌珠穆沁旗', '152500');
INSERT INTO tbarea VALUES ('152526', '西乌珠穆沁旗', '152500');
INSERT INTO tbarea VALUES ('152527', '太仆寺旗', '152500');
INSERT INTO tbarea VALUES ('152528', '镶黄旗', '152500');
INSERT INTO tbarea VALUES ('152529', '正镶白旗', '152500');
INSERT INTO tbarea VALUES ('152530', '正蓝旗', '152500');
INSERT INTO tbarea VALUES ('152531', '多伦县', '152500');
INSERT INTO tbarea VALUES ('152900', '阿拉善盟', '150000');
INSERT INTO tbarea VALUES ('152921', '阿拉善左旗', '152900');
INSERT INTO tbarea VALUES ('152922', '阿拉善右旗', '152900');
INSERT INTO tbarea VALUES ('152923', '额济纳旗', '152900');
INSERT INTO tbarea VALUES ('210000', '辽宁省', '0');
INSERT INTO tbarea VALUES ('210100', '沈阳市', '210000');
INSERT INTO tbarea VALUES ('210101', '市辖区', '210100');
INSERT INTO tbarea VALUES ('210102', '和平区', '210100');
INSERT INTO tbarea VALUES ('210103', '沈河区', '210100');
INSERT INTO tbarea VALUES ('210104', '大东区', '210100');
INSERT INTO tbarea VALUES ('210105', '皇姑区', '210100');
INSERT INTO tbarea VALUES ('210106', '铁西区', '210100');
INSERT INTO tbarea VALUES ('210111', '苏家屯区', '210100');
INSERT INTO tbarea VALUES ('210112', '东陵区', '210100');
INSERT INTO tbarea VALUES ('210113', '沈北新区', '210100');
INSERT INTO tbarea VALUES ('210114', '于洪区', '210100');
INSERT INTO tbarea VALUES ('210122', '辽中县', '210100');
INSERT INTO tbarea VALUES ('210123', '康平县', '210100');
INSERT INTO tbarea VALUES ('210124', '法库县', '210100');
INSERT INTO tbarea VALUES ('210181', '新民市', '210100');
INSERT INTO tbarea VALUES ('210200', '大连市', '210000');
INSERT INTO tbarea VALUES ('210201', '市辖区', '210200');
INSERT INTO tbarea VALUES ('210202', '中山区', '210200');
INSERT INTO tbarea VALUES ('210203', '西岗区', '210200');
INSERT INTO tbarea VALUES ('210204', '沙河口区', '210200');
INSERT INTO tbarea VALUES ('210211', '甘井子区', '210200');
INSERT INTO tbarea VALUES ('210212', '旅顺口区', '210200');
INSERT INTO tbarea VALUES ('210213', '金州区', '210200');
INSERT INTO tbarea VALUES ('210224', '长海县', '210200');
INSERT INTO tbarea VALUES ('210281', '瓦房店市', '210200');
INSERT INTO tbarea VALUES ('210282', '普兰店市', '210200');
INSERT INTO tbarea VALUES ('210283', '庄河市', '210200');
INSERT INTO tbarea VALUES ('210300', '鞍山市', '210000');
INSERT INTO tbarea VALUES ('210301', '市辖区', '210300');
INSERT INTO tbarea VALUES ('210302', '铁东区', '210300');
INSERT INTO tbarea VALUES ('210303', '铁西区', '210300');
INSERT INTO tbarea VALUES ('210304', '立山区', '210300');
INSERT INTO tbarea VALUES ('210311', '千山区', '210300');
INSERT INTO tbarea VALUES ('210321', '台安县', '210300');
INSERT INTO tbarea VALUES ('210323', '岫岩满族自治县', '210300');
INSERT INTO tbarea VALUES ('210381', '海城市', '210300');
INSERT INTO tbarea VALUES ('210400', '抚顺市', '210000');
INSERT INTO tbarea VALUES ('210401', '市辖区', '210400');
INSERT INTO tbarea VALUES ('210402', '新抚区', '210400');
INSERT INTO tbarea VALUES ('210403', '东洲区', '210400');
INSERT INTO tbarea VALUES ('210404', '望花区', '210400');
INSERT INTO tbarea VALUES ('210411', '顺城区', '210400');
INSERT INTO tbarea VALUES ('210421', '抚顺县', '210400');
INSERT INTO tbarea VALUES ('210422', '新宾满族自治县', '210400');
INSERT INTO tbarea VALUES ('210423', '清原满族自治县', '210400');
INSERT INTO tbarea VALUES ('210500', '本溪市', '210000');
INSERT INTO tbarea VALUES ('210501', '市辖区', '210500');
INSERT INTO tbarea VALUES ('210502', '平山区', '210500');
INSERT INTO tbarea VALUES ('210503', '溪湖区', '210500');
INSERT INTO tbarea VALUES ('210504', '明山区', '210500');
INSERT INTO tbarea VALUES ('210505', '南芬区', '210500');
INSERT INTO tbarea VALUES ('210521', '本溪满族自治县', '210500');
INSERT INTO tbarea VALUES ('210522', '桓仁满族自治县', '210500');
INSERT INTO tbarea VALUES ('210600', '丹东市', '210000');
INSERT INTO tbarea VALUES ('210601', '市辖区', '210600');
INSERT INTO tbarea VALUES ('210602', '元宝区', '210600');
INSERT INTO tbarea VALUES ('210603', '振兴区', '210600');
INSERT INTO tbarea VALUES ('210604', '振安区', '210600');
INSERT INTO tbarea VALUES ('210624', '宽甸满族自治县', '210600');
INSERT INTO tbarea VALUES ('210681', '东港市', '210600');
INSERT INTO tbarea VALUES ('210682', '凤城市', '210600');
INSERT INTO tbarea VALUES ('210700', '锦州市', '210000');
INSERT INTO tbarea VALUES ('210701', '市辖区', '210700');
INSERT INTO tbarea VALUES ('210702', '古塔区', '210700');
INSERT INTO tbarea VALUES ('210703', '凌河区', '210700');
INSERT INTO tbarea VALUES ('210711', '太和区', '210700');
INSERT INTO tbarea VALUES ('210726', '黑山县', '210700');
INSERT INTO tbarea VALUES ('210727', '义县', '210700');
INSERT INTO tbarea VALUES ('210781', '凌海市', '210700');
INSERT INTO tbarea VALUES ('210782', '北镇市', '210700');
INSERT INTO tbarea VALUES ('210800', '营口市', '210000');
INSERT INTO tbarea VALUES ('210801', '市辖区', '210800');
INSERT INTO tbarea VALUES ('210802', '站前区', '210800');
INSERT INTO tbarea VALUES ('210803', '西市区', '210800');
INSERT INTO tbarea VALUES ('210804', '鲅鱼圈区', '210800');
INSERT INTO tbarea VALUES ('210811', '老边区', '210800');
INSERT INTO tbarea VALUES ('210881', '盖州市', '210800');
INSERT INTO tbarea VALUES ('210882', '大石桥市', '210800');
INSERT INTO tbarea VALUES ('210900', '阜新市', '210000');
INSERT INTO tbarea VALUES ('210901', '市辖区', '210900');
INSERT INTO tbarea VALUES ('210902', '海州区', '210900');
INSERT INTO tbarea VALUES ('210903', '新邱区', '210900');
INSERT INTO tbarea VALUES ('210904', '太平区', '210900');
INSERT INTO tbarea VALUES ('210905', '清河门区', '210900');
INSERT INTO tbarea VALUES ('210911', '细河区', '210900');
INSERT INTO tbarea VALUES ('210921', '阜新蒙古族自治县', '210900');
INSERT INTO tbarea VALUES ('210922', '彰武县', '210900');
INSERT INTO tbarea VALUES ('211000', '辽阳市', '210000');
INSERT INTO tbarea VALUES ('211001', '市辖区', '211000');
INSERT INTO tbarea VALUES ('211002', '白塔区', '211000');
INSERT INTO tbarea VALUES ('211003', '文圣区', '211000');
INSERT INTO tbarea VALUES ('211004', '宏伟区', '211000');
INSERT INTO tbarea VALUES ('211005', '弓长岭区', '211000');
INSERT INTO tbarea VALUES ('211011', '太子河区', '211000');
INSERT INTO tbarea VALUES ('211021', '辽阳县', '211000');
INSERT INTO tbarea VALUES ('211081', '灯塔市', '211000');
INSERT INTO tbarea VALUES ('211100', '盘锦市', '210000');
INSERT INTO tbarea VALUES ('211101', '市辖区', '211100');
INSERT INTO tbarea VALUES ('211102', '双台子区', '211100');
INSERT INTO tbarea VALUES ('211103', '兴隆台区', '211100');
INSERT INTO tbarea VALUES ('211121', '大洼县', '211100');
INSERT INTO tbarea VALUES ('211122', '盘山县', '211100');
INSERT INTO tbarea VALUES ('211200', '铁岭市', '210000');
INSERT INTO tbarea VALUES ('211201', '市辖区', '211200');
INSERT INTO tbarea VALUES ('211202', '银州区', '211200');
INSERT INTO tbarea VALUES ('211204', '清河区', '211200');
INSERT INTO tbarea VALUES ('211221', '铁岭县', '211200');
INSERT INTO tbarea VALUES ('211223', '西丰县', '211200');
INSERT INTO tbarea VALUES ('211224', '昌图县', '211200');
INSERT INTO tbarea VALUES ('211281', '调兵山市', '211200');
INSERT INTO tbarea VALUES ('211282', '开原市', '211200');
INSERT INTO tbarea VALUES ('211300', '朝阳市', '210000');
INSERT INTO tbarea VALUES ('211301', '市辖区', '211300');
INSERT INTO tbarea VALUES ('211302', '双塔区', '211300');
INSERT INTO tbarea VALUES ('211303', '龙城区', '211300');
INSERT INTO tbarea VALUES ('211321', '朝阳县', '211300');
INSERT INTO tbarea VALUES ('211322', '建平县', '211300');
INSERT INTO tbarea VALUES ('211324', '喀喇沁左翼蒙古族自治县', '211300');
INSERT INTO tbarea VALUES ('211381', '北票市', '211300');
INSERT INTO tbarea VALUES ('211382', '凌源市', '211300');
INSERT INTO tbarea VALUES ('211400', '葫芦岛市', '210000');
INSERT INTO tbarea VALUES ('211401', '市辖区', '211400');
INSERT INTO tbarea VALUES ('211402', '连山区', '211400');
INSERT INTO tbarea VALUES ('211403', '龙港区', '211400');
INSERT INTO tbarea VALUES ('211404', '南票区', '211400');
INSERT INTO tbarea VALUES ('211421', '绥中县', '211400');
INSERT INTO tbarea VALUES ('211422', '建昌县', '211400');
INSERT INTO tbarea VALUES ('211481', '兴城市', '211400');
INSERT INTO tbarea VALUES ('220000', '吉林省', '0');
INSERT INTO tbarea VALUES ('220100', '长春市', '220000');
INSERT INTO tbarea VALUES ('220101', '市辖区', '220100');
INSERT INTO tbarea VALUES ('220102', '南关区', '220100');
INSERT INTO tbarea VALUES ('220103', '宽城区', '220100');
INSERT INTO tbarea VALUES ('220104', '朝阳区', '220100');
INSERT INTO tbarea VALUES ('220105', '二道区', '220100');
INSERT INTO tbarea VALUES ('220106', '绿园区', '220100');
INSERT INTO tbarea VALUES ('220112', '双阳区', '220100');
INSERT INTO tbarea VALUES ('220122', '农安县', '220100');
INSERT INTO tbarea VALUES ('220181', '九台市', '220100');
INSERT INTO tbarea VALUES ('220182', '榆树市', '220100');
INSERT INTO tbarea VALUES ('220183', '德惠市', '220100');
INSERT INTO tbarea VALUES ('220200', '吉林市', '220000');
INSERT INTO tbarea VALUES ('220201', '市辖区', '220200');
INSERT INTO tbarea VALUES ('220202', '昌邑区', '220200');
INSERT INTO tbarea VALUES ('220203', '龙潭区', '220200');
INSERT INTO tbarea VALUES ('220204', '船营区', '220200');
INSERT INTO tbarea VALUES ('220211', '丰满区', '220200');
INSERT INTO tbarea VALUES ('220221', '永吉县', '220200');
INSERT INTO tbarea VALUES ('220281', '蛟河市', '220200');
INSERT INTO tbarea VALUES ('220282', '桦甸市', '220200');
INSERT INTO tbarea VALUES ('220283', '舒兰市', '220200');
INSERT INTO tbarea VALUES ('220284', '磐石市', '220200');
INSERT INTO tbarea VALUES ('220300', '四平市', '220000');
INSERT INTO tbarea VALUES ('220301', '市辖区', '220300');
INSERT INTO tbarea VALUES ('220302', '铁西区', '220300');
INSERT INTO tbarea VALUES ('220303', '铁东区', '220300');
INSERT INTO tbarea VALUES ('220322', '梨树县', '220300');
INSERT INTO tbarea VALUES ('220323', '伊通满族自治县', '220300');
INSERT INTO tbarea VALUES ('220381', '公主岭市', '220300');
INSERT INTO tbarea VALUES ('220382', '双辽市', '220300');
INSERT INTO tbarea VALUES ('220400', '辽源市', '220000');
INSERT INTO tbarea VALUES ('220401', '市辖区', '220400');
INSERT INTO tbarea VALUES ('220402', '龙山区', '220400');
INSERT INTO tbarea VALUES ('220403', '西安区', '220400');
INSERT INTO tbarea VALUES ('220421', '东丰县', '220400');
INSERT INTO tbarea VALUES ('220422', '东辽县', '220400');
INSERT INTO tbarea VALUES ('220500', '通化市', '220000');
INSERT INTO tbarea VALUES ('220501', '市辖区', '220500');
INSERT INTO tbarea VALUES ('220502', '东昌区', '220500');
INSERT INTO tbarea VALUES ('220503', '二道江区', '220500');
INSERT INTO tbarea VALUES ('220521', '通化县', '220500');
INSERT INTO tbarea VALUES ('220523', '辉南县', '220500');
INSERT INTO tbarea VALUES ('220524', '柳河县', '220500');
INSERT INTO tbarea VALUES ('220581', '梅河口市', '220500');
INSERT INTO tbarea VALUES ('220582', '集安市', '220500');
INSERT INTO tbarea VALUES ('220600', '白山市', '220000');
INSERT INTO tbarea VALUES ('220601', '市辖区', '220600');
INSERT INTO tbarea VALUES ('220602', '浑江区', '220600');
INSERT INTO tbarea VALUES ('220605', '江源区', '220600');
INSERT INTO tbarea VALUES ('220621', '抚松县', '220600');
INSERT INTO tbarea VALUES ('220622', '靖宇县', '220600');
INSERT INTO tbarea VALUES ('220623', '长白朝鲜族自治县', '220600');
INSERT INTO tbarea VALUES ('220681', '临江市', '220600');
INSERT INTO tbarea VALUES ('220700', '松原市', '220000');
INSERT INTO tbarea VALUES ('220701', '市辖区', '220700');
INSERT INTO tbarea VALUES ('220702', '宁江区', '220700');
INSERT INTO tbarea VALUES ('220721', '前郭尔罗斯蒙古族自治县', '220700');
INSERT INTO tbarea VALUES ('220722', '长岭县', '220700');
INSERT INTO tbarea VALUES ('220723', '乾安县', '220700');
INSERT INTO tbarea VALUES ('220724', '扶余县', '220700');
INSERT INTO tbarea VALUES ('220800', '白城市', '220000');
INSERT INTO tbarea VALUES ('220801', '市辖区', '220800');
INSERT INTO tbarea VALUES ('220802', '洮北区', '220800');
INSERT INTO tbarea VALUES ('220821', '镇赉县', '220800');
INSERT INTO tbarea VALUES ('220822', '通榆县', '220800');
INSERT INTO tbarea VALUES ('220881', '洮南市', '220800');
INSERT INTO tbarea VALUES ('220882', '大安市', '220800');
INSERT INTO tbarea VALUES ('222400', '延边朝鲜族自治州', '220000');
INSERT INTO tbarea VALUES ('222401', '延吉市', '222400');
INSERT INTO tbarea VALUES ('222402', '图们市', '222400');
INSERT INTO tbarea VALUES ('222403', '敦化市', '222400');
INSERT INTO tbarea VALUES ('222404', '珲春市', '222400');
INSERT INTO tbarea VALUES ('222405', '龙井市', '222400');
INSERT INTO tbarea VALUES ('222406', '和龙市', '222400');
INSERT INTO tbarea VALUES ('222424', '汪清县', '222400');
INSERT INTO tbarea VALUES ('222426', '安图县', '222400');
INSERT INTO tbarea VALUES ('230000', '黑龙江省', '0');
INSERT INTO tbarea VALUES ('230100', '哈尔滨市', '230000');
INSERT INTO tbarea VALUES ('230101', '市辖区', '230100');
INSERT INTO tbarea VALUES ('230102', '道里区', '230100');
INSERT INTO tbarea VALUES ('230103', '南岗区', '230100');
INSERT INTO tbarea VALUES ('230104', '道外区', '230100');
INSERT INTO tbarea VALUES ('230108', '平房区', '230100');
INSERT INTO tbarea VALUES ('230109', '松北区', '230100');
INSERT INTO tbarea VALUES ('230110', '香坊区', '230100');
INSERT INTO tbarea VALUES ('230111', '呼兰区', '230100');
INSERT INTO tbarea VALUES ('230112', '阿城区', '230100');
INSERT INTO tbarea VALUES ('230123', '依兰县', '230100');
INSERT INTO tbarea VALUES ('230124', '方正县', '230100');
INSERT INTO tbarea VALUES ('230125', '宾县', '230100');
INSERT INTO tbarea VALUES ('230126', '巴彦县', '230100');
INSERT INTO tbarea VALUES ('230127', '木兰县', '230100');
INSERT INTO tbarea VALUES ('230128', '通河县', '230100');
INSERT INTO tbarea VALUES ('230129', '延寿县', '230100');
INSERT INTO tbarea VALUES ('230182', '双城市', '230100');
INSERT INTO tbarea VALUES ('230183', '尚志市', '230100');
INSERT INTO tbarea VALUES ('230184', '五常市', '230100');
INSERT INTO tbarea VALUES ('230200', '齐齐哈尔市', '230000');
INSERT INTO tbarea VALUES ('230201', '市辖区', '230200');
INSERT INTO tbarea VALUES ('230202', '龙沙区', '230200');
INSERT INTO tbarea VALUES ('230203', '建华区', '230200');
INSERT INTO tbarea VALUES ('230204', '铁锋区', '230200');
INSERT INTO tbarea VALUES ('230205', '昂昂溪区', '230200');
INSERT INTO tbarea VALUES ('230206', '富拉尔基区', '230200');
INSERT INTO tbarea VALUES ('230207', '碾子山区', '230200');
INSERT INTO tbarea VALUES ('230208', '梅里斯达斡尔族区', '230200');
INSERT INTO tbarea VALUES ('230221', '龙江县', '230200');
INSERT INTO tbarea VALUES ('230223', '依安县', '230200');
INSERT INTO tbarea VALUES ('230224', '泰来县', '230200');
INSERT INTO tbarea VALUES ('230225', '甘南县', '230200');
INSERT INTO tbarea VALUES ('230227', '富裕县', '230200');
INSERT INTO tbarea VALUES ('230229', '克山县', '230200');
INSERT INTO tbarea VALUES ('230230', '克东县', '230200');
INSERT INTO tbarea VALUES ('230231', '拜泉县', '230200');
INSERT INTO tbarea VALUES ('230281', '讷河市', '230200');
INSERT INTO tbarea VALUES ('230300', '鸡西市', '230000');
INSERT INTO tbarea VALUES ('230301', '市辖区', '230300');
INSERT INTO tbarea VALUES ('230302', '鸡冠区', '230300');
INSERT INTO tbarea VALUES ('230303', '恒山区', '230300');
INSERT INTO tbarea VALUES ('230304', '滴道区', '230300');
INSERT INTO tbarea VALUES ('230305', '梨树区', '230300');
INSERT INTO tbarea VALUES ('230306', '城子河区', '230300');
INSERT INTO tbarea VALUES ('230307', '麻山区', '230300');
INSERT INTO tbarea VALUES ('230321', '鸡东县', '230300');
INSERT INTO tbarea VALUES ('230381', '虎林市', '230300');
INSERT INTO tbarea VALUES ('230382', '密山市', '230300');
INSERT INTO tbarea VALUES ('230400', '鹤岗市', '230000');
INSERT INTO tbarea VALUES ('230401', '市辖区', '230400');
INSERT INTO tbarea VALUES ('230402', '向阳区', '230400');
INSERT INTO tbarea VALUES ('230403', '工农区', '230400');
INSERT INTO tbarea VALUES ('230404', '南山区', '230400');
INSERT INTO tbarea VALUES ('230405', '兴安区', '230400');
INSERT INTO tbarea VALUES ('230406', '东山区', '230400');
INSERT INTO tbarea VALUES ('230407', '兴山区', '230400');
INSERT INTO tbarea VALUES ('230421', '萝北县', '230400');
INSERT INTO tbarea VALUES ('230422', '绥滨县', '230400');
INSERT INTO tbarea VALUES ('230500', '双鸭山市', '230000');
INSERT INTO tbarea VALUES ('230501', '市辖区', '230500');
INSERT INTO tbarea VALUES ('230502', '尖山区', '230500');
INSERT INTO tbarea VALUES ('230503', '岭东区', '230500');
INSERT INTO tbarea VALUES ('230505', '四方台区', '230500');
INSERT INTO tbarea VALUES ('230506', '宝山区', '230500');
INSERT INTO tbarea VALUES ('230521', '集贤县', '230500');
INSERT INTO tbarea VALUES ('230522', '友谊县', '230500');
INSERT INTO tbarea VALUES ('230523', '宝清县', '230500');
INSERT INTO tbarea VALUES ('230524', '饶河县', '230500');
INSERT INTO tbarea VALUES ('230600', '大庆市', '230000');
INSERT INTO tbarea VALUES ('230601', '市辖区', '230600');
INSERT INTO tbarea VALUES ('230602', '萨尔图区', '230600');
INSERT INTO tbarea VALUES ('230603', '龙凤区', '230600');
INSERT INTO tbarea VALUES ('230604', '让胡路区', '230600');
INSERT INTO tbarea VALUES ('230605', '红岗区', '230600');
INSERT INTO tbarea VALUES ('230606', '大同区', '230600');
INSERT INTO tbarea VALUES ('230621', '肇州县', '230600');
INSERT INTO tbarea VALUES ('230622', '肇源县', '230600');
INSERT INTO tbarea VALUES ('230623', '林甸县', '230600');
INSERT INTO tbarea VALUES ('230624', '杜尔伯特蒙古族自治县', '230600');
INSERT INTO tbarea VALUES ('230700', '伊春市', '230000');
INSERT INTO tbarea VALUES ('230701', '市辖区', '230700');
INSERT INTO tbarea VALUES ('230702', '伊春区', '230700');
INSERT INTO tbarea VALUES ('230703', '南岔区', '230700');
INSERT INTO tbarea VALUES ('230704', '友好区', '230700');
INSERT INTO tbarea VALUES ('230705', '西林区', '230700');
INSERT INTO tbarea VALUES ('230706', '翠峦区', '230700');
INSERT INTO tbarea VALUES ('230707', '新青区', '230700');
INSERT INTO tbarea VALUES ('230708', '美溪区', '230700');
INSERT INTO tbarea VALUES ('230709', '金山屯区', '230700');
INSERT INTO tbarea VALUES ('230710', '五营区', '230700');
INSERT INTO tbarea VALUES ('230711', '乌马河区', '230700');
INSERT INTO tbarea VALUES ('230712', '汤旺河区', '230700');
INSERT INTO tbarea VALUES ('230713', '带岭区', '230700');
INSERT INTO tbarea VALUES ('230714', '乌伊岭区', '230700');
INSERT INTO tbarea VALUES ('230715', '红星区', '230700');
INSERT INTO tbarea VALUES ('230716', '上甘岭区', '230700');
INSERT INTO tbarea VALUES ('230722', '嘉荫县', '230700');
INSERT INTO tbarea VALUES ('230781', '铁力市', '230700');
INSERT INTO tbarea VALUES ('230800', '佳木斯市', '230000');
INSERT INTO tbarea VALUES ('230801', '市辖区', '230800');
INSERT INTO tbarea VALUES ('230803', '向阳区', '230800');
INSERT INTO tbarea VALUES ('230804', '前进区', '230800');
INSERT INTO tbarea VALUES ('230805', '东风区', '230800');
INSERT INTO tbarea VALUES ('230811', '郊区', '230800');
INSERT INTO tbarea VALUES ('230822', '桦南县', '230800');
INSERT INTO tbarea VALUES ('230826', '桦川县', '230800');
INSERT INTO tbarea VALUES ('230828', '汤原县', '230800');
INSERT INTO tbarea VALUES ('230833', '抚远县', '230800');
INSERT INTO tbarea VALUES ('230881', '同江市', '230800');
INSERT INTO tbarea VALUES ('230882', '富锦市', '230800');
INSERT INTO tbarea VALUES ('230900', '七台河市', '230000');
INSERT INTO tbarea VALUES ('230901', '市辖区', '230900');
INSERT INTO tbarea VALUES ('230902', '新兴区', '230900');
INSERT INTO tbarea VALUES ('230903', '桃山区', '230900');
INSERT INTO tbarea VALUES ('230904', '茄子河区', '230900');
INSERT INTO tbarea VALUES ('230921', '勃利县', '230900');
INSERT INTO tbarea VALUES ('231000', '牡丹江市', '230000');
INSERT INTO tbarea VALUES ('231001', '市辖区', '231000');
INSERT INTO tbarea VALUES ('231002', '东安区', '231000');
INSERT INTO tbarea VALUES ('231003', '阳明区', '231000');
INSERT INTO tbarea VALUES ('231004', '爱民区', '231000');
INSERT INTO tbarea VALUES ('231005', '西安区', '231000');
INSERT INTO tbarea VALUES ('231024', '东宁县', '231000');
INSERT INTO tbarea VALUES ('231025', '林口县', '231000');
INSERT INTO tbarea VALUES ('231081', '绥芬河市', '231000');
INSERT INTO tbarea VALUES ('231083', '海林市', '231000');
INSERT INTO tbarea VALUES ('231084', '宁安市', '231000');
INSERT INTO tbarea VALUES ('231085', '穆棱市', '231000');
INSERT INTO tbarea VALUES ('231100', '黑河市', '230000');
INSERT INTO tbarea VALUES ('231101', '市辖区', '231100');
INSERT INTO tbarea VALUES ('231102', '爱辉区', '231100');
INSERT INTO tbarea VALUES ('231121', '嫩江县', '231100');
INSERT INTO tbarea VALUES ('231123', '逊克县', '231100');
INSERT INTO tbarea VALUES ('231124', '孙吴县', '231100');
INSERT INTO tbarea VALUES ('231181', '北安市', '231100');
INSERT INTO tbarea VALUES ('231182', '五大连池市', '231100');
INSERT INTO tbarea VALUES ('231200', '绥化市', '230000');
INSERT INTO tbarea VALUES ('231201', '市辖区', '231200');
INSERT INTO tbarea VALUES ('231202', '北林区', '231200');
INSERT INTO tbarea VALUES ('231221', '望奎县', '231200');
INSERT INTO tbarea VALUES ('231222', '兰西县', '231200');
INSERT INTO tbarea VALUES ('231223', '青冈县', '231200');
INSERT INTO tbarea VALUES ('231224', '庆安县', '231200');
INSERT INTO tbarea VALUES ('231225', '明水县', '231200');
INSERT INTO tbarea VALUES ('231226', '绥棱县', '231200');
INSERT INTO tbarea VALUES ('231281', '安达市', '231200');
INSERT INTO tbarea VALUES ('231282', '肇东市', '231200');
INSERT INTO tbarea VALUES ('231283', '海伦市', '231200');
INSERT INTO tbarea VALUES ('232700', '大兴安岭地区', '230000');
INSERT INTO tbarea VALUES ('232721', '呼玛县', '232700');
INSERT INTO tbarea VALUES ('232722', '塔河县', '232700');
INSERT INTO tbarea VALUES ('232723', '漠河县', '232700');
INSERT INTO tbarea VALUES ('310000', '上海市', '0');
INSERT INTO tbarea VALUES ('310100', '市辖区', '310000');
INSERT INTO tbarea VALUES ('310101', '黄浦区', '310100');
INSERT INTO tbarea VALUES ('310104', '徐汇区', '310100');
INSERT INTO tbarea VALUES ('310105', '长宁区', '310100');
INSERT INTO tbarea VALUES ('310106', '静安区', '310100');
INSERT INTO tbarea VALUES ('310107', '普陀区', '310100');
INSERT INTO tbarea VALUES ('310108', '闸北区', '310100');
INSERT INTO tbarea VALUES ('310109', '虹口区', '310100');
INSERT INTO tbarea VALUES ('310110', '杨浦区', '310100');
INSERT INTO tbarea VALUES ('310112', '闵行区', '310100');
INSERT INTO tbarea VALUES ('310113', '宝山区', '310100');
INSERT INTO tbarea VALUES ('310114', '嘉定区', '310100');
INSERT INTO tbarea VALUES ('310115', '浦东新区', '310100');
INSERT INTO tbarea VALUES ('310116', '金山区', '310100');
INSERT INTO tbarea VALUES ('310117', '松江区', '310100');
INSERT INTO tbarea VALUES ('310118', '青浦区', '310100');
INSERT INTO tbarea VALUES ('310120', '奉贤区', '310100');
INSERT INTO tbarea VALUES ('310200', '县', '310000');
INSERT INTO tbarea VALUES ('310230', '崇明县', '310200');
INSERT INTO tbarea VALUES ('320000', '江苏省', '0');
INSERT INTO tbarea VALUES ('320100', '南京市', '320000');
INSERT INTO tbarea VALUES ('320101', '市辖区', '320100');
INSERT INTO tbarea VALUES ('320102', '玄武区', '320100');
INSERT INTO tbarea VALUES ('320103', '白下区', '320100');
INSERT INTO tbarea VALUES ('320104', '秦淮区', '320100');
INSERT INTO tbarea VALUES ('320105', '建邺区', '320100');
INSERT INTO tbarea VALUES ('320106', '鼓楼区', '320100');
INSERT INTO tbarea VALUES ('320107', '下关区', '320100');
INSERT INTO tbarea VALUES ('320111', '浦口区', '320100');
INSERT INTO tbarea VALUES ('320113', '栖霞区', '320100');
INSERT INTO tbarea VALUES ('320114', '雨花台区', '320100');
INSERT INTO tbarea VALUES ('320115', '江宁区', '320100');
INSERT INTO tbarea VALUES ('320116', '六合区', '320100');
INSERT INTO tbarea VALUES ('320124', '溧水县', '320100');
INSERT INTO tbarea VALUES ('320125', '高淳县', '320100');
INSERT INTO tbarea VALUES ('320200', '无锡市', '320000');
INSERT INTO tbarea VALUES ('320201', '市辖区', '320200');
INSERT INTO tbarea VALUES ('320202', '崇安区', '320200');
INSERT INTO tbarea VALUES ('320203', '南长区', '320200');
INSERT INTO tbarea VALUES ('320204', '北塘区', '320200');
INSERT INTO tbarea VALUES ('320205', '锡山区', '320200');
INSERT INTO tbarea VALUES ('320206', '惠山区', '320200');
INSERT INTO tbarea VALUES ('320211', '滨湖区', '320200');
INSERT INTO tbarea VALUES ('320281', '江阴市', '320200');
INSERT INTO tbarea VALUES ('320282', '宜兴市', '320200');
INSERT INTO tbarea VALUES ('320300', '徐州市', '320000');
INSERT INTO tbarea VALUES ('320301', '市辖区', '320300');
INSERT INTO tbarea VALUES ('320302', '鼓楼区', '320300');
INSERT INTO tbarea VALUES ('320303', '云龙区', '320300');
INSERT INTO tbarea VALUES ('320305', '贾汪区', '320300');
INSERT INTO tbarea VALUES ('320311', '泉山区', '320300');
INSERT INTO tbarea VALUES ('320312', '铜山区', '320300');
INSERT INTO tbarea VALUES ('320321', '丰县', '320300');
INSERT INTO tbarea VALUES ('320322', '沛县', '320300');
INSERT INTO tbarea VALUES ('320324', '睢宁县', '320300');
INSERT INTO tbarea VALUES ('320381', '新沂市', '320300');
INSERT INTO tbarea VALUES ('320382', '邳州市', '320300');
INSERT INTO tbarea VALUES ('320400', '常州市', '320000');
INSERT INTO tbarea VALUES ('320401', '市辖区', '320400');
INSERT INTO tbarea VALUES ('320402', '天宁区', '320400');
INSERT INTO tbarea VALUES ('320404', '钟楼区', '320400');
INSERT INTO tbarea VALUES ('320405', '戚墅堰区', '320400');
INSERT INTO tbarea VALUES ('320411', '新北区', '320400');
INSERT INTO tbarea VALUES ('320412', '武进区', '320400');
INSERT INTO tbarea VALUES ('320481', '溧阳市', '320400');
INSERT INTO tbarea VALUES ('320482', '金坛市', '320400');
INSERT INTO tbarea VALUES ('320500', '苏州市', '320000');
INSERT INTO tbarea VALUES ('320501', '市辖区', '320500');
INSERT INTO tbarea VALUES ('320505', '虎丘区', '320500');
INSERT INTO tbarea VALUES ('320506', '吴中区', '320500');
INSERT INTO tbarea VALUES ('320507', '相城区', '320500');
INSERT INTO tbarea VALUES ('320508', '姑苏区', '320500');
INSERT INTO tbarea VALUES ('320509', '吴江区', '320500');
INSERT INTO tbarea VALUES ('320581', '常熟市', '320500');
INSERT INTO tbarea VALUES ('320582', '张家港市', '320500');
INSERT INTO tbarea VALUES ('320583', '昆山市', '320500');
INSERT INTO tbarea VALUES ('320585', '太仓市', '320500');
INSERT INTO tbarea VALUES ('320600', '南通市', '320000');
INSERT INTO tbarea VALUES ('320601', '市辖区', '320600');
INSERT INTO tbarea VALUES ('320602', '崇川区', '320600');
INSERT INTO tbarea VALUES ('320611', '港闸区', '320600');
INSERT INTO tbarea VALUES ('320612', '通州区', '320600');
INSERT INTO tbarea VALUES ('320621', '海安县', '320600');
INSERT INTO tbarea VALUES ('320623', '如东县', '320600');
INSERT INTO tbarea VALUES ('320681', '启东市', '320600');
INSERT INTO tbarea VALUES ('320682', '如皋市', '320600');
INSERT INTO tbarea VALUES ('320684', '海门市', '320600');
INSERT INTO tbarea VALUES ('320700', '连云港市', '320000');
INSERT INTO tbarea VALUES ('320701', '市辖区', '320700');
INSERT INTO tbarea VALUES ('320703', '连云区', '320700');
INSERT INTO tbarea VALUES ('320705', '新浦区', '320700');
INSERT INTO tbarea VALUES ('320706', '海州区', '320700');
INSERT INTO tbarea VALUES ('320721', '赣榆县', '320700');
INSERT INTO tbarea VALUES ('320722', '东海县', '320700');
INSERT INTO tbarea VALUES ('320723', '灌云县', '320700');
INSERT INTO tbarea VALUES ('320724', '灌南县', '320700');
INSERT INTO tbarea VALUES ('320800', '淮安市', '320000');
INSERT INTO tbarea VALUES ('320801', '市辖区', '320800');
INSERT INTO tbarea VALUES ('320802', '清河区', '320800');
INSERT INTO tbarea VALUES ('320803', '淮安区', '320800');
INSERT INTO tbarea VALUES ('320804', '淮阴区', '320800');
INSERT INTO tbarea VALUES ('320811', '清浦区', '320800');
INSERT INTO tbarea VALUES ('320826', '涟水县', '320800');
INSERT INTO tbarea VALUES ('320829', '洪泽县', '320800');
INSERT INTO tbarea VALUES ('320830', '盱眙县', '320800');
INSERT INTO tbarea VALUES ('320831', '金湖县', '320800');
INSERT INTO tbarea VALUES ('320900', '盐城市', '320000');
INSERT INTO tbarea VALUES ('320901', '市辖区', '320900');
INSERT INTO tbarea VALUES ('320902', '亭湖区', '320900');
INSERT INTO tbarea VALUES ('320903', '盐都区', '320900');
INSERT INTO tbarea VALUES ('320921', '响水县', '320900');
INSERT INTO tbarea VALUES ('320922', '滨海县', '320900');
INSERT INTO tbarea VALUES ('320923', '阜宁县', '320900');
INSERT INTO tbarea VALUES ('320924', '射阳县', '320900');
INSERT INTO tbarea VALUES ('320925', '建湖县', '320900');
INSERT INTO tbarea VALUES ('320981', '东台市', '320900');
INSERT INTO tbarea VALUES ('320982', '大丰市', '320900');
INSERT INTO tbarea VALUES ('321000', '扬州市', '320000');
INSERT INTO tbarea VALUES ('321001', '市辖区', '321000');
INSERT INTO tbarea VALUES ('321002', '广陵区', '321000');
INSERT INTO tbarea VALUES ('321003', '邗江区', '321000');
INSERT INTO tbarea VALUES ('321012', '江都区', '321000');
INSERT INTO tbarea VALUES ('321023', '宝应县', '321000');
INSERT INTO tbarea VALUES ('321081', '仪征市', '321000');
INSERT INTO tbarea VALUES ('321084', '高邮市', '321000');
INSERT INTO tbarea VALUES ('321100', '镇江市', '320000');
INSERT INTO tbarea VALUES ('321101', '市辖区', '321100');
INSERT INTO tbarea VALUES ('321102', '京口区', '321100');
INSERT INTO tbarea VALUES ('321111', '润州区', '321100');
INSERT INTO tbarea VALUES ('321112', '丹徒区', '321100');
INSERT INTO tbarea VALUES ('321181', '丹阳市', '321100');
INSERT INTO tbarea VALUES ('321182', '扬中市', '321100');
INSERT INTO tbarea VALUES ('321183', '句容市', '321100');
INSERT INTO tbarea VALUES ('321200', '泰州市', '320000');
INSERT INTO tbarea VALUES ('321201', '市辖区', '321200');
INSERT INTO tbarea VALUES ('321202', '海陵区', '321200');
INSERT INTO tbarea VALUES ('321203', '高港区', '321200');
INSERT INTO tbarea VALUES ('321281', '兴化市', '321200');
INSERT INTO tbarea VALUES ('321282', '靖江市', '321200');
INSERT INTO tbarea VALUES ('321283', '泰兴市', '321200');
INSERT INTO tbarea VALUES ('321284', '姜堰市', '321200');
INSERT INTO tbarea VALUES ('321300', '宿迁市', '320000');
INSERT INTO tbarea VALUES ('321301', '市辖区', '321300');
INSERT INTO tbarea VALUES ('321302', '宿城区', '321300');
INSERT INTO tbarea VALUES ('321311', '宿豫区', '321300');
INSERT INTO tbarea VALUES ('321322', '沭阳县', '321300');
INSERT INTO tbarea VALUES ('321323', '泗阳县', '321300');
INSERT INTO tbarea VALUES ('321324', '泗洪县', '321300');
INSERT INTO tbarea VALUES ('330000', '浙江省', '0');
INSERT INTO tbarea VALUES ('330100', '杭州市', '330000');
INSERT INTO tbarea VALUES ('330101', '市辖区', '330100');
INSERT INTO tbarea VALUES ('330102', '上城区', '330100');
INSERT INTO tbarea VALUES ('330103', '下城区', '330100');
INSERT INTO tbarea VALUES ('330104', '江干区', '330100');
INSERT INTO tbarea VALUES ('330105', '拱墅区', '330100');
INSERT INTO tbarea VALUES ('330106', '西湖区', '330100');
INSERT INTO tbarea VALUES ('330108', '滨江区', '330100');
INSERT INTO tbarea VALUES ('330109', '萧山区', '330100');
INSERT INTO tbarea VALUES ('330110', '余杭区', '330100');
INSERT INTO tbarea VALUES ('330122', '桐庐县', '330100');
INSERT INTO tbarea VALUES ('330127', '淳安县', '330100');
INSERT INTO tbarea VALUES ('330182', '建德市', '330100');
INSERT INTO tbarea VALUES ('330183', '富阳市', '330100');
INSERT INTO tbarea VALUES ('330185', '临安市', '330100');
INSERT INTO tbarea VALUES ('330200', '宁波市', '330000');
INSERT INTO tbarea VALUES ('330201', '市辖区', '330200');
INSERT INTO tbarea VALUES ('330203', '海曙区', '330200');
INSERT INTO tbarea VALUES ('330204', '江东区', '330200');
INSERT INTO tbarea VALUES ('330205', '江北区', '330200');
INSERT INTO tbarea VALUES ('330206', '北仑区', '330200');
INSERT INTO tbarea VALUES ('330211', '镇海区', '330200');
INSERT INTO tbarea VALUES ('330212', '鄞州区', '330200');
INSERT INTO tbarea VALUES ('330225', '象山县', '330200');
INSERT INTO tbarea VALUES ('330226', '宁海县', '330200');
INSERT INTO tbarea VALUES ('330281', '余姚市', '330200');
INSERT INTO tbarea VALUES ('330282', '慈溪市', '330200');
INSERT INTO tbarea VALUES ('330283', '奉化市', '330200');
INSERT INTO tbarea VALUES ('330300', '温州市', '330000');
INSERT INTO tbarea VALUES ('330301', '市辖区', '330300');
INSERT INTO tbarea VALUES ('330302', '鹿城区', '330300');
INSERT INTO tbarea VALUES ('330303', '龙湾区', '330300');
INSERT INTO tbarea VALUES ('330304', '瓯海区', '330300');
INSERT INTO tbarea VALUES ('330322', '洞头县', '330300');
INSERT INTO tbarea VALUES ('330324', '永嘉县', '330300');
INSERT INTO tbarea VALUES ('330326', '平阳县', '330300');
INSERT INTO tbarea VALUES ('330327', '苍南县', '330300');
INSERT INTO tbarea VALUES ('330328', '文成县', '330300');
INSERT INTO tbarea VALUES ('330329', '泰顺县', '330300');
INSERT INTO tbarea VALUES ('330381', '瑞安市', '330300');
INSERT INTO tbarea VALUES ('330382', '乐清市', '330300');
INSERT INTO tbarea VALUES ('330400', '嘉兴市', '330000');
INSERT INTO tbarea VALUES ('330401', '市辖区', '330400');
INSERT INTO tbarea VALUES ('330402', '南湖区', '330400');
INSERT INTO tbarea VALUES ('330411', '秀洲区', '330400');
INSERT INTO tbarea VALUES ('330421', '嘉善县', '330400');
INSERT INTO tbarea VALUES ('330424', '海盐县', '330400');
INSERT INTO tbarea VALUES ('330481', '海宁市', '330400');
INSERT INTO tbarea VALUES ('330482', '平湖市', '330400');
INSERT INTO tbarea VALUES ('330483', '桐乡市', '330400');
INSERT INTO tbarea VALUES ('330500', '湖州市', '330000');
INSERT INTO tbarea VALUES ('330501', '市辖区', '330500');
INSERT INTO tbarea VALUES ('330502', '吴兴区', '330500');
INSERT INTO tbarea VALUES ('330503', '南浔区', '330500');
INSERT INTO tbarea VALUES ('330521', '德清县', '330500');
INSERT INTO tbarea VALUES ('330522', '长兴县', '330500');
INSERT INTO tbarea VALUES ('330523', '安吉县', '330500');
INSERT INTO tbarea VALUES ('330600', '绍兴市', '330000');
INSERT INTO tbarea VALUES ('330601', '市辖区', '330600');
INSERT INTO tbarea VALUES ('330602', '越城区', '330600');
INSERT INTO tbarea VALUES ('330621', '绍兴县', '330600');
INSERT INTO tbarea VALUES ('330624', '新昌县', '330600');
INSERT INTO tbarea VALUES ('330681', '诸暨市', '330600');
INSERT INTO tbarea VALUES ('330682', '上虞市', '330600');
INSERT INTO tbarea VALUES ('330683', '嵊州市', '330600');
INSERT INTO tbarea VALUES ('330700', '金华市', '330000');
INSERT INTO tbarea VALUES ('330701', '市辖区', '330700');
INSERT INTO tbarea VALUES ('330702', '婺城区', '330700');
INSERT INTO tbarea VALUES ('330703', '金东区', '330700');
INSERT INTO tbarea VALUES ('330723', '武义县', '330700');
INSERT INTO tbarea VALUES ('330726', '浦江县', '330700');
INSERT INTO tbarea VALUES ('330727', '磐安县', '330700');
INSERT INTO tbarea VALUES ('330781', '兰溪市', '330700');
INSERT INTO tbarea VALUES ('330782', '义乌市', '330700');
INSERT INTO tbarea VALUES ('330783', '东阳市', '330700');
INSERT INTO tbarea VALUES ('330784', '永康市', '330700');
INSERT INTO tbarea VALUES ('330800', '衢州市', '330000');
INSERT INTO tbarea VALUES ('330801', '市辖区', '330800');
INSERT INTO tbarea VALUES ('330802', '柯城区', '330800');
INSERT INTO tbarea VALUES ('330803', '衢江区', '330800');
INSERT INTO tbarea VALUES ('330822', '常山县', '330800');
INSERT INTO tbarea VALUES ('330824', '开化县', '330800');
INSERT INTO tbarea VALUES ('330825', '龙游县', '330800');
INSERT INTO tbarea VALUES ('330881', '江山市', '330800');
INSERT INTO tbarea VALUES ('330900', '舟山市', '330000');
INSERT INTO tbarea VALUES ('330901', '市辖区', '330900');
INSERT INTO tbarea VALUES ('330902', '定海区', '330900');
INSERT INTO tbarea VALUES ('330903', '普陀区', '330900');
INSERT INTO tbarea VALUES ('330921', '岱山县', '330900');
INSERT INTO tbarea VALUES ('330922', '嵊泗县', '330900');
INSERT INTO tbarea VALUES ('331000', '台州市', '330000');
INSERT INTO tbarea VALUES ('331001', '市辖区', '331000');
INSERT INTO tbarea VALUES ('331002', '椒江区', '331000');
INSERT INTO tbarea VALUES ('331003', '黄岩区', '331000');
INSERT INTO tbarea VALUES ('331004', '路桥区', '331000');
INSERT INTO tbarea VALUES ('331021', '玉环县', '331000');
INSERT INTO tbarea VALUES ('331022', '三门县', '331000');
INSERT INTO tbarea VALUES ('331023', '天台县', '331000');
INSERT INTO tbarea VALUES ('331024', '仙居县', '331000');
INSERT INTO tbarea VALUES ('331081', '温岭市', '331000');
INSERT INTO tbarea VALUES ('331082', '临海市', '331000');
INSERT INTO tbarea VALUES ('331100', '丽水市', '330000');
INSERT INTO tbarea VALUES ('331101', '市辖区', '331100');
INSERT INTO tbarea VALUES ('331102', '莲都区', '331100');
INSERT INTO tbarea VALUES ('331121', '青田县', '331100');
INSERT INTO tbarea VALUES ('331122', '缙云县', '331100');
INSERT INTO tbarea VALUES ('331123', '遂昌县', '331100');
INSERT INTO tbarea VALUES ('331124', '松阳县', '331100');
INSERT INTO tbarea VALUES ('331125', '云和县', '331100');
INSERT INTO tbarea VALUES ('331126', '庆元县', '331100');
INSERT INTO tbarea VALUES ('331127', '景宁畲族自治县', '331100');
INSERT INTO tbarea VALUES ('331181', '龙泉市', '331100');
INSERT INTO tbarea VALUES ('340000', '安徽省', '0');
INSERT INTO tbarea VALUES ('340100', '合肥市', '340000');
INSERT INTO tbarea VALUES ('340101', '市辖区', '340100');
INSERT INTO tbarea VALUES ('340102', '瑶海区', '340100');
INSERT INTO tbarea VALUES ('340103', '庐阳区', '340100');
INSERT INTO tbarea VALUES ('340104', '蜀山区', '340100');
INSERT INTO tbarea VALUES ('340111', '包河区', '340100');
INSERT INTO tbarea VALUES ('340121', '长丰县', '340100');
INSERT INTO tbarea VALUES ('340122', '肥东县', '340100');
INSERT INTO tbarea VALUES ('340123', '肥西县', '340100');
INSERT INTO tbarea VALUES ('340124', '庐江县', '340100');
INSERT INTO tbarea VALUES ('340181', '巢湖市', '340100');
INSERT INTO tbarea VALUES ('340200', '芜湖市', '340000');
INSERT INTO tbarea VALUES ('340201', '市辖区', '340200');
INSERT INTO tbarea VALUES ('340202', '镜湖区', '340200');
INSERT INTO tbarea VALUES ('340203', '弋江区', '340200');
INSERT INTO tbarea VALUES ('340207', '鸠江区', '340200');
INSERT INTO tbarea VALUES ('340208', '三山区', '340200');
INSERT INTO tbarea VALUES ('340221', '芜湖县', '340200');
INSERT INTO tbarea VALUES ('340222', '繁昌县', '340200');
INSERT INTO tbarea VALUES ('340223', '南陵县', '340200');
INSERT INTO tbarea VALUES ('340225', '无为县', '340200');
INSERT INTO tbarea VALUES ('340300', '蚌埠市', '340000');
INSERT INTO tbarea VALUES ('340301', '市辖区', '340300');
INSERT INTO tbarea VALUES ('340302', '龙子湖区', '340300');
INSERT INTO tbarea VALUES ('340303', '蚌山区', '340300');
INSERT INTO tbarea VALUES ('340304', '禹会区', '340300');
INSERT INTO tbarea VALUES ('340311', '淮上区', '340300');
INSERT INTO tbarea VALUES ('340321', '怀远县', '340300');
INSERT INTO tbarea VALUES ('340322', '五河县', '340300');
INSERT INTO tbarea VALUES ('340323', '固镇县', '340300');
INSERT INTO tbarea VALUES ('340400', '淮南市', '340000');
INSERT INTO tbarea VALUES ('340401', '市辖区', '340400');
INSERT INTO tbarea VALUES ('340402', '大通区', '340400');
INSERT INTO tbarea VALUES ('340403', '田家庵区', '340400');
INSERT INTO tbarea VALUES ('340404', '谢家集区', '340400');
INSERT INTO tbarea VALUES ('340405', '八公山区', '340400');
INSERT INTO tbarea VALUES ('340406', '潘集区', '340400');
INSERT INTO tbarea VALUES ('340421', '凤台县', '340400');
INSERT INTO tbarea VALUES ('340500', '马鞍山市', '340000');
INSERT INTO tbarea VALUES ('340501', '市辖区', '340500');
INSERT INTO tbarea VALUES ('340503', '花山区', '340500');
INSERT INTO tbarea VALUES ('340504', '雨山区', '340500');
INSERT INTO tbarea VALUES ('340506', '博望区', '340500');
INSERT INTO tbarea VALUES ('340521', '当涂县', '340500');
INSERT INTO tbarea VALUES ('340522', '含山县', '340500');
INSERT INTO tbarea VALUES ('340523', '和县', '340500');
INSERT INTO tbarea VALUES ('340600', '淮北市', '340000');
INSERT INTO tbarea VALUES ('340601', '市辖区', '340600');
INSERT INTO tbarea VALUES ('340602', '杜集区', '340600');
INSERT INTO tbarea VALUES ('340603', '相山区', '340600');
INSERT INTO tbarea VALUES ('340604', '烈山区', '340600');
INSERT INTO tbarea VALUES ('340621', '濉溪县', '340600');
INSERT INTO tbarea VALUES ('340700', '铜陵市', '340000');
INSERT INTO tbarea VALUES ('340701', '市辖区', '340700');
INSERT INTO tbarea VALUES ('340702', '铜官山区', '340700');
INSERT INTO tbarea VALUES ('340703', '狮子山区', '340700');
INSERT INTO tbarea VALUES ('340711', '郊区', '340700');
INSERT INTO tbarea VALUES ('340721', '铜陵县', '340700');
INSERT INTO tbarea VALUES ('340800', '安庆市', '340000');
INSERT INTO tbarea VALUES ('340801', '市辖区', '340800');
INSERT INTO tbarea VALUES ('340802', '迎江区', '340800');
INSERT INTO tbarea VALUES ('340803', '大观区', '340800');
INSERT INTO tbarea VALUES ('340811', '宜秀区', '340800');
INSERT INTO tbarea VALUES ('340822', '怀宁县', '340800');
INSERT INTO tbarea VALUES ('340823', '枞阳县', '340800');
INSERT INTO tbarea VALUES ('340824', '潜山县', '340800');
INSERT INTO tbarea VALUES ('340825', '太湖县', '340800');
INSERT INTO tbarea VALUES ('340826', '宿松县', '340800');
INSERT INTO tbarea VALUES ('340827', '望江县', '340800');
INSERT INTO tbarea VALUES ('340828', '岳西县', '340800');
INSERT INTO tbarea VALUES ('340881', '桐城市', '340800');
INSERT INTO tbarea VALUES ('341000', '黄山市', '340000');
INSERT INTO tbarea VALUES ('341001', '市辖区', '341000');
INSERT INTO tbarea VALUES ('341002', '屯溪区', '341000');
INSERT INTO tbarea VALUES ('341003', '黄山区', '341000');
INSERT INTO tbarea VALUES ('341004', '徽州区', '341000');
INSERT INTO tbarea VALUES ('341021', '歙县', '341000');
INSERT INTO tbarea VALUES ('341022', '休宁县', '341000');
INSERT INTO tbarea VALUES ('341023', '黟县', '341000');
INSERT INTO tbarea VALUES ('341024', '祁门县', '341000');
INSERT INTO tbarea VALUES ('341100', '滁州市', '340000');
INSERT INTO tbarea VALUES ('341101', '市辖区', '341100');
INSERT INTO tbarea VALUES ('341102', '琅琊区', '341100');
INSERT INTO tbarea VALUES ('341103', '南谯区', '341100');
INSERT INTO tbarea VALUES ('341122', '来安县', '341100');
INSERT INTO tbarea VALUES ('341124', '全椒县', '341100');
INSERT INTO tbarea VALUES ('341125', '定远县', '341100');
INSERT INTO tbarea VALUES ('341126', '凤阳县', '341100');
INSERT INTO tbarea VALUES ('341181', '天长市', '341100');
INSERT INTO tbarea VALUES ('341182', '明光市', '341100');
INSERT INTO tbarea VALUES ('341200', '阜阳市', '340000');
INSERT INTO tbarea VALUES ('341201', '市辖区', '341200');
INSERT INTO tbarea VALUES ('341202', '颍州区', '341200');
INSERT INTO tbarea VALUES ('341203', '颍东区', '341200');
INSERT INTO tbarea VALUES ('341204', '颍泉区', '341200');
INSERT INTO tbarea VALUES ('341221', '临泉县', '341200');
INSERT INTO tbarea VALUES ('341222', '太和县', '341200');
INSERT INTO tbarea VALUES ('341225', '阜南县', '341200');
INSERT INTO tbarea VALUES ('341226', '颍上县', '341200');
INSERT INTO tbarea VALUES ('341282', '界首市', '341200');
INSERT INTO tbarea VALUES ('341300', '宿州市', '340000');
INSERT INTO tbarea VALUES ('341301', '市辖区', '341300');
INSERT INTO tbarea VALUES ('341302', '埇桥区', '341300');
INSERT INTO tbarea VALUES ('341321', '砀山县', '341300');
INSERT INTO tbarea VALUES ('341322', '萧县', '341300');
INSERT INTO tbarea VALUES ('341323', '灵璧县', '341300');
INSERT INTO tbarea VALUES ('341324', '泗县', '341300');
INSERT INTO tbarea VALUES ('341500', '六安市', '340000');
INSERT INTO tbarea VALUES ('341501', '市辖区', '341500');
INSERT INTO tbarea VALUES ('341502', '金安区', '341500');
INSERT INTO tbarea VALUES ('341503', '裕安区', '341500');
INSERT INTO tbarea VALUES ('341521', '寿县', '341500');
INSERT INTO tbarea VALUES ('341522', '霍邱县', '341500');
INSERT INTO tbarea VALUES ('341523', '舒城县', '341500');
INSERT INTO tbarea VALUES ('341524', '金寨县', '341500');
INSERT INTO tbarea VALUES ('341525', '霍山县', '341500');
INSERT INTO tbarea VALUES ('341600', '亳州市', '340000');
INSERT INTO tbarea VALUES ('341601', '市辖区', '341600');
INSERT INTO tbarea VALUES ('341602', '谯城区', '341600');
INSERT INTO tbarea VALUES ('341621', '涡阳县', '341600');
INSERT INTO tbarea VALUES ('341622', '蒙城县', '341600');
INSERT INTO tbarea VALUES ('341623', '利辛县', '341600');
INSERT INTO tbarea VALUES ('341700', '池州市', '340000');
INSERT INTO tbarea VALUES ('341701', '市辖区', '341700');
INSERT INTO tbarea VALUES ('341702', '贵池区', '341700');
INSERT INTO tbarea VALUES ('341721', '东至县', '341700');
INSERT INTO tbarea VALUES ('341722', '石台县', '341700');
INSERT INTO tbarea VALUES ('341723', '青阳县', '341700');
INSERT INTO tbarea VALUES ('341800', '宣城市', '340000');
INSERT INTO tbarea VALUES ('341801', '市辖区', '341800');
INSERT INTO tbarea VALUES ('341802', '宣州区', '341800');
INSERT INTO tbarea VALUES ('341821', '郎溪县', '341800');
INSERT INTO tbarea VALUES ('341822', '广德县', '341800');
INSERT INTO tbarea VALUES ('341823', '泾县', '341800');
INSERT INTO tbarea VALUES ('341824', '绩溪县', '341800');
INSERT INTO tbarea VALUES ('341825', '旌德县', '341800');
INSERT INTO tbarea VALUES ('341881', '宁国市', '341800');
INSERT INTO tbarea VALUES ('350000', '福建省', '0');
INSERT INTO tbarea VALUES ('350100', '福州市', '350000');
INSERT INTO tbarea VALUES ('350101', '市辖区', '350100');
INSERT INTO tbarea VALUES ('350102', '鼓楼区', '350100');
INSERT INTO tbarea VALUES ('350103', '台江区', '350100');
INSERT INTO tbarea VALUES ('350104', '仓山区', '350100');
INSERT INTO tbarea VALUES ('350105', '马尾区', '350100');
INSERT INTO tbarea VALUES ('350111', '晋安区', '350100');
INSERT INTO tbarea VALUES ('350121', '闽侯县', '350100');
INSERT INTO tbarea VALUES ('350122', '连江县', '350100');
INSERT INTO tbarea VALUES ('350123', '罗源县', '350100');
INSERT INTO tbarea VALUES ('350124', '闽清县', '350100');
INSERT INTO tbarea VALUES ('350125', '永泰县', '350100');
INSERT INTO tbarea VALUES ('350128', '平潭县', '350100');
INSERT INTO tbarea VALUES ('350181', '福清市', '350100');
INSERT INTO tbarea VALUES ('350182', '长乐市', '350100');
INSERT INTO tbarea VALUES ('350200', '厦门市', '350000');
INSERT INTO tbarea VALUES ('350201', '市辖区', '350200');
INSERT INTO tbarea VALUES ('350203', '思明区', '350200');
INSERT INTO tbarea VALUES ('350205', '海沧区', '350200');
INSERT INTO tbarea VALUES ('350206', '湖里区', '350200');
INSERT INTO tbarea VALUES ('350211', '集美区', '350200');
INSERT INTO tbarea VALUES ('350212', '同安区', '350200');
INSERT INTO tbarea VALUES ('350213', '翔安区', '350200');
INSERT INTO tbarea VALUES ('350300', '莆田市', '350000');
INSERT INTO tbarea VALUES ('350301', '市辖区', '350300');
INSERT INTO tbarea VALUES ('350302', '城厢区', '350300');
INSERT INTO tbarea VALUES ('350303', '涵江区', '350300');
INSERT INTO tbarea VALUES ('350304', '荔城区', '350300');
INSERT INTO tbarea VALUES ('350305', '秀屿区', '350300');
INSERT INTO tbarea VALUES ('350322', '仙游县', '350300');
INSERT INTO tbarea VALUES ('350400', '三明市', '350000');
INSERT INTO tbarea VALUES ('350401', '市辖区', '350400');
INSERT INTO tbarea VALUES ('350402', '梅列区', '350400');
INSERT INTO tbarea VALUES ('350403', '三元区', '350400');
INSERT INTO tbarea VALUES ('350421', '明溪县', '350400');
INSERT INTO tbarea VALUES ('350423', '清流县', '350400');
INSERT INTO tbarea VALUES ('350424', '宁化县', '350400');
INSERT INTO tbarea VALUES ('350425', '大田县', '350400');
INSERT INTO tbarea VALUES ('350426', '尤溪县', '350400');
INSERT INTO tbarea VALUES ('350427', '沙县', '350400');
INSERT INTO tbarea VALUES ('350428', '将乐县', '350400');
INSERT INTO tbarea VALUES ('350429', '泰宁县', '350400');
INSERT INTO tbarea VALUES ('350430', '建宁县', '350400');
INSERT INTO tbarea VALUES ('350481', '永安市', '350400');
INSERT INTO tbarea VALUES ('350500', '泉州市', '350000');
INSERT INTO tbarea VALUES ('350501', '市辖区', '350500');
INSERT INTO tbarea VALUES ('350502', '鲤城区', '350500');
INSERT INTO tbarea VALUES ('350503', '丰泽区', '350500');
INSERT INTO tbarea VALUES ('350504', '洛江区', '350500');
INSERT INTO tbarea VALUES ('350505', '泉港区', '350500');
INSERT INTO tbarea VALUES ('350521', '惠安县', '350500');
INSERT INTO tbarea VALUES ('350524', '安溪县', '350500');
INSERT INTO tbarea VALUES ('350525', '永春县', '350500');
INSERT INTO tbarea VALUES ('350526', '德化县', '350500');
INSERT INTO tbarea VALUES ('350527', '金门县', '350500');
INSERT INTO tbarea VALUES ('350581', '石狮市', '350500');
INSERT INTO tbarea VALUES ('350582', '晋江市', '350500');
INSERT INTO tbarea VALUES ('350583', '南安市', '350500');
INSERT INTO tbarea VALUES ('350600', '漳州市', '350000');
INSERT INTO tbarea VALUES ('350601', '市辖区', '350600');
INSERT INTO tbarea VALUES ('350602', '芗城区', '350600');
INSERT INTO tbarea VALUES ('350603', '龙文区', '350600');
INSERT INTO tbarea VALUES ('350622', '云霄县', '350600');
INSERT INTO tbarea VALUES ('350623', '漳浦县', '350600');
INSERT INTO tbarea VALUES ('350624', '诏安县', '350600');
INSERT INTO tbarea VALUES ('350625', '长泰县', '350600');
INSERT INTO tbarea VALUES ('350626', '东山县', '350600');
INSERT INTO tbarea VALUES ('350627', '南靖县', '350600');
INSERT INTO tbarea VALUES ('350628', '平和县', '350600');
INSERT INTO tbarea VALUES ('350629', '华安县', '350600');
INSERT INTO tbarea VALUES ('350681', '龙海市', '350600');
INSERT INTO tbarea VALUES ('350700', '南平市', '350000');
INSERT INTO tbarea VALUES ('350701', '市辖区', '350700');
INSERT INTO tbarea VALUES ('350702', '延平区', '350700');
INSERT INTO tbarea VALUES ('350721', '顺昌县', '350700');
INSERT INTO tbarea VALUES ('350722', '浦城县', '350700');
INSERT INTO tbarea VALUES ('350723', '光泽县', '350700');
INSERT INTO tbarea VALUES ('350724', '松溪县', '350700');
INSERT INTO tbarea VALUES ('350725', '政和县', '350700');
INSERT INTO tbarea VALUES ('350781', '邵武市', '350700');
INSERT INTO tbarea VALUES ('350782', '武夷山市', '350700');
INSERT INTO tbarea VALUES ('350783', '建瓯市', '350700');
INSERT INTO tbarea VALUES ('350784', '建阳市', '350700');
INSERT INTO tbarea VALUES ('350800', '龙岩市', '350000');
INSERT INTO tbarea VALUES ('350801', '市辖区', '350800');
INSERT INTO tbarea VALUES ('350802', '新罗区', '350800');
INSERT INTO tbarea VALUES ('350821', '长汀县', '350800');
INSERT INTO tbarea VALUES ('350822', '永定县', '350800');
INSERT INTO tbarea VALUES ('350823', '上杭县', '350800');
INSERT INTO tbarea VALUES ('350824', '武平县', '350800');
INSERT INTO tbarea VALUES ('350825', '连城县', '350800');
INSERT INTO tbarea VALUES ('350881', '漳平市', '350800');
INSERT INTO tbarea VALUES ('350900', '宁德市', '350000');
INSERT INTO tbarea VALUES ('350901', '市辖区', '350900');
INSERT INTO tbarea VALUES ('350902', '蕉城区', '350900');
INSERT INTO tbarea VALUES ('350921', '霞浦县', '350900');
INSERT INTO tbarea VALUES ('350922', '古田县', '350900');
INSERT INTO tbarea VALUES ('350923', '屏南县', '350900');
INSERT INTO tbarea VALUES ('350924', '寿宁县', '350900');
INSERT INTO tbarea VALUES ('350925', '周宁县', '350900');
INSERT INTO tbarea VALUES ('350926', '柘荣县', '350900');
INSERT INTO tbarea VALUES ('350981', '福安市', '350900');
INSERT INTO tbarea VALUES ('350982', '福鼎市', '350900');
INSERT INTO tbarea VALUES ('360000', '江西省', '0');
INSERT INTO tbarea VALUES ('360100', '南昌市', '360000');
INSERT INTO tbarea VALUES ('360101', '市辖区', '360100');
INSERT INTO tbarea VALUES ('360102', '东湖区', '360100');
INSERT INTO tbarea VALUES ('360103', '西湖区', '360100');
INSERT INTO tbarea VALUES ('360104', '青云谱区', '360100');
INSERT INTO tbarea VALUES ('360105', '湾里区', '360100');
INSERT INTO tbarea VALUES ('360111', '青山湖区', '360100');
INSERT INTO tbarea VALUES ('360121', '南昌县', '360100');
INSERT INTO tbarea VALUES ('360122', '新建县', '360100');
INSERT INTO tbarea VALUES ('360123', '安义县', '360100');
INSERT INTO tbarea VALUES ('360124', '进贤县', '360100');
INSERT INTO tbarea VALUES ('360200', '景德镇市', '360000');
INSERT INTO tbarea VALUES ('360201', '市辖区', '360200');
INSERT INTO tbarea VALUES ('360202', '昌江区', '360200');
INSERT INTO tbarea VALUES ('360203', '珠山区', '360200');
INSERT INTO tbarea VALUES ('360222', '浮梁县', '360200');
INSERT INTO tbarea VALUES ('360281', '乐平市', '360200');
INSERT INTO tbarea VALUES ('360300', '萍乡市', '360000');
INSERT INTO tbarea VALUES ('360301', '市辖区', '360300');
INSERT INTO tbarea VALUES ('360302', '安源区', '360300');
INSERT INTO tbarea VALUES ('360313', '湘东区', '360300');
INSERT INTO tbarea VALUES ('360321', '莲花县', '360300');
INSERT INTO tbarea VALUES ('360322', '上栗县', '360300');
INSERT INTO tbarea VALUES ('360323', '芦溪县', '360300');
INSERT INTO tbarea VALUES ('360400', '九江市', '360000');
INSERT INTO tbarea VALUES ('360401', '市辖区', '360400');
INSERT INTO tbarea VALUES ('360402', '庐山区', '360400');
INSERT INTO tbarea VALUES ('360403', '浔阳区', '360400');
INSERT INTO tbarea VALUES ('360421', '九江县', '360400');
INSERT INTO tbarea VALUES ('360423', '武宁县', '360400');
INSERT INTO tbarea VALUES ('360424', '修水县', '360400');
INSERT INTO tbarea VALUES ('360425', '永修县', '360400');
INSERT INTO tbarea VALUES ('360426', '德安县', '360400');
INSERT INTO tbarea VALUES ('360427', '星子县', '360400');
INSERT INTO tbarea VALUES ('360428', '都昌县', '360400');
INSERT INTO tbarea VALUES ('360429', '湖口县', '360400');
INSERT INTO tbarea VALUES ('360430', '彭泽县', '360400');
INSERT INTO tbarea VALUES ('360481', '瑞昌市', '360400');
INSERT INTO tbarea VALUES ('360482', '共青城市', '360400');
INSERT INTO tbarea VALUES ('360500', '新余市', '360000');
INSERT INTO tbarea VALUES ('360501', '市辖区', '360500');
INSERT INTO tbarea VALUES ('360502', '渝水区', '360500');
INSERT INTO tbarea VALUES ('360521', '分宜县', '360500');
INSERT INTO tbarea VALUES ('360600', '鹰潭市', '360000');
INSERT INTO tbarea VALUES ('360601', '市辖区', '360600');
INSERT INTO tbarea VALUES ('360602', '月湖区', '360600');
INSERT INTO tbarea VALUES ('360622', '余江县', '360600');
INSERT INTO tbarea VALUES ('360681', '贵溪市', '360600');
INSERT INTO tbarea VALUES ('360700', '赣州市', '360000');
INSERT INTO tbarea VALUES ('360701', '市辖区', '360700');
INSERT INTO tbarea VALUES ('360702', '章贡区', '360700');
INSERT INTO tbarea VALUES ('360721', '赣县', '360700');
INSERT INTO tbarea VALUES ('360722', '信丰县', '360700');
INSERT INTO tbarea VALUES ('360723', '大余县', '360700');
INSERT INTO tbarea VALUES ('360724', '上犹县', '360700');
INSERT INTO tbarea VALUES ('360725', '崇义县', '360700');
INSERT INTO tbarea VALUES ('360726', '安远县', '360700');
INSERT INTO tbarea VALUES ('360727', '龙南县', '360700');
INSERT INTO tbarea VALUES ('360728', '定南县', '360700');
INSERT INTO tbarea VALUES ('360729', '全南县', '360700');
INSERT INTO tbarea VALUES ('360730', '宁都县', '360700');
INSERT INTO tbarea VALUES ('360731', '于都县', '360700');
INSERT INTO tbarea VALUES ('360732', '兴国县', '360700');
INSERT INTO tbarea VALUES ('360733', '会昌县', '360700');
INSERT INTO tbarea VALUES ('360734', '寻乌县', '360700');
INSERT INTO tbarea VALUES ('360735', '石城县', '360700');
INSERT INTO tbarea VALUES ('360781', '瑞金市', '360700');
INSERT INTO tbarea VALUES ('360782', '南康市', '360700');
INSERT INTO tbarea VALUES ('360800', '吉安市', '360000');
INSERT INTO tbarea VALUES ('360801', '市辖区', '360800');
INSERT INTO tbarea VALUES ('360802', '吉州区', '360800');
INSERT INTO tbarea VALUES ('360803', '青原区', '360800');
INSERT INTO tbarea VALUES ('360821', '吉安县', '360800');
INSERT INTO tbarea VALUES ('360822', '吉水县', '360800');
INSERT INTO tbarea VALUES ('360823', '峡江县', '360800');
INSERT INTO tbarea VALUES ('360824', '新干县', '360800');
INSERT INTO tbarea VALUES ('360825', '永丰县', '360800');
INSERT INTO tbarea VALUES ('360826', '泰和县', '360800');
INSERT INTO tbarea VALUES ('360827', '遂川县', '360800');
INSERT INTO tbarea VALUES ('360828', '万安县', '360800');
INSERT INTO tbarea VALUES ('360829', '安福县', '360800');
INSERT INTO tbarea VALUES ('360830', '永新县', '360800');
INSERT INTO tbarea VALUES ('360881', '井冈山市', '360800');
INSERT INTO tbarea VALUES ('360900', '宜春市', '360000');
INSERT INTO tbarea VALUES ('360901', '市辖区', '360900');
INSERT INTO tbarea VALUES ('360902', '袁州区', '360900');
INSERT INTO tbarea VALUES ('360921', '奉新县', '360900');
INSERT INTO tbarea VALUES ('360922', '万载县', '360900');
INSERT INTO tbarea VALUES ('360923', '上高县', '360900');
INSERT INTO tbarea VALUES ('360924', '宜丰县', '360900');
INSERT INTO tbarea VALUES ('360925', '靖安县', '360900');
INSERT INTO tbarea VALUES ('360926', '铜鼓县', '360900');
INSERT INTO tbarea VALUES ('360981', '丰城市', '360900');
INSERT INTO tbarea VALUES ('360982', '樟树市', '360900');
INSERT INTO tbarea VALUES ('360983', '高安市', '360900');
INSERT INTO tbarea VALUES ('361000', '抚州市', '360000');
INSERT INTO tbarea VALUES ('361001', '市辖区', '361000');
INSERT INTO tbarea VALUES ('361002', '临川区', '361000');
INSERT INTO tbarea VALUES ('361021', '南城县', '361000');
INSERT INTO tbarea VALUES ('361022', '黎川县', '361000');
INSERT INTO tbarea VALUES ('361023', '南丰县', '361000');
INSERT INTO tbarea VALUES ('361024', '崇仁县', '361000');
INSERT INTO tbarea VALUES ('361025', '乐安县', '361000');
INSERT INTO tbarea VALUES ('361026', '宜黄县', '361000');
INSERT INTO tbarea VALUES ('361027', '金溪县', '361000');
INSERT INTO tbarea VALUES ('361028', '资溪县', '361000');
INSERT INTO tbarea VALUES ('361029', '东乡县', '361000');
INSERT INTO tbarea VALUES ('361030', '广昌县', '361000');
INSERT INTO tbarea VALUES ('361100', '上饶市', '360000');
INSERT INTO tbarea VALUES ('361101', '市辖区', '361100');
INSERT INTO tbarea VALUES ('361102', '信州区', '361100');
INSERT INTO tbarea VALUES ('361121', '上饶县', '361100');
INSERT INTO tbarea VALUES ('361122', '广丰县', '361100');
INSERT INTO tbarea VALUES ('361123', '玉山县', '361100');
INSERT INTO tbarea VALUES ('361124', '铅山县', '361100');
INSERT INTO tbarea VALUES ('361125', '横峰县', '361100');
INSERT INTO tbarea VALUES ('361126', '弋阳县', '361100');
INSERT INTO tbarea VALUES ('361127', '余干县', '361100');
INSERT INTO tbarea VALUES ('361128', '鄱阳县', '361100');
INSERT INTO tbarea VALUES ('361129', '万年县', '361100');
INSERT INTO tbarea VALUES ('361130', '婺源县', '361100');
INSERT INTO tbarea VALUES ('361181', '德兴市', '361100');
INSERT INTO tbarea VALUES ('370000', '山东省', '0');
INSERT INTO tbarea VALUES ('370100', '济南市', '370000');
INSERT INTO tbarea VALUES ('370101', '市辖区', '370100');
INSERT INTO tbarea VALUES ('370102', '历下区', '370100');
INSERT INTO tbarea VALUES ('370103', '市中区', '370100');
INSERT INTO tbarea VALUES ('370104', '槐荫区', '370100');
INSERT INTO tbarea VALUES ('370105', '天桥区', '370100');
INSERT INTO tbarea VALUES ('370112', '历城区', '370100');
INSERT INTO tbarea VALUES ('370113', '长清区', '370100');
INSERT INTO tbarea VALUES ('370124', '平阴县', '370100');
INSERT INTO tbarea VALUES ('370125', '济阳县', '370100');
INSERT INTO tbarea VALUES ('370126', '商河县', '370100');
INSERT INTO tbarea VALUES ('370181', '章丘市', '370100');
INSERT INTO tbarea VALUES ('370200', '青岛市', '370000');
INSERT INTO tbarea VALUES ('370201', '市辖区', '370200');
INSERT INTO tbarea VALUES ('370202', '市南区', '370200');
INSERT INTO tbarea VALUES ('370203', '市北区', '370200');
INSERT INTO tbarea VALUES ('370205', '四方区', '370200');
INSERT INTO tbarea VALUES ('370211', '黄岛区', '370200');
INSERT INTO tbarea VALUES ('370212', '崂山区', '370200');
INSERT INTO tbarea VALUES ('370213', '李沧区', '370200');
INSERT INTO tbarea VALUES ('370214', '城阳区', '370200');
INSERT INTO tbarea VALUES ('370281', '胶州市', '370200');
INSERT INTO tbarea VALUES ('370282', '即墨市', '370200');
INSERT INTO tbarea VALUES ('370283', '平度市', '370200');
INSERT INTO tbarea VALUES ('370284', '胶南市', '370200');
INSERT INTO tbarea VALUES ('370285', '莱西市', '370200');
INSERT INTO tbarea VALUES ('370300', '淄博市', '370000');
INSERT INTO tbarea VALUES ('370301', '市辖区', '370300');
INSERT INTO tbarea VALUES ('370302', '淄川区', '370300');
INSERT INTO tbarea VALUES ('370303', '张店区', '370300');
INSERT INTO tbarea VALUES ('370304', '博山区', '370300');
INSERT INTO tbarea VALUES ('370305', '临淄区', '370300');
INSERT INTO tbarea VALUES ('370306', '周村区', '370300');
INSERT INTO tbarea VALUES ('370321', '桓台县', '370300');
INSERT INTO tbarea VALUES ('370322', '高青县', '370300');
INSERT INTO tbarea VALUES ('370323', '沂源县', '370300');
INSERT INTO tbarea VALUES ('370400', '枣庄市', '370000');
INSERT INTO tbarea VALUES ('370401', '市辖区', '370400');
INSERT INTO tbarea VALUES ('370402', '市中区', '370400');
INSERT INTO tbarea VALUES ('370403', '薛城区', '370400');
INSERT INTO tbarea VALUES ('370404', '峄城区', '370400');
INSERT INTO tbarea VALUES ('370405', '台儿庄区', '370400');
INSERT INTO tbarea VALUES ('370406', '山亭区', '370400');
INSERT INTO tbarea VALUES ('370481', '滕州市', '370400');
INSERT INTO tbarea VALUES ('370500', '东营市', '370000');
INSERT INTO tbarea VALUES ('370501', '市辖区', '370500');
INSERT INTO tbarea VALUES ('370502', '东营区', '370500');
INSERT INTO tbarea VALUES ('370503', '河口区', '370500');
INSERT INTO tbarea VALUES ('370521', '垦利县', '370500');
INSERT INTO tbarea VALUES ('370522', '利津县', '370500');
INSERT INTO tbarea VALUES ('370523', '广饶县', '370500');
INSERT INTO tbarea VALUES ('370600', '烟台市', '370000');
INSERT INTO tbarea VALUES ('370601', '市辖区', '370600');
INSERT INTO tbarea VALUES ('370602', '芝罘区', '370600');
INSERT INTO tbarea VALUES ('370611', '福山区', '370600');
INSERT INTO tbarea VALUES ('370612', '牟平区', '370600');
INSERT INTO tbarea VALUES ('370613', '莱山区', '370600');
INSERT INTO tbarea VALUES ('370634', '长岛县', '370600');
INSERT INTO tbarea VALUES ('370681', '龙口市', '370600');
INSERT INTO tbarea VALUES ('370682', '莱阳市', '370600');
INSERT INTO tbarea VALUES ('370683', '莱州市', '370600');
INSERT INTO tbarea VALUES ('370684', '蓬莱市', '370600');
INSERT INTO tbarea VALUES ('370685', '招远市', '370600');
INSERT INTO tbarea VALUES ('370686', '栖霞市', '370600');
INSERT INTO tbarea VALUES ('370687', '海阳市', '370600');
INSERT INTO tbarea VALUES ('370700', '潍坊市', '370000');
INSERT INTO tbarea VALUES ('370701', '市辖区', '370700');
INSERT INTO tbarea VALUES ('370702', '潍城区', '370700');
INSERT INTO tbarea VALUES ('370703', '寒亭区', '370700');
INSERT INTO tbarea VALUES ('370704', '坊子区', '370700');
INSERT INTO tbarea VALUES ('370705', '奎文区', '370700');
INSERT INTO tbarea VALUES ('370724', '临朐县', '370700');
INSERT INTO tbarea VALUES ('370725', '昌乐县', '370700');
INSERT INTO tbarea VALUES ('370781', '青州市', '370700');
INSERT INTO tbarea VALUES ('370782', '诸城市', '370700');
INSERT INTO tbarea VALUES ('370783', '寿光市', '370700');
INSERT INTO tbarea VALUES ('370784', '安丘市', '370700');
INSERT INTO tbarea VALUES ('370785', '高密市', '370700');
INSERT INTO tbarea VALUES ('370786', '昌邑市', '370700');
INSERT INTO tbarea VALUES ('370800', '济宁市', '370000');
INSERT INTO tbarea VALUES ('370801', '市辖区', '370800');
INSERT INTO tbarea VALUES ('370802', '市中区', '370800');
INSERT INTO tbarea VALUES ('370811', '任城区', '370800');
INSERT INTO tbarea VALUES ('370826', '微山县', '370800');
INSERT INTO tbarea VALUES ('370827', '鱼台县', '370800');
INSERT INTO tbarea VALUES ('370828', '金乡县', '370800');
INSERT INTO tbarea VALUES ('370829', '嘉祥县', '370800');
INSERT INTO tbarea VALUES ('370830', '汶上县', '370800');
INSERT INTO tbarea VALUES ('370831', '泗水县', '370800');
INSERT INTO tbarea VALUES ('370832', '梁山县', '370800');
INSERT INTO tbarea VALUES ('370881', '曲阜市', '370800');
INSERT INTO tbarea VALUES ('370882', '兖州市', '370800');
INSERT INTO tbarea VALUES ('370883', '邹城市', '370800');
INSERT INTO tbarea VALUES ('370900', '泰安市', '370000');
INSERT INTO tbarea VALUES ('370901', '市辖区', '370900');
INSERT INTO tbarea VALUES ('370902', '泰山区', '370900');
INSERT INTO tbarea VALUES ('370911', '岱岳区', '370900');
INSERT INTO tbarea VALUES ('370921', '宁阳县', '370900');
INSERT INTO tbarea VALUES ('370923', '东平县', '370900');
INSERT INTO tbarea VALUES ('370982', '新泰市', '370900');
INSERT INTO tbarea VALUES ('370983', '肥城市', '370900');
INSERT INTO tbarea VALUES ('371000', '威海市', '370000');
INSERT INTO tbarea VALUES ('371001', '市辖区', '371000');
INSERT INTO tbarea VALUES ('371002', '环翠区', '371000');
INSERT INTO tbarea VALUES ('371081', '文登市', '371000');
INSERT INTO tbarea VALUES ('371082', '荣成市', '371000');
INSERT INTO tbarea VALUES ('371083', '乳山市', '371000');
INSERT INTO tbarea VALUES ('371100', '日照市', '370000');
INSERT INTO tbarea VALUES ('371101', '市辖区', '371100');
INSERT INTO tbarea VALUES ('371102', '东港区', '371100');
INSERT INTO tbarea VALUES ('371103', '岚山区', '371100');
INSERT INTO tbarea VALUES ('371121', '五莲县', '371100');
INSERT INTO tbarea VALUES ('371122', '莒县', '371100');
INSERT INTO tbarea VALUES ('371200', '莱芜市', '370000');
INSERT INTO tbarea VALUES ('371201', '市辖区', '371200');
INSERT INTO tbarea VALUES ('371202', '莱城区', '371200');
INSERT INTO tbarea VALUES ('371203', '钢城区', '371200');
INSERT INTO tbarea VALUES ('371300', '临沂市', '370000');
INSERT INTO tbarea VALUES ('371301', '市辖区', '371300');
INSERT INTO tbarea VALUES ('371302', '兰山区', '371300');
INSERT INTO tbarea VALUES ('371311', '罗庄区', '371300');
INSERT INTO tbarea VALUES ('371312', '河东区', '371300');
INSERT INTO tbarea VALUES ('371321', '沂南县', '371300');
INSERT INTO tbarea VALUES ('371322', '郯城县', '371300');
INSERT INTO tbarea VALUES ('371323', '沂水县', '371300');
INSERT INTO tbarea VALUES ('371324', '苍山县', '371300');
INSERT INTO tbarea VALUES ('371325', '费县', '371300');
INSERT INTO tbarea VALUES ('371326', '平邑县', '371300');
INSERT INTO tbarea VALUES ('371327', '莒南县', '371300');
INSERT INTO tbarea VALUES ('371328', '蒙阴县', '371300');
INSERT INTO tbarea VALUES ('371329', '临沭县', '371300');
INSERT INTO tbarea VALUES ('371400', '德州市', '370000');
INSERT INTO tbarea VALUES ('371401', '市辖区', '371400');
INSERT INTO tbarea VALUES ('371402', '德城区', '371400');
INSERT INTO tbarea VALUES ('371421', '陵县', '371400');
INSERT INTO tbarea VALUES ('371422', '宁津县', '371400');
INSERT INTO tbarea VALUES ('371423', '庆云县', '371400');
INSERT INTO tbarea VALUES ('371424', '临邑县', '371400');
INSERT INTO tbarea VALUES ('371425', '齐河县', '371400');
INSERT INTO tbarea VALUES ('371426', '平原县', '371400');
INSERT INTO tbarea VALUES ('371427', '夏津县', '371400');
INSERT INTO tbarea VALUES ('371428', '武城县', '371400');
INSERT INTO tbarea VALUES ('371481', '乐陵市', '371400');
INSERT INTO tbarea VALUES ('371482', '禹城市', '371400');
INSERT INTO tbarea VALUES ('371500', '聊城市', '370000');
INSERT INTO tbarea VALUES ('371501', '市辖区', '371500');
INSERT INTO tbarea VALUES ('371502', '东昌府区', '371500');
INSERT INTO tbarea VALUES ('371521', '阳谷县', '371500');
INSERT INTO tbarea VALUES ('371522', '莘县', '371500');
INSERT INTO tbarea VALUES ('371523', '茌平县', '371500');
INSERT INTO tbarea VALUES ('371524', '东阿县', '371500');
INSERT INTO tbarea VALUES ('371525', '冠县', '371500');
INSERT INTO tbarea VALUES ('371526', '高唐县', '371500');
INSERT INTO tbarea VALUES ('371581', '临清市', '371500');
INSERT INTO tbarea VALUES ('371600', '滨州市', '370000');
INSERT INTO tbarea VALUES ('371601', '市辖区', '371600');
INSERT INTO tbarea VALUES ('371602', '滨城区', '371600');
INSERT INTO tbarea VALUES ('371621', '惠民县', '371600');
INSERT INTO tbarea VALUES ('371622', '阳信县', '371600');
INSERT INTO tbarea VALUES ('371623', '无棣县', '371600');
INSERT INTO tbarea VALUES ('371624', '沾化县', '371600');
INSERT INTO tbarea VALUES ('371625', '博兴县', '371600');
INSERT INTO tbarea VALUES ('371626', '邹平县', '371600');
INSERT INTO tbarea VALUES ('371700', '菏泽市', '370000');
INSERT INTO tbarea VALUES ('371701', '市辖区', '371700');
INSERT INTO tbarea VALUES ('371702', '牡丹区', '371700');
INSERT INTO tbarea VALUES ('371721', '曹县', '371700');
INSERT INTO tbarea VALUES ('371722', '单县', '371700');
INSERT INTO tbarea VALUES ('371723', '成武县', '371700');
INSERT INTO tbarea VALUES ('371724', '巨野县', '371700');
INSERT INTO tbarea VALUES ('371725', '郓城县', '371700');
INSERT INTO tbarea VALUES ('371726', '鄄城县', '371700');
INSERT INTO tbarea VALUES ('371727', '定陶县', '371700');
INSERT INTO tbarea VALUES ('371728', '东明县', '371700');
INSERT INTO tbarea VALUES ('410000', '河南省', '0');
INSERT INTO tbarea VALUES ('410100', '郑州市', '410000');
INSERT INTO tbarea VALUES ('410101', '市辖区', '410100');
INSERT INTO tbarea VALUES ('410102', '中原区', '410100');
INSERT INTO tbarea VALUES ('410103', '二七区', '410100');
INSERT INTO tbarea VALUES ('410104', '管城回族区', '410100');
INSERT INTO tbarea VALUES ('410105', '金水区', '410100');
INSERT INTO tbarea VALUES ('410106', '上街区', '410100');
INSERT INTO tbarea VALUES ('410108', '惠济区', '410100');
INSERT INTO tbarea VALUES ('410122', '中牟县', '410100');
INSERT INTO tbarea VALUES ('410181', '巩义市', '410100');
INSERT INTO tbarea VALUES ('410182', '荥阳市', '410100');
INSERT INTO tbarea VALUES ('410183', '新密市', '410100');
INSERT INTO tbarea VALUES ('410184', '新郑市', '410100');
INSERT INTO tbarea VALUES ('410185', '登封市', '410100');
INSERT INTO tbarea VALUES ('410200', '开封市', '410000');
INSERT INTO tbarea VALUES ('410201', '市辖区', '410200');
INSERT INTO tbarea VALUES ('410202', '龙亭区', '410200');
INSERT INTO tbarea VALUES ('410203', '顺河回族区', '410200');
INSERT INTO tbarea VALUES ('410204', '鼓楼区', '410200');
INSERT INTO tbarea VALUES ('410205', '禹王台区', '410200');
INSERT INTO tbarea VALUES ('410211', '金明区', '410200');
INSERT INTO tbarea VALUES ('410221', '杞县', '410200');
INSERT INTO tbarea VALUES ('410222', '通许县', '410200');
INSERT INTO tbarea VALUES ('410223', '尉氏县', '410200');
INSERT INTO tbarea VALUES ('410224', '开封县', '410200');
INSERT INTO tbarea VALUES ('410225', '兰考县', '410200');
INSERT INTO tbarea VALUES ('410300', '洛阳市', '410000');
INSERT INTO tbarea VALUES ('410301', '市辖区', '410300');
INSERT INTO tbarea VALUES ('410302', '老城区', '410300');
INSERT INTO tbarea VALUES ('410303', '西工区', '410300');
INSERT INTO tbarea VALUES ('410304', '瀍河回族区', '410300');
INSERT INTO tbarea VALUES ('410305', '涧西区', '410300');
INSERT INTO tbarea VALUES ('410306', '吉利区', '410300');
INSERT INTO tbarea VALUES ('410311', '洛龙区', '410300');
INSERT INTO tbarea VALUES ('410322', '孟津县', '410300');
INSERT INTO tbarea VALUES ('410323', '新安县', '410300');
INSERT INTO tbarea VALUES ('410324', '栾川县', '410300');
INSERT INTO tbarea VALUES ('410325', '嵩县', '410300');
INSERT INTO tbarea VALUES ('410326', '汝阳县', '410300');
INSERT INTO tbarea VALUES ('410327', '宜阳县', '410300');
INSERT INTO tbarea VALUES ('410328', '洛宁县', '410300');
INSERT INTO tbarea VALUES ('410329', '伊川县', '410300');
INSERT INTO tbarea VALUES ('410381', '偃师市', '410300');
INSERT INTO tbarea VALUES ('410400', '平顶山市', '410000');
INSERT INTO tbarea VALUES ('410401', '市辖区', '410400');
INSERT INTO tbarea VALUES ('410402', '新华区', '410400');
INSERT INTO tbarea VALUES ('410403', '卫东区', '410400');
INSERT INTO tbarea VALUES ('410404', '石龙区', '410400');
INSERT INTO tbarea VALUES ('410411', '湛河区', '410400');
INSERT INTO tbarea VALUES ('410421', '宝丰县', '410400');
INSERT INTO tbarea VALUES ('410422', '叶县', '410400');
INSERT INTO tbarea VALUES ('410423', '鲁山县', '410400');
INSERT INTO tbarea VALUES ('410425', '郏县', '410400');
INSERT INTO tbarea VALUES ('410481', '舞钢市', '410400');
INSERT INTO tbarea VALUES ('410482', '汝州市', '410400');
INSERT INTO tbarea VALUES ('410500', '安阳市', '410000');
INSERT INTO tbarea VALUES ('410501', '市辖区', '410500');
INSERT INTO tbarea VALUES ('410502', '文峰区', '410500');
INSERT INTO tbarea VALUES ('410503', '北关区', '410500');
INSERT INTO tbarea VALUES ('410505', '殷都区', '410500');
INSERT INTO tbarea VALUES ('410506', '龙安区', '410500');
INSERT INTO tbarea VALUES ('410522', '安阳县', '410500');
INSERT INTO tbarea VALUES ('410523', '汤阴县', '410500');
INSERT INTO tbarea VALUES ('410526', '滑县', '410500');
INSERT INTO tbarea VALUES ('410527', '内黄县', '410500');
INSERT INTO tbarea VALUES ('410581', '林州市', '410500');
INSERT INTO tbarea VALUES ('410600', '鹤壁市', '410000');
INSERT INTO tbarea VALUES ('410601', '市辖区', '410600');
INSERT INTO tbarea VALUES ('410602', '鹤山区', '410600');
INSERT INTO tbarea VALUES ('410603', '山城区', '410600');
INSERT INTO tbarea VALUES ('410611', '淇滨区', '410600');
INSERT INTO tbarea VALUES ('410621', '浚县', '410600');
INSERT INTO tbarea VALUES ('410622', '淇县', '410600');
INSERT INTO tbarea VALUES ('410700', '新乡市', '410000');
INSERT INTO tbarea VALUES ('410701', '市辖区', '410700');
INSERT INTO tbarea VALUES ('410702', '红旗区', '410700');
INSERT INTO tbarea VALUES ('410703', '卫滨区', '410700');
INSERT INTO tbarea VALUES ('410704', '凤泉区', '410700');
INSERT INTO tbarea VALUES ('410711', '牧野区', '410700');
INSERT INTO tbarea VALUES ('410721', '新乡县', '410700');
INSERT INTO tbarea VALUES ('410724', '获嘉县', '410700');
INSERT INTO tbarea VALUES ('410725', '原阳县', '410700');
INSERT INTO tbarea VALUES ('410726', '延津县', '410700');
INSERT INTO tbarea VALUES ('410727', '封丘县', '410700');
INSERT INTO tbarea VALUES ('410728', '长垣县', '410700');
INSERT INTO tbarea VALUES ('410781', '卫辉市', '410700');
INSERT INTO tbarea VALUES ('410782', '辉县市', '410700');
INSERT INTO tbarea VALUES ('410800', '焦作市', '410000');
INSERT INTO tbarea VALUES ('410801', '市辖区', '410800');
INSERT INTO tbarea VALUES ('410802', '解放区', '410800');
INSERT INTO tbarea VALUES ('410803', '中站区', '410800');
INSERT INTO tbarea VALUES ('410804', '马村区', '410800');
INSERT INTO tbarea VALUES ('410811', '山阳区', '410800');
INSERT INTO tbarea VALUES ('410821', '修武县', '410800');
INSERT INTO tbarea VALUES ('410822', '博爱县', '410800');
INSERT INTO tbarea VALUES ('410823', '武陟县', '410800');
INSERT INTO tbarea VALUES ('410825', '温县', '410800');
INSERT INTO tbarea VALUES ('410882', '沁阳市', '410800');
INSERT INTO tbarea VALUES ('410883', '孟州市', '410800');
INSERT INTO tbarea VALUES ('410900', '濮阳市', '410000');
INSERT INTO tbarea VALUES ('410901', '市辖区', '410900');
INSERT INTO tbarea VALUES ('410902', '华龙区', '410900');
INSERT INTO tbarea VALUES ('410922', '清丰县', '410900');
INSERT INTO tbarea VALUES ('410923', '南乐县', '410900');
INSERT INTO tbarea VALUES ('410926', '范县', '410900');
INSERT INTO tbarea VALUES ('410927', '台前县', '410900');
INSERT INTO tbarea VALUES ('410928', '濮阳县', '410900');
INSERT INTO tbarea VALUES ('411000', '许昌市', '410000');
INSERT INTO tbarea VALUES ('411001', '市辖区', '411000');
INSERT INTO tbarea VALUES ('411002', '魏都区', '411000');
INSERT INTO tbarea VALUES ('411023', '许昌县', '411000');
INSERT INTO tbarea VALUES ('411024', '鄢陵县', '411000');
INSERT INTO tbarea VALUES ('411025', '襄城县', '411000');
INSERT INTO tbarea VALUES ('411081', '禹州市', '411000');
INSERT INTO tbarea VALUES ('411082', '长葛市', '411000');
INSERT INTO tbarea VALUES ('411100', '漯河市', '410000');
INSERT INTO tbarea VALUES ('411101', '市辖区', '411100');
INSERT INTO tbarea VALUES ('411102', '源汇区', '411100');
INSERT INTO tbarea VALUES ('411103', '郾城区', '411100');
INSERT INTO tbarea VALUES ('411104', '召陵区', '411100');
INSERT INTO tbarea VALUES ('411121', '舞阳县', '411100');
INSERT INTO tbarea VALUES ('411122', '临颍县', '411100');
INSERT INTO tbarea VALUES ('411200', '三门峡市', '410000');
INSERT INTO tbarea VALUES ('411201', '市辖区', '411200');
INSERT INTO tbarea VALUES ('411202', '湖滨区', '411200');
INSERT INTO tbarea VALUES ('411221', '渑池县', '411200');
INSERT INTO tbarea VALUES ('411222', '陕县', '411200');
INSERT INTO tbarea VALUES ('411224', '卢氏县', '411200');
INSERT INTO tbarea VALUES ('411281', '义马市', '411200');
INSERT INTO tbarea VALUES ('411282', '灵宝市', '411200');
INSERT INTO tbarea VALUES ('411300', '南阳市', '410000');
INSERT INTO tbarea VALUES ('411301', '市辖区', '411300');
INSERT INTO tbarea VALUES ('411302', '宛城区', '411300');
INSERT INTO tbarea VALUES ('411303', '卧龙区', '411300');
INSERT INTO tbarea VALUES ('411321', '南召县', '411300');
INSERT INTO tbarea VALUES ('411322', '方城县', '411300');
INSERT INTO tbarea VALUES ('411323', '西峡县', '411300');
INSERT INTO tbarea VALUES ('411324', '镇平县', '411300');
INSERT INTO tbarea VALUES ('411325', '内乡县', '411300');
INSERT INTO tbarea VALUES ('411326', '淅川县', '411300');
INSERT INTO tbarea VALUES ('411327', '社旗县', '411300');
INSERT INTO tbarea VALUES ('411328', '唐河县', '411300');
INSERT INTO tbarea VALUES ('411329', '新野县', '411300');
INSERT INTO tbarea VALUES ('411330', '桐柏县', '411300');
INSERT INTO tbarea VALUES ('411381', '邓州市', '411300');
INSERT INTO tbarea VALUES ('411400', '商丘市', '410000');
INSERT INTO tbarea VALUES ('411401', '市辖区', '411400');
INSERT INTO tbarea VALUES ('411402', '梁园区', '411400');
INSERT INTO tbarea VALUES ('411403', '睢阳区', '411400');
INSERT INTO tbarea VALUES ('411421', '民权县', '411400');
INSERT INTO tbarea VALUES ('411422', '睢县', '411400');
INSERT INTO tbarea VALUES ('411423', '宁陵县', '411400');
INSERT INTO tbarea VALUES ('411424', '柘城县', '411400');
INSERT INTO tbarea VALUES ('411425', '虞城县', '411400');
INSERT INTO tbarea VALUES ('411426', '夏邑县', '411400');
INSERT INTO tbarea VALUES ('411481', '永城市', '411400');
INSERT INTO tbarea VALUES ('411500', '信阳市', '410000');
INSERT INTO tbarea VALUES ('411501', '市辖区', '411500');
INSERT INTO tbarea VALUES ('411502', '浉河区', '411500');
INSERT INTO tbarea VALUES ('411503', '平桥区', '411500');
INSERT INTO tbarea VALUES ('411521', '罗山县', '411500');
INSERT INTO tbarea VALUES ('411522', '光山县', '411500');
INSERT INTO tbarea VALUES ('411523', '新县', '411500');
INSERT INTO tbarea VALUES ('411524', '商城县', '411500');
INSERT INTO tbarea VALUES ('411525', '固始县', '411500');
INSERT INTO tbarea VALUES ('411526', '潢川县', '411500');
INSERT INTO tbarea VALUES ('411527', '淮滨县', '411500');
INSERT INTO tbarea VALUES ('411528', '息县', '411500');
INSERT INTO tbarea VALUES ('411600', '周口市', '410000');
INSERT INTO tbarea VALUES ('411601', '市辖区', '411600');
INSERT INTO tbarea VALUES ('411602', '川汇区', '411600');
INSERT INTO tbarea VALUES ('411621', '扶沟县', '411600');
INSERT INTO tbarea VALUES ('411622', '西华县', '411600');
INSERT INTO tbarea VALUES ('411623', '商水县', '411600');
INSERT INTO tbarea VALUES ('411624', '沈丘县', '411600');
INSERT INTO tbarea VALUES ('411625', '郸城县', '411600');
INSERT INTO tbarea VALUES ('411626', '淮阳县', '411600');
INSERT INTO tbarea VALUES ('411627', '太康县', '411600');
INSERT INTO tbarea VALUES ('411628', '鹿邑县', '411600');
INSERT INTO tbarea VALUES ('411681', '项城市', '411600');
INSERT INTO tbarea VALUES ('411700', '驻马店市', '410000');
INSERT INTO tbarea VALUES ('411701', '市辖区', '411700');
INSERT INTO tbarea VALUES ('411702', '驿城区', '411700');
INSERT INTO tbarea VALUES ('411721', '西平县', '411700');
INSERT INTO tbarea VALUES ('411722', '上蔡县', '411700');
INSERT INTO tbarea VALUES ('411723', '平舆县', '411700');
INSERT INTO tbarea VALUES ('411724', '正阳县', '411700');
INSERT INTO tbarea VALUES ('411725', '确山县', '411700');
INSERT INTO tbarea VALUES ('411726', '泌阳县', '411700');
INSERT INTO tbarea VALUES ('411727', '汝南县', '411700');
INSERT INTO tbarea VALUES ('411728', '遂平县', '411700');
INSERT INTO tbarea VALUES ('411729', '新蔡县', '411700');
INSERT INTO tbarea VALUES ('419000', '省直辖县级行政区划', '410000');
INSERT INTO tbarea VALUES ('419001', '济源市', '419000');
INSERT INTO tbarea VALUES ('420000', '湖北省', '0');
INSERT INTO tbarea VALUES ('420100', '武汉市', '420000');
INSERT INTO tbarea VALUES ('420101', '市辖区', '420100');
INSERT INTO tbarea VALUES ('420102', '江岸区', '420100');
INSERT INTO tbarea VALUES ('420103', '江汉区', '420100');
INSERT INTO tbarea VALUES ('420104', '硚口区', '420100');
INSERT INTO tbarea VALUES ('420105', '汉阳区', '420100');
INSERT INTO tbarea VALUES ('420106', '武昌区', '420100');
INSERT INTO tbarea VALUES ('420107', '青山区', '420100');
INSERT INTO tbarea VALUES ('420111', '洪山区', '420100');
INSERT INTO tbarea VALUES ('420112', '东西湖区', '420100');
INSERT INTO tbarea VALUES ('420113', '汉南区', '420100');
INSERT INTO tbarea VALUES ('420114', '蔡甸区', '420100');
INSERT INTO tbarea VALUES ('420115', '江夏区', '420100');
INSERT INTO tbarea VALUES ('420116', '黄陂区', '420100');
INSERT INTO tbarea VALUES ('420117', '新洲区', '420100');
INSERT INTO tbarea VALUES ('420200', '黄石市', '420000');
INSERT INTO tbarea VALUES ('420201', '市辖区', '420200');
INSERT INTO tbarea VALUES ('420202', '黄石港区', '420200');
INSERT INTO tbarea VALUES ('420203', '西塞山区', '420200');
INSERT INTO tbarea VALUES ('420204', '下陆区', '420200');
INSERT INTO tbarea VALUES ('420205', '铁山区', '420200');
INSERT INTO tbarea VALUES ('420222', '阳新县', '420200');
INSERT INTO tbarea VALUES ('420281', '大冶市', '420200');
INSERT INTO tbarea VALUES ('420300', '十堰市', '420000');
INSERT INTO tbarea VALUES ('420301', '市辖区', '420300');
INSERT INTO tbarea VALUES ('420302', '茅箭区', '420300');
INSERT INTO tbarea VALUES ('420303', '张湾区', '420300');
INSERT INTO tbarea VALUES ('420321', '郧县', '420300');
INSERT INTO tbarea VALUES ('420322', '郧西县', '420300');
INSERT INTO tbarea VALUES ('420323', '竹山县', '420300');
INSERT INTO tbarea VALUES ('420324', '竹溪县', '420300');
INSERT INTO tbarea VALUES ('420325', '房县', '420300');
INSERT INTO tbarea VALUES ('420381', '丹江口市', '420300');
INSERT INTO tbarea VALUES ('420500', '宜昌市', '420000');
INSERT INTO tbarea VALUES ('420501', '市辖区', '420500');
INSERT INTO tbarea VALUES ('420502', '西陵区', '420500');
INSERT INTO tbarea VALUES ('420503', '伍家岗区', '420500');
INSERT INTO tbarea VALUES ('420504', '点军区', '420500');
INSERT INTO tbarea VALUES ('420505', '猇亭区', '420500');
INSERT INTO tbarea VALUES ('420506', '夷陵区', '420500');
INSERT INTO tbarea VALUES ('420525', '远安县', '420500');
INSERT INTO tbarea VALUES ('420526', '兴山县', '420500');
INSERT INTO tbarea VALUES ('420527', '秭归县', '420500');
INSERT INTO tbarea VALUES ('420528', '长阳土家族自治县', '420500');
INSERT INTO tbarea VALUES ('420529', '五峰土家族自治县', '420500');
INSERT INTO tbarea VALUES ('420581', '宜都市', '420500');
INSERT INTO tbarea VALUES ('420582', '当阳市', '420500');
INSERT INTO tbarea VALUES ('420583', '枝江市', '420500');
INSERT INTO tbarea VALUES ('420600', '襄阳市', '420000');
INSERT INTO tbarea VALUES ('420601', '市辖区', '420600');
INSERT INTO tbarea VALUES ('420602', '襄城区', '420600');
INSERT INTO tbarea VALUES ('420606', '樊城区', '420600');
INSERT INTO tbarea VALUES ('420607', '襄州区', '420600');
INSERT INTO tbarea VALUES ('420624', '南漳县', '420600');
INSERT INTO tbarea VALUES ('420625', '谷城县', '420600');
INSERT INTO tbarea VALUES ('420626', '保康县', '420600');
INSERT INTO tbarea VALUES ('420682', '老河口市', '420600');
INSERT INTO tbarea VALUES ('420683', '枣阳市', '420600');
INSERT INTO tbarea VALUES ('420684', '宜城市', '420600');
INSERT INTO tbarea VALUES ('420700', '鄂州市', '420000');
INSERT INTO tbarea VALUES ('420701', '市辖区', '420700');
INSERT INTO tbarea VALUES ('420702', '梁子湖区', '420700');
INSERT INTO tbarea VALUES ('420703', '华容区', '420700');
INSERT INTO tbarea VALUES ('420704', '鄂城区', '420700');
INSERT INTO tbarea VALUES ('420800', '荆门市', '420000');
INSERT INTO tbarea VALUES ('420801', '市辖区', '420800');
INSERT INTO tbarea VALUES ('420802', '东宝区', '420800');
INSERT INTO tbarea VALUES ('420804', '掇刀区', '420800');
INSERT INTO tbarea VALUES ('420821', '京山县', '420800');
INSERT INTO tbarea VALUES ('420822', '沙洋县', '420800');
INSERT INTO tbarea VALUES ('420881', '钟祥市', '420800');
INSERT INTO tbarea VALUES ('420900', '孝感市', '420000');
INSERT INTO tbarea VALUES ('420901', '市辖区', '420900');
INSERT INTO tbarea VALUES ('420902', '孝南区', '420900');
INSERT INTO tbarea VALUES ('420921', '孝昌县', '420900');
INSERT INTO tbarea VALUES ('420922', '大悟县', '420900');
INSERT INTO tbarea VALUES ('420923', '云梦县', '420900');
INSERT INTO tbarea VALUES ('420981', '应城市', '420900');
INSERT INTO tbarea VALUES ('420982', '安陆市', '420900');
INSERT INTO tbarea VALUES ('420984', '汉川市', '420900');
INSERT INTO tbarea VALUES ('421000', '荆州市', '420000');
INSERT INTO tbarea VALUES ('421001', '市辖区', '421000');
INSERT INTO tbarea VALUES ('421002', '沙市区', '421000');
INSERT INTO tbarea VALUES ('421003', '荆州区', '421000');
INSERT INTO tbarea VALUES ('421022', '公安县', '421000');
INSERT INTO tbarea VALUES ('421023', '监利县', '421000');
INSERT INTO tbarea VALUES ('421024', '江陵县', '421000');
INSERT INTO tbarea VALUES ('421081', '石首市', '421000');
INSERT INTO tbarea VALUES ('421083', '洪湖市', '421000');
INSERT INTO tbarea VALUES ('421087', '松滋市', '421000');
INSERT INTO tbarea VALUES ('421100', '黄冈市', '420000');
INSERT INTO tbarea VALUES ('421101', '市辖区', '421100');
INSERT INTO tbarea VALUES ('421102', '黄州区', '421100');
INSERT INTO tbarea VALUES ('421121', '团风县', '421100');
INSERT INTO tbarea VALUES ('421122', '红安县', '421100');
INSERT INTO tbarea VALUES ('421123', '罗田县', '421100');
INSERT INTO tbarea VALUES ('421124', '英山县', '421100');
INSERT INTO tbarea VALUES ('421125', '浠水县', '421100');
INSERT INTO tbarea VALUES ('421126', '蕲春县', '421100');
INSERT INTO tbarea VALUES ('421127', '黄梅县', '421100');
INSERT INTO tbarea VALUES ('421181', '麻城市', '421100');
INSERT INTO tbarea VALUES ('421182', '武穴市', '421100');
INSERT INTO tbarea VALUES ('421200', '咸宁市', '420000');
INSERT INTO tbarea VALUES ('421201', '市辖区', '421200');
INSERT INTO tbarea VALUES ('421202', '咸安区', '421200');
INSERT INTO tbarea VALUES ('421221', '嘉鱼县', '421200');
INSERT INTO tbarea VALUES ('421222', '通城县', '421200');
INSERT INTO tbarea VALUES ('421223', '崇阳县', '421200');
INSERT INTO tbarea VALUES ('421224', '通山县', '421200');
INSERT INTO tbarea VALUES ('421281', '赤壁市', '421200');
INSERT INTO tbarea VALUES ('421300', '随州市', '420000');
INSERT INTO tbarea VALUES ('421301', '市辖区', '421300');
INSERT INTO tbarea VALUES ('421303', '曾都区', '421300');
INSERT INTO tbarea VALUES ('421321', '随县', '421300');
INSERT INTO tbarea VALUES ('421381', '广水市', '421300');
INSERT INTO tbarea VALUES ('422800', '恩施土家族苗族自治州', '420000');
INSERT INTO tbarea VALUES ('422801', '恩施市', '422800');
INSERT INTO tbarea VALUES ('422802', '利川市', '422800');
INSERT INTO tbarea VALUES ('422822', '建始县', '422800');
INSERT INTO tbarea VALUES ('422823', '巴东县', '422800');
INSERT INTO tbarea VALUES ('422825', '宣恩县', '422800');
INSERT INTO tbarea VALUES ('422826', '咸丰县', '422800');
INSERT INTO tbarea VALUES ('422827', '来凤县', '422800');
INSERT INTO tbarea VALUES ('422828', '鹤峰县', '422800');
INSERT INTO tbarea VALUES ('429000', '省直辖县级行政区划', '420000');
INSERT INTO tbarea VALUES ('429004', '仙桃市', '429000');
INSERT INTO tbarea VALUES ('429005', '潜江市', '429000');
INSERT INTO tbarea VALUES ('429006', '天门市', '429000');
INSERT INTO tbarea VALUES ('429021', '神农架林区', '429000');
INSERT INTO tbarea VALUES ('430000', '湖南省', '0');
INSERT INTO tbarea VALUES ('430100', '长沙市', '430000');
INSERT INTO tbarea VALUES ('430101', '市辖区', '430100');
INSERT INTO tbarea VALUES ('430102', '芙蓉区', '430100');
INSERT INTO tbarea VALUES ('430103', '天心区', '430100');
INSERT INTO tbarea VALUES ('430104', '岳麓区', '430100');
INSERT INTO tbarea VALUES ('430105', '开福区', '430100');
INSERT INTO tbarea VALUES ('430111', '雨花区', '430100');
INSERT INTO tbarea VALUES ('430112', '望城区', '430100');
INSERT INTO tbarea VALUES ('430121', '长沙县', '430100');
INSERT INTO tbarea VALUES ('430124', '宁乡县', '430100');
INSERT INTO tbarea VALUES ('430181', '浏阳市', '430100');
INSERT INTO tbarea VALUES ('430200', '株洲市', '430000');
INSERT INTO tbarea VALUES ('430201', '市辖区', '430200');
INSERT INTO tbarea VALUES ('430202', '荷塘区', '430200');
INSERT INTO tbarea VALUES ('430203', '芦淞区', '430200');
INSERT INTO tbarea VALUES ('430204', '石峰区', '430200');
INSERT INTO tbarea VALUES ('430211', '天元区', '430200');
INSERT INTO tbarea VALUES ('430221', '株洲县', '430200');
INSERT INTO tbarea VALUES ('430223', '攸县', '430200');
INSERT INTO tbarea VALUES ('430224', '茶陵县', '430200');
INSERT INTO tbarea VALUES ('430225', '炎陵县', '430200');
INSERT INTO tbarea VALUES ('430281', '醴陵市', '430200');
INSERT INTO tbarea VALUES ('430300', '湘潭市', '430000');
INSERT INTO tbarea VALUES ('430301', '市辖区', '430300');
INSERT INTO tbarea VALUES ('430302', '雨湖区', '430300');
INSERT INTO tbarea VALUES ('430304', '岳塘区', '430300');
INSERT INTO tbarea VALUES ('430321', '湘潭县', '430300');
INSERT INTO tbarea VALUES ('430381', '湘乡市', '430300');
INSERT INTO tbarea VALUES ('430382', '韶山市', '430300');
INSERT INTO tbarea VALUES ('430400', '衡阳市', '430000');
INSERT INTO tbarea VALUES ('430401', '市辖区', '430400');
INSERT INTO tbarea VALUES ('430405', '珠晖区', '430400');
INSERT INTO tbarea VALUES ('430406', '雁峰区', '430400');
INSERT INTO tbarea VALUES ('430407', '石鼓区', '430400');
INSERT INTO tbarea VALUES ('430408', '蒸湘区', '430400');
INSERT INTO tbarea VALUES ('430412', '南岳区', '430400');
INSERT INTO tbarea VALUES ('430421', '衡阳县', '430400');
INSERT INTO tbarea VALUES ('430422', '衡南县', '430400');
INSERT INTO tbarea VALUES ('430423', '衡山县', '430400');
INSERT INTO tbarea VALUES ('430424', '衡东县', '430400');
INSERT INTO tbarea VALUES ('430426', '祁东县', '430400');
INSERT INTO tbarea VALUES ('430481', '耒阳市', '430400');
INSERT INTO tbarea VALUES ('430482', '常宁市', '430400');
INSERT INTO tbarea VALUES ('430500', '邵阳市', '430000');
INSERT INTO tbarea VALUES ('430501', '市辖区', '430500');
INSERT INTO tbarea VALUES ('430502', '双清区', '430500');
INSERT INTO tbarea VALUES ('430503', '大祥区', '430500');
INSERT INTO tbarea VALUES ('430511', '北塔区', '430500');
INSERT INTO tbarea VALUES ('430521', '邵东县', '430500');
INSERT INTO tbarea VALUES ('430522', '新邵县', '430500');
INSERT INTO tbarea VALUES ('430523', '邵阳县', '430500');
INSERT INTO tbarea VALUES ('430524', '隆回县', '430500');
INSERT INTO tbarea VALUES ('430525', '洞口县', '430500');
INSERT INTO tbarea VALUES ('430527', '绥宁县', '430500');
INSERT INTO tbarea VALUES ('430528', '新宁县', '430500');
INSERT INTO tbarea VALUES ('430529', '城步苗族自治县', '430500');
INSERT INTO tbarea VALUES ('430581', '武冈市', '430500');
INSERT INTO tbarea VALUES ('430600', '岳阳市', '430000');
INSERT INTO tbarea VALUES ('430601', '市辖区', '430600');
INSERT INTO tbarea VALUES ('430602', '岳阳楼区', '430600');
INSERT INTO tbarea VALUES ('430603', '云溪区', '430600');
INSERT INTO tbarea VALUES ('430611', '君山区', '430600');
INSERT INTO tbarea VALUES ('430621', '岳阳县', '430600');
INSERT INTO tbarea VALUES ('430623', '华容县', '430600');
INSERT INTO tbarea VALUES ('430624', '湘阴县', '430600');
INSERT INTO tbarea VALUES ('430626', '平江县', '430600');
INSERT INTO tbarea VALUES ('430681', '汨罗市', '430600');
INSERT INTO tbarea VALUES ('430682', '临湘市', '430600');
INSERT INTO tbarea VALUES ('430700', '常德市', '430000');
INSERT INTO tbarea VALUES ('430701', '市辖区', '430700');
INSERT INTO tbarea VALUES ('430702', '武陵区', '430700');
INSERT INTO tbarea VALUES ('430703', '鼎城区', '430700');
INSERT INTO tbarea VALUES ('430721', '安乡县', '430700');
INSERT INTO tbarea VALUES ('430722', '汉寿县', '430700');
INSERT INTO tbarea VALUES ('430723', '澧县', '430700');
INSERT INTO tbarea VALUES ('430724', '临澧县', '430700');
INSERT INTO tbarea VALUES ('430725', '桃源县', '430700');
INSERT INTO tbarea VALUES ('430726', '石门县', '430700');
INSERT INTO tbarea VALUES ('430781', '津市市', '430700');
INSERT INTO tbarea VALUES ('430800', '张家界市', '430000');
INSERT INTO tbarea VALUES ('430801', '市辖区', '430800');
INSERT INTO tbarea VALUES ('430802', '永定区', '430800');
INSERT INTO tbarea VALUES ('430811', '武陵源区', '430800');
INSERT INTO tbarea VALUES ('430821', '慈利县', '430800');
INSERT INTO tbarea VALUES ('430822', '桑植县', '430800');
INSERT INTO tbarea VALUES ('430900', '益阳市', '430000');
INSERT INTO tbarea VALUES ('430901', '市辖区', '430900');
INSERT INTO tbarea VALUES ('430902', '资阳区', '430900');
INSERT INTO tbarea VALUES ('430903', '赫山区', '430900');
INSERT INTO tbarea VALUES ('430921', '南县', '430900');
INSERT INTO tbarea VALUES ('430922', '桃江县', '430900');
INSERT INTO tbarea VALUES ('430923', '安化县', '430900');
INSERT INTO tbarea VALUES ('430981', '沅江市', '430900');
INSERT INTO tbarea VALUES ('431000', '郴州市', '430000');
INSERT INTO tbarea VALUES ('431001', '市辖区', '431000');
INSERT INTO tbarea VALUES ('431002', '北湖区', '431000');
INSERT INTO tbarea VALUES ('431003', '苏仙区', '431000');
INSERT INTO tbarea VALUES ('431021', '桂阳县', '431000');
INSERT INTO tbarea VALUES ('431022', '宜章县', '431000');
INSERT INTO tbarea VALUES ('431023', '永兴县', '431000');
INSERT INTO tbarea VALUES ('431024', '嘉禾县', '431000');
INSERT INTO tbarea VALUES ('431025', '临武县', '431000');
INSERT INTO tbarea VALUES ('431026', '汝城县', '431000');
INSERT INTO tbarea VALUES ('431027', '桂东县', '431000');
INSERT INTO tbarea VALUES ('431028', '安仁县', '431000');
INSERT INTO tbarea VALUES ('431081', '资兴市', '431000');
INSERT INTO tbarea VALUES ('431100', '永州市', '430000');
INSERT INTO tbarea VALUES ('431101', '市辖区', '431100');
INSERT INTO tbarea VALUES ('431102', '零陵区', '431100');
INSERT INTO tbarea VALUES ('431103', '冷水滩区', '431100');
INSERT INTO tbarea VALUES ('431121', '祁阳县', '431100');
INSERT INTO tbarea VALUES ('431122', '东安县', '431100');
INSERT INTO tbarea VALUES ('431123', '双牌县', '431100');
INSERT INTO tbarea VALUES ('431124', '道县', '431100');
INSERT INTO tbarea VALUES ('431125', '江永县', '431100');
INSERT INTO tbarea VALUES ('431126', '宁远县', '431100');
INSERT INTO tbarea VALUES ('431127', '蓝山县', '431100');
INSERT INTO tbarea VALUES ('431128', '新田县', '431100');
INSERT INTO tbarea VALUES ('431129', '江华瑶族自治县', '431100');
INSERT INTO tbarea VALUES ('431200', '怀化市', '430000');
INSERT INTO tbarea VALUES ('431201', '市辖区', '431200');
INSERT INTO tbarea VALUES ('431202', '鹤城区', '431200');
INSERT INTO tbarea VALUES ('431221', '中方县', '431200');
INSERT INTO tbarea VALUES ('431222', '沅陵县', '431200');
INSERT INTO tbarea VALUES ('431223', '辰溪县', '431200');
INSERT INTO tbarea VALUES ('431224', '溆浦县', '431200');
INSERT INTO tbarea VALUES ('431225', '会同县', '431200');
INSERT INTO tbarea VALUES ('431226', '麻阳苗族自治县', '431200');
INSERT INTO tbarea VALUES ('431227', '新晃侗族自治县', '431200');
INSERT INTO tbarea VALUES ('431228', '芷江侗族自治县', '431200');
INSERT INTO tbarea VALUES ('431229', '靖州苗族侗族自治县', '431200');
INSERT INTO tbarea VALUES ('431230', '通道侗族自治县', '431200');
INSERT INTO tbarea VALUES ('431281', '洪江市', '431200');
INSERT INTO tbarea VALUES ('431300', '娄底市', '430000');
INSERT INTO tbarea VALUES ('431301', '市辖区', '431300');
INSERT INTO tbarea VALUES ('431302', '娄星区', '431300');
INSERT INTO tbarea VALUES ('431321', '双峰县', '431300');
INSERT INTO tbarea VALUES ('431322', '新化县', '431300');
INSERT INTO tbarea VALUES ('431381', '冷水江市', '431300');
INSERT INTO tbarea VALUES ('431382', '涟源市', '431300');
INSERT INTO tbarea VALUES ('433100', '湘西土家族苗族自治州', '430000');
INSERT INTO tbarea VALUES ('433101', '吉首市', '433100');
INSERT INTO tbarea VALUES ('433122', '泸溪县', '433100');
INSERT INTO tbarea VALUES ('433123', '凤凰县', '433100');
INSERT INTO tbarea VALUES ('433124', '花垣县', '433100');
INSERT INTO tbarea VALUES ('433125', '保靖县', '433100');
INSERT INTO tbarea VALUES ('433126', '古丈县', '433100');
INSERT INTO tbarea VALUES ('433127', '永顺县', '433100');
INSERT INTO tbarea VALUES ('433130', '龙山县', '433100');
INSERT INTO tbarea VALUES ('440000', '广东省', '0');
INSERT INTO tbarea VALUES ('440100', '广州市', '440000');
INSERT INTO tbarea VALUES ('440101', '市辖区', '440100');
INSERT INTO tbarea VALUES ('440103', '荔湾区', '440100');
INSERT INTO tbarea VALUES ('440104', '越秀区', '440100');
INSERT INTO tbarea VALUES ('440105', '海珠区', '440100');
INSERT INTO tbarea VALUES ('440106', '天河区', '440100');
INSERT INTO tbarea VALUES ('440111', '白云区', '440100');
INSERT INTO tbarea VALUES ('440112', '黄埔区', '440100');
INSERT INTO tbarea VALUES ('440113', '番禺区', '440100');
INSERT INTO tbarea VALUES ('440114', '花都区', '440100');
INSERT INTO tbarea VALUES ('440115', '南沙区', '440100');
INSERT INTO tbarea VALUES ('440116', '萝岗区', '440100');
INSERT INTO tbarea VALUES ('440183', '增城市', '440100');
INSERT INTO tbarea VALUES ('440184', '从化市', '440100');
INSERT INTO tbarea VALUES ('440200', '韶关市', '440000');
INSERT INTO tbarea VALUES ('440201', '市辖区', '440200');
INSERT INTO tbarea VALUES ('440203', '武江区', '440200');
INSERT INTO tbarea VALUES ('440204', '浈江区', '440200');
INSERT INTO tbarea VALUES ('440205', '曲江区', '440200');
INSERT INTO tbarea VALUES ('440222', '始兴县', '440200');
INSERT INTO tbarea VALUES ('440224', '仁化县', '440200');
INSERT INTO tbarea VALUES ('440229', '翁源县', '440200');
INSERT INTO tbarea VALUES ('440232', '乳源瑶族自治县', '440200');
INSERT INTO tbarea VALUES ('440233', '新丰县', '440200');
INSERT INTO tbarea VALUES ('440281', '乐昌市', '440200');
INSERT INTO tbarea VALUES ('440282', '南雄市', '440200');
INSERT INTO tbarea VALUES ('440300', '深圳市', '440000');
INSERT INTO tbarea VALUES ('440301', '市辖区', '440300');
INSERT INTO tbarea VALUES ('440303', '罗湖区', '440300');
INSERT INTO tbarea VALUES ('440304', '福田区', '440300');
INSERT INTO tbarea VALUES ('440305', '南山区', '440300');
INSERT INTO tbarea VALUES ('440306', '宝安区', '440300');
INSERT INTO tbarea VALUES ('440307', '龙岗区', '440300');
INSERT INTO tbarea VALUES ('440308', '盐田区', '440300');
INSERT INTO tbarea VALUES ('440400', '珠海市', '440000');
INSERT INTO tbarea VALUES ('440401', '市辖区', '440400');
INSERT INTO tbarea VALUES ('440402', '香洲区', '440400');
INSERT INTO tbarea VALUES ('440403', '斗门区', '440400');
INSERT INTO tbarea VALUES ('440404', '金湾区', '440400');
INSERT INTO tbarea VALUES ('440500', '汕头市', '440000');
INSERT INTO tbarea VALUES ('440501', '市辖区', '440500');
INSERT INTO tbarea VALUES ('440507', '龙湖区', '440500');
INSERT INTO tbarea VALUES ('440511', '金平区', '440500');
INSERT INTO tbarea VALUES ('440512', '濠江区', '440500');
INSERT INTO tbarea VALUES ('440513', '潮阳区', '440500');
INSERT INTO tbarea VALUES ('440514', '潮南区', '440500');
INSERT INTO tbarea VALUES ('440515', '澄海区', '440500');
INSERT INTO tbarea VALUES ('440523', '南澳县', '440500');
INSERT INTO tbarea VALUES ('440600', '佛山市', '440000');
INSERT INTO tbarea VALUES ('440601', '市辖区', '440600');
INSERT INTO tbarea VALUES ('440604', '禅城区', '440600');
INSERT INTO tbarea VALUES ('440605', '南海区', '440600');
INSERT INTO tbarea VALUES ('440606', '顺德区', '440600');
INSERT INTO tbarea VALUES ('440607', '三水区', '440600');
INSERT INTO tbarea VALUES ('440608', '高明区', '440600');
INSERT INTO tbarea VALUES ('440700', '江门市', '440000');
INSERT INTO tbarea VALUES ('440701', '市辖区', '440700');
INSERT INTO tbarea VALUES ('440703', '蓬江区', '440700');
INSERT INTO tbarea VALUES ('440704', '江海区', '440700');
INSERT INTO tbarea VALUES ('440705', '新会区', '440700');
INSERT INTO tbarea VALUES ('440781', '台山市', '440700');
INSERT INTO tbarea VALUES ('440783', '开平市', '440700');
INSERT INTO tbarea VALUES ('440784', '鹤山市', '440700');
INSERT INTO tbarea VALUES ('440785', '恩平市', '440700');
INSERT INTO tbarea VALUES ('440800', '湛江市', '440000');
INSERT INTO tbarea VALUES ('440801', '市辖区', '440800');
INSERT INTO tbarea VALUES ('440802', '赤坎区', '440800');
INSERT INTO tbarea VALUES ('440803', '霞山区', '440800');
INSERT INTO tbarea VALUES ('440804', '坡头区', '440800');
INSERT INTO tbarea VALUES ('440811', '麻章区', '440800');
INSERT INTO tbarea VALUES ('440823', '遂溪县', '440800');
INSERT INTO tbarea VALUES ('440825', '徐闻县', '440800');
INSERT INTO tbarea VALUES ('440881', '廉江市', '440800');
INSERT INTO tbarea VALUES ('440882', '雷州市', '440800');
INSERT INTO tbarea VALUES ('440883', '吴川市', '440800');
INSERT INTO tbarea VALUES ('440900', '茂名市', '440000');
INSERT INTO tbarea VALUES ('440901', '市辖区', '440900');
INSERT INTO tbarea VALUES ('440902', '茂南区', '440900');
INSERT INTO tbarea VALUES ('440903', '茂港区', '440900');
INSERT INTO tbarea VALUES ('440923', '电白县', '440900');
INSERT INTO tbarea VALUES ('440981', '高州市', '440900');
INSERT INTO tbarea VALUES ('440982', '化州市', '440900');
INSERT INTO tbarea VALUES ('440983', '信宜市', '440900');
INSERT INTO tbarea VALUES ('441200', '肇庆市', '440000');
INSERT INTO tbarea VALUES ('441201', '市辖区', '441200');
INSERT INTO tbarea VALUES ('441202', '端州区', '441200');
INSERT INTO tbarea VALUES ('441203', '鼎湖区', '441200');
INSERT INTO tbarea VALUES ('441223', '广宁县', '441200');
INSERT INTO tbarea VALUES ('441224', '怀集县', '441200');
INSERT INTO tbarea VALUES ('441225', '封开县', '441200');
INSERT INTO tbarea VALUES ('441226', '德庆县', '441200');
INSERT INTO tbarea VALUES ('441283', '高要市', '441200');
INSERT INTO tbarea VALUES ('441284', '四会市', '441200');
INSERT INTO tbarea VALUES ('441300', '惠州市', '440000');
INSERT INTO tbarea VALUES ('441301', '市辖区', '441300');
INSERT INTO tbarea VALUES ('441302', '惠城区', '441300');
INSERT INTO tbarea VALUES ('441303', '惠阳区', '441300');
INSERT INTO tbarea VALUES ('441322', '博罗县', '441300');
INSERT INTO tbarea VALUES ('441323', '惠东县', '441300');
INSERT INTO tbarea VALUES ('441324', '龙门县', '441300');
INSERT INTO tbarea VALUES ('441400', '梅州市', '440000');
INSERT INTO tbarea VALUES ('441401', '市辖区', '441400');
INSERT INTO tbarea VALUES ('441402', '梅江区', '441400');
INSERT INTO tbarea VALUES ('441421', '梅县', '441400');
INSERT INTO tbarea VALUES ('441422', '大埔县', '441400');
INSERT INTO tbarea VALUES ('441423', '丰顺县', '441400');
INSERT INTO tbarea VALUES ('441424', '五华县', '441400');
INSERT INTO tbarea VALUES ('441426', '平远县', '441400');
INSERT INTO tbarea VALUES ('441427', '蕉岭县', '441400');
INSERT INTO tbarea VALUES ('441481', '兴宁市', '441400');
INSERT INTO tbarea VALUES ('441500', '汕尾市', '440000');
INSERT INTO tbarea VALUES ('441501', '市辖区', '441500');
INSERT INTO tbarea VALUES ('441502', '城区', '441500');
INSERT INTO tbarea VALUES ('441521', '海丰县', '441500');
INSERT INTO tbarea VALUES ('441523', '陆河县', '441500');
INSERT INTO tbarea VALUES ('441581', '陆丰市', '441500');
INSERT INTO tbarea VALUES ('441600', '河源市', '440000');
INSERT INTO tbarea VALUES ('441601', '市辖区', '441600');
INSERT INTO tbarea VALUES ('441602', '源城区', '441600');
INSERT INTO tbarea VALUES ('441621', '紫金县', '441600');
INSERT INTO tbarea VALUES ('441622', '龙川县', '441600');
INSERT INTO tbarea VALUES ('441623', '连平县', '441600');
INSERT INTO tbarea VALUES ('441624', '和平县', '441600');
INSERT INTO tbarea VALUES ('441625', '东源县', '441600');
INSERT INTO tbarea VALUES ('441700', '阳江市', '440000');
INSERT INTO tbarea VALUES ('441701', '市辖区', '441700');
INSERT INTO tbarea VALUES ('441702', '江城区', '441700');
INSERT INTO tbarea VALUES ('441721', '阳西县', '441700');
INSERT INTO tbarea VALUES ('441723', '阳东县', '441700');
INSERT INTO tbarea VALUES ('441781', '阳春市', '441700');
INSERT INTO tbarea VALUES ('441800', '清远市', '440000');
INSERT INTO tbarea VALUES ('441801', '市辖区', '441800');
INSERT INTO tbarea VALUES ('441802', '清城区', '441800');
INSERT INTO tbarea VALUES ('441821', '佛冈县', '441800');
INSERT INTO tbarea VALUES ('441823', '阳山县', '441800');
INSERT INTO tbarea VALUES ('441825', '连山壮族瑶族自治县', '441800');
INSERT INTO tbarea VALUES ('441826', '连南瑶族自治县', '441800');
INSERT INTO tbarea VALUES ('441827', '清新县', '441800');
INSERT INTO tbarea VALUES ('441881', '英德市', '441800');
INSERT INTO tbarea VALUES ('441882', '连州市', '441800');
INSERT INTO tbarea VALUES ('441900', '东莞市', '440000');
INSERT INTO tbarea VALUES ('442000', '中山市', '440000');
INSERT INTO tbarea VALUES ('445100', '潮州市', '440000');
INSERT INTO tbarea VALUES ('445101', '市辖区', '445100');
INSERT INTO tbarea VALUES ('445102', '湘桥区', '445100');
INSERT INTO tbarea VALUES ('445121', '潮安县', '445100');
INSERT INTO tbarea VALUES ('445122', '饶平县', '445100');
INSERT INTO tbarea VALUES ('445200', '揭阳市', '440000');
INSERT INTO tbarea VALUES ('445201', '市辖区', '445200');
INSERT INTO tbarea VALUES ('445202', '榕城区', '445200');
INSERT INTO tbarea VALUES ('445221', '揭东县', '445200');
INSERT INTO tbarea VALUES ('445222', '揭西县', '445200');
INSERT INTO tbarea VALUES ('445224', '惠来县', '445200');
INSERT INTO tbarea VALUES ('445281', '普宁市', '445200');
INSERT INTO tbarea VALUES ('445300', '云浮市', '440000');
INSERT INTO tbarea VALUES ('445301', '市辖区', '445300');
INSERT INTO tbarea VALUES ('445302', '云城区', '445300');
INSERT INTO tbarea VALUES ('445321', '新兴县', '445300');
INSERT INTO tbarea VALUES ('445322', '郁南县', '445300');
INSERT INTO tbarea VALUES ('445323', '云安县', '445300');
INSERT INTO tbarea VALUES ('445381', '罗定市', '445300');
INSERT INTO tbarea VALUES ('450000', '广西壮族自治区', '0');
INSERT INTO tbarea VALUES ('450100', '南宁市', '450000');
INSERT INTO tbarea VALUES ('450101', '市辖区', '450100');
INSERT INTO tbarea VALUES ('450102', '兴宁区', '450100');
INSERT INTO tbarea VALUES ('450103', '青秀区', '450100');
INSERT INTO tbarea VALUES ('450105', '江南区', '450100');
INSERT INTO tbarea VALUES ('450107', '西乡塘区', '450100');
INSERT INTO tbarea VALUES ('450108', '良庆区', '450100');
INSERT INTO tbarea VALUES ('450109', '邕宁区', '450100');
INSERT INTO tbarea VALUES ('450122', '武鸣县', '450100');
INSERT INTO tbarea VALUES ('450123', '隆安县', '450100');
INSERT INTO tbarea VALUES ('450124', '马山县', '450100');
INSERT INTO tbarea VALUES ('450125', '上林县', '450100');
INSERT INTO tbarea VALUES ('450126', '宾阳县', '450100');
INSERT INTO tbarea VALUES ('450127', '横县', '450100');
INSERT INTO tbarea VALUES ('450200', '柳州市', '450000');
INSERT INTO tbarea VALUES ('450201', '市辖区', '450200');
INSERT INTO tbarea VALUES ('450202', '城中区', '450200');
INSERT INTO tbarea VALUES ('450203', '鱼峰区', '450200');
INSERT INTO tbarea VALUES ('450204', '柳南区', '450200');
INSERT INTO tbarea VALUES ('450205', '柳北区', '450200');
INSERT INTO tbarea VALUES ('450221', '柳江县', '450200');
INSERT INTO tbarea VALUES ('450222', '柳城县', '450200');
INSERT INTO tbarea VALUES ('450223', '鹿寨县', '450200');
INSERT INTO tbarea VALUES ('450224', '融安县', '450200');
INSERT INTO tbarea VALUES ('450225', '融水苗族自治县', '450200');
INSERT INTO tbarea VALUES ('450226', '三江侗族自治县', '450200');
INSERT INTO tbarea VALUES ('450300', '桂林市', '450000');
INSERT INTO tbarea VALUES ('450301', '市辖区', '450300');
INSERT INTO tbarea VALUES ('450302', '秀峰区', '450300');
INSERT INTO tbarea VALUES ('450303', '叠彩区', '450300');
INSERT INTO tbarea VALUES ('450304', '象山区', '450300');
INSERT INTO tbarea VALUES ('450305', '七星区', '450300');
INSERT INTO tbarea VALUES ('450311', '雁山区', '450300');
INSERT INTO tbarea VALUES ('450321', '阳朔县', '450300');
INSERT INTO tbarea VALUES ('450322', '临桂县', '450300');
INSERT INTO tbarea VALUES ('450323', '灵川县', '450300');
INSERT INTO tbarea VALUES ('450324', '全州县', '450300');
INSERT INTO tbarea VALUES ('450325', '兴安县', '450300');
INSERT INTO tbarea VALUES ('450326', '永福县', '450300');
INSERT INTO tbarea VALUES ('450327', '灌阳县', '450300');
INSERT INTO tbarea VALUES ('450328', '龙胜各族自治县', '450300');
INSERT INTO tbarea VALUES ('450329', '资源县', '450300');
INSERT INTO tbarea VALUES ('450330', '平乐县', '450300');
INSERT INTO tbarea VALUES ('450331', '荔浦县', '450300');
INSERT INTO tbarea VALUES ('450332', '恭城瑶族自治县', '450300');
INSERT INTO tbarea VALUES ('450400', '梧州市', '450000');
INSERT INTO tbarea VALUES ('450401', '市辖区', '450400');
INSERT INTO tbarea VALUES ('450403', '万秀区', '450400');
INSERT INTO tbarea VALUES ('450404', '蝶山区', '450400');
INSERT INTO tbarea VALUES ('450405', '长洲区', '450400');
INSERT INTO tbarea VALUES ('450421', '苍梧县', '450400');
INSERT INTO tbarea VALUES ('450422', '藤县', '450400');
INSERT INTO tbarea VALUES ('450423', '蒙山县', '450400');
INSERT INTO tbarea VALUES ('450481', '岑溪市', '450400');
INSERT INTO tbarea VALUES ('450500', '北海市', '450000');
INSERT INTO tbarea VALUES ('450501', '市辖区', '450500');
INSERT INTO tbarea VALUES ('450502', '海城区', '450500');
INSERT INTO tbarea VALUES ('450503', '银海区', '450500');
INSERT INTO tbarea VALUES ('450512', '铁山港区', '450500');
INSERT INTO tbarea VALUES ('450521', '合浦县', '450500');
INSERT INTO tbarea VALUES ('450600', '防城港市', '450000');
INSERT INTO tbarea VALUES ('450601', '市辖区', '450600');
INSERT INTO tbarea VALUES ('450602', '港口区', '450600');
INSERT INTO tbarea VALUES ('450603', '防城区', '450600');
INSERT INTO tbarea VALUES ('450621', '上思县', '450600');
INSERT INTO tbarea VALUES ('450681', '东兴市', '450600');
INSERT INTO tbarea VALUES ('450700', '钦州市', '450000');
INSERT INTO tbarea VALUES ('450701', '市辖区', '450700');
INSERT INTO tbarea VALUES ('450702', '钦南区', '450700');
INSERT INTO tbarea VALUES ('450703', '钦北区', '450700');
INSERT INTO tbarea VALUES ('450721', '灵山县', '450700');
INSERT INTO tbarea VALUES ('450722', '浦北县', '450700');
INSERT INTO tbarea VALUES ('450800', '贵港市', '450000');
INSERT INTO tbarea VALUES ('450801', '市辖区', '450800');
INSERT INTO tbarea VALUES ('450802', '港北区', '450800');
INSERT INTO tbarea VALUES ('450803', '港南区', '450800');
INSERT INTO tbarea VALUES ('450804', '覃塘区', '450800');
INSERT INTO tbarea VALUES ('450821', '平南县', '450800');
INSERT INTO tbarea VALUES ('450881', '桂平市', '450800');
INSERT INTO tbarea VALUES ('450900', '玉林市', '450000');
INSERT INTO tbarea VALUES ('450901', '市辖区', '450900');
INSERT INTO tbarea VALUES ('450902', '玉州区', '450900');
INSERT INTO tbarea VALUES ('450921', '容县', '450900');
INSERT INTO tbarea VALUES ('450922', '陆川县', '450900');
INSERT INTO tbarea VALUES ('450923', '博白县', '450900');
INSERT INTO tbarea VALUES ('450924', '兴业县', '450900');
INSERT INTO tbarea VALUES ('450981', '北流市', '450900');
INSERT INTO tbarea VALUES ('451000', '百色市', '450000');
INSERT INTO tbarea VALUES ('451001', '市辖区', '451000');
INSERT INTO tbarea VALUES ('451002', '右江区', '451000');
INSERT INTO tbarea VALUES ('451021', '田阳县', '451000');
INSERT INTO tbarea VALUES ('451022', '田东县', '451000');
INSERT INTO tbarea VALUES ('451023', '平果县', '451000');
INSERT INTO tbarea VALUES ('451024', '德保县', '451000');
INSERT INTO tbarea VALUES ('451025', '靖西县', '451000');
INSERT INTO tbarea VALUES ('451026', '那坡县', '451000');
INSERT INTO tbarea VALUES ('451027', '凌云县', '451000');
INSERT INTO tbarea VALUES ('451028', '乐业县', '451000');
INSERT INTO tbarea VALUES ('451029', '田林县', '451000');
INSERT INTO tbarea VALUES ('451030', '西林县', '451000');
INSERT INTO tbarea VALUES ('451031', '隆林各族自治县', '451000');
INSERT INTO tbarea VALUES ('451100', '贺州市', '450000');
INSERT INTO tbarea VALUES ('451101', '市辖区', '451100');
INSERT INTO tbarea VALUES ('451102', '八步区', '451100');
INSERT INTO tbarea VALUES ('451121', '昭平县', '451100');
INSERT INTO tbarea VALUES ('451122', '钟山县', '451100');
INSERT INTO tbarea VALUES ('451123', '富川瑶族自治县', '451100');
INSERT INTO tbarea VALUES ('451200', '河池市', '450000');
INSERT INTO tbarea VALUES ('451201', '市辖区', '451200');
INSERT INTO tbarea VALUES ('451202', '金城江区', '451200');
INSERT INTO tbarea VALUES ('451221', '南丹县', '451200');
INSERT INTO tbarea VALUES ('451222', '天峨县', '451200');
INSERT INTO tbarea VALUES ('451223', '凤山县', '451200');
INSERT INTO tbarea VALUES ('451224', '东兰县', '451200');
INSERT INTO tbarea VALUES ('451225', '罗城仫佬族自治县', '451200');
INSERT INTO tbarea VALUES ('451226', '环江毛南族自治县', '451200');
INSERT INTO tbarea VALUES ('451227', '巴马瑶族自治县', '451200');
INSERT INTO tbarea VALUES ('451228', '都安瑶族自治县', '451200');
INSERT INTO tbarea VALUES ('451229', '大化瑶族自治县', '451200');
INSERT INTO tbarea VALUES ('451281', '宜州市', '451200');
INSERT INTO tbarea VALUES ('451300', '来宾市', '450000');
INSERT INTO tbarea VALUES ('451301', '市辖区', '451300');
INSERT INTO tbarea VALUES ('451302', '兴宾区', '451300');
INSERT INTO tbarea VALUES ('451321', '忻城县', '451300');
INSERT INTO tbarea VALUES ('451322', '象州县', '451300');
INSERT INTO tbarea VALUES ('451323', '武宣县', '451300');
INSERT INTO tbarea VALUES ('451324', '金秀瑶族自治县', '451300');
INSERT INTO tbarea VALUES ('451381', '合山市', '451300');
INSERT INTO tbarea VALUES ('451400', '崇左市', '450000');
INSERT INTO tbarea VALUES ('451401', '市辖区', '451400');
INSERT INTO tbarea VALUES ('451402', '江洲区', '451400');
INSERT INTO tbarea VALUES ('451421', '扶绥县', '451400');
INSERT INTO tbarea VALUES ('451422', '宁明县', '451400');
INSERT INTO tbarea VALUES ('451423', '龙州县', '451400');
INSERT INTO tbarea VALUES ('451424', '大新县', '451400');
INSERT INTO tbarea VALUES ('451425', '天等县', '451400');
INSERT INTO tbarea VALUES ('451481', '凭祥市', '451400');
INSERT INTO tbarea VALUES ('460000', '海南省', '0');
INSERT INTO tbarea VALUES ('460100', '海口市', '460000');
INSERT INTO tbarea VALUES ('460101', '市辖区', '460100');
INSERT INTO tbarea VALUES ('460105', '秀英区', '460100');
INSERT INTO tbarea VALUES ('460106', '龙华区', '460100');
INSERT INTO tbarea VALUES ('460107', '琼山区', '460100');
INSERT INTO tbarea VALUES ('460108', '美兰区', '460100');
INSERT INTO tbarea VALUES ('460200', '三亚市', '460000');
INSERT INTO tbarea VALUES ('460201', '市辖区', '460200');
INSERT INTO tbarea VALUES ('460300', '三沙市', '460000');
INSERT INTO tbarea VALUES ('460321', '西沙群岛', '460300');
INSERT INTO tbarea VALUES ('460322', '南沙群岛', '460300');
INSERT INTO tbarea VALUES ('460323', '中沙群岛的岛礁及其海域', '460300');
INSERT INTO tbarea VALUES ('469000', '省直辖县级行政区划', '460000');
INSERT INTO tbarea VALUES ('469001', '五指山市', '469000');
INSERT INTO tbarea VALUES ('469002', '琼海市', '469000');
INSERT INTO tbarea VALUES ('469003', '儋州市', '469000');
INSERT INTO tbarea VALUES ('469005', '文昌市', '469000');
INSERT INTO tbarea VALUES ('469006', '万宁市', '469000');
INSERT INTO tbarea VALUES ('469007', '东方市', '469000');
INSERT INTO tbarea VALUES ('469021', '定安县', '469000');
INSERT INTO tbarea VALUES ('469022', '屯昌县', '469000');
INSERT INTO tbarea VALUES ('469023', '澄迈县', '469000');
INSERT INTO tbarea VALUES ('469024', '临高县', '469000');
INSERT INTO tbarea VALUES ('469025', '白沙黎族自治县', '469000');
INSERT INTO tbarea VALUES ('469026', '昌江黎族自治县', '469000');
INSERT INTO tbarea VALUES ('469027', '乐东黎族自治县', '469000');
INSERT INTO tbarea VALUES ('469028', '陵水黎族自治县', '469000');
INSERT INTO tbarea VALUES ('469029', '保亭黎族苗族自治县', '469000');
INSERT INTO tbarea VALUES ('469030', '琼中黎族苗族自治县', '469000');
INSERT INTO tbarea VALUES ('500000', '重庆市', '0');
INSERT INTO tbarea VALUES ('500100', '市辖区', '500000');
INSERT INTO tbarea VALUES ('500101', '万州区', '500100');
INSERT INTO tbarea VALUES ('500102', '涪陵区', '500100');
INSERT INTO tbarea VALUES ('500103', '渝中区', '500100');
INSERT INTO tbarea VALUES ('500104', '大渡口区', '500100');
INSERT INTO tbarea VALUES ('500105', '江北区', '500100');
INSERT INTO tbarea VALUES ('500106', '沙坪坝区', '500100');
INSERT INTO tbarea VALUES ('500107', '九龙坡区', '500100');
INSERT INTO tbarea VALUES ('500108', '南岸区', '500100');
INSERT INTO tbarea VALUES ('500109', '北碚区', '500100');
INSERT INTO tbarea VALUES ('500110', '綦江区', '500100');
INSERT INTO tbarea VALUES ('500111', '大足区', '500100');
INSERT INTO tbarea VALUES ('500112', '渝北区', '500100');
INSERT INTO tbarea VALUES ('500113', '巴南区', '500100');
INSERT INTO tbarea VALUES ('500114', '黔江区', '500100');
INSERT INTO tbarea VALUES ('500115', '长寿区', '500100');
INSERT INTO tbarea VALUES ('500116', '江津区', '500100');
INSERT INTO tbarea VALUES ('500117', '合川区', '500100');
INSERT INTO tbarea VALUES ('500118', '永川区', '500100');
INSERT INTO tbarea VALUES ('500119', '南川区', '500100');
INSERT INTO tbarea VALUES ('500200', '县', '500000');
INSERT INTO tbarea VALUES ('500223', '潼南县', '500200');
INSERT INTO tbarea VALUES ('500224', '铜梁县', '500200');
INSERT INTO tbarea VALUES ('500226', '荣昌县', '500200');
INSERT INTO tbarea VALUES ('500227', '璧山县', '500200');
INSERT INTO tbarea VALUES ('500228', '梁平县', '500200');
INSERT INTO tbarea VALUES ('500229', '城口县', '500200');
INSERT INTO tbarea VALUES ('500230', '丰都县', '500200');
INSERT INTO tbarea VALUES ('500231', '垫江县', '500200');
INSERT INTO tbarea VALUES ('500232', '武隆县', '500200');
INSERT INTO tbarea VALUES ('500233', '忠县', '500200');
INSERT INTO tbarea VALUES ('500234', '开县', '500200');
INSERT INTO tbarea VALUES ('500235', '云阳县', '500200');
INSERT INTO tbarea VALUES ('500236', '奉节县', '500200');
INSERT INTO tbarea VALUES ('500237', '巫山县', '500200');
INSERT INTO tbarea VALUES ('500238', '巫溪县', '500200');
INSERT INTO tbarea VALUES ('500240', '石柱土家族自治县', '500200');
INSERT INTO tbarea VALUES ('500241', '秀山土家族苗族自治县', '500200');
INSERT INTO tbarea VALUES ('500242', '酉阳土家族苗族自治县', '500200');
INSERT INTO tbarea VALUES ('500243', '彭水苗族土家族自治县', '500200');
INSERT INTO tbarea VALUES ('510000', '四川省', '0');
INSERT INTO tbarea VALUES ('510100', '成都市', '510000');
INSERT INTO tbarea VALUES ('510101', '市辖区', '510100');
INSERT INTO tbarea VALUES ('510104', '锦江区', '510100');
INSERT INTO tbarea VALUES ('510105', '青羊区', '510100');
INSERT INTO tbarea VALUES ('510106', '金牛区', '510100');
INSERT INTO tbarea VALUES ('510107', '武侯区', '510100');
INSERT INTO tbarea VALUES ('510108', '成华区', '510100');
INSERT INTO tbarea VALUES ('510112', '龙泉驿区', '510100');
INSERT INTO tbarea VALUES ('510113', '青白江区', '510100');
INSERT INTO tbarea VALUES ('510114', '新都区', '510100');
INSERT INTO tbarea VALUES ('510115', '温江区', '510100');
INSERT INTO tbarea VALUES ('510121', '金堂县', '510100');
INSERT INTO tbarea VALUES ('510122', '双流县', '510100');
INSERT INTO tbarea VALUES ('510124', '郫县', '510100');
INSERT INTO tbarea VALUES ('510129', '大邑县', '510100');
INSERT INTO tbarea VALUES ('510131', '蒲江县', '510100');
INSERT INTO tbarea VALUES ('510132', '新津县', '510100');
INSERT INTO tbarea VALUES ('510181', '都江堰市', '510100');
INSERT INTO tbarea VALUES ('510182', '彭州市', '510100');
INSERT INTO tbarea VALUES ('510183', '邛崃市', '510100');
INSERT INTO tbarea VALUES ('510184', '崇州市', '510100');
INSERT INTO tbarea VALUES ('510300', '自贡市', '510000');
INSERT INTO tbarea VALUES ('510301', '市辖区', '510300');
INSERT INTO tbarea VALUES ('510302', '自流井区', '510300');
INSERT INTO tbarea VALUES ('510303', '贡井区', '510300');
INSERT INTO tbarea VALUES ('510304', '大安区', '510300');
INSERT INTO tbarea VALUES ('510311', '沿滩区', '510300');
INSERT INTO tbarea VALUES ('510321', '荣县', '510300');
INSERT INTO tbarea VALUES ('510322', '富顺县', '510300');
INSERT INTO tbarea VALUES ('510400', '攀枝花市', '510000');
INSERT INTO tbarea VALUES ('510401', '市辖区', '510400');
INSERT INTO tbarea VALUES ('510402', '东区', '510400');
INSERT INTO tbarea VALUES ('510403', '西区', '510400');
INSERT INTO tbarea VALUES ('510411', '仁和区', '510400');
INSERT INTO tbarea VALUES ('510421', '米易县', '510400');
INSERT INTO tbarea VALUES ('510422', '盐边县', '510400');
INSERT INTO tbarea VALUES ('510500', '泸州市', '510000');
INSERT INTO tbarea VALUES ('510501', '市辖区', '510500');
INSERT INTO tbarea VALUES ('510502', '江阳区', '510500');
INSERT INTO tbarea VALUES ('510503', '纳溪区', '510500');
INSERT INTO tbarea VALUES ('510504', '龙马潭区', '510500');
INSERT INTO tbarea VALUES ('510521', '泸县', '510500');
INSERT INTO tbarea VALUES ('510522', '合江县', '510500');
INSERT INTO tbarea VALUES ('510524', '叙永县', '510500');
INSERT INTO tbarea VALUES ('510525', '古蔺县', '510500');
INSERT INTO tbarea VALUES ('510600', '德阳市', '510000');
INSERT INTO tbarea VALUES ('510601', '市辖区', '510600');
INSERT INTO tbarea VALUES ('510603', '旌阳区', '510600');
INSERT INTO tbarea VALUES ('510623', '中江县', '510600');
INSERT INTO tbarea VALUES ('510626', '罗江县', '510600');
INSERT INTO tbarea VALUES ('510681', '广汉市', '510600');
INSERT INTO tbarea VALUES ('510682', '什邡市', '510600');
INSERT INTO tbarea VALUES ('510683', '绵竹市', '510600');
INSERT INTO tbarea VALUES ('510700', '绵阳市', '510000');
INSERT INTO tbarea VALUES ('510701', '市辖区', '510700');
INSERT INTO tbarea VALUES ('510703', '涪城区', '510700');
INSERT INTO tbarea VALUES ('510704', '游仙区', '510700');
INSERT INTO tbarea VALUES ('510722', '三台县', '510700');
INSERT INTO tbarea VALUES ('510723', '盐亭县', '510700');
INSERT INTO tbarea VALUES ('510724', '安县', '510700');
INSERT INTO tbarea VALUES ('510725', '梓潼县', '510700');
INSERT INTO tbarea VALUES ('510726', '北川羌族自治县', '510700');
INSERT INTO tbarea VALUES ('510727', '平武县', '510700');
INSERT INTO tbarea VALUES ('510781', '江油市', '510700');
INSERT INTO tbarea VALUES ('510800', '广元市', '510000');
INSERT INTO tbarea VALUES ('510801', '市辖区', '510800');
INSERT INTO tbarea VALUES ('510802', '利州区', '510800');
INSERT INTO tbarea VALUES ('510811', '元坝区', '510800');
INSERT INTO tbarea VALUES ('510812', '朝天区', '510800');
INSERT INTO tbarea VALUES ('510821', '旺苍县', '510800');
INSERT INTO tbarea VALUES ('510822', '青川县', '510800');
INSERT INTO tbarea VALUES ('510823', '剑阁县', '510800');
INSERT INTO tbarea VALUES ('510824', '苍溪县', '510800');
INSERT INTO tbarea VALUES ('510900', '遂宁市', '510000');
INSERT INTO tbarea VALUES ('510901', '市辖区', '510900');
INSERT INTO tbarea VALUES ('510903', '船山区', '510900');
INSERT INTO tbarea VALUES ('510904', '安居区', '510900');
INSERT INTO tbarea VALUES ('510921', '蓬溪县', '510900');
INSERT INTO tbarea VALUES ('510922', '射洪县', '510900');
INSERT INTO tbarea VALUES ('510923', '大英县', '510900');
INSERT INTO tbarea VALUES ('511000', '内江市', '510000');
INSERT INTO tbarea VALUES ('511001', '市辖区', '511000');
INSERT INTO tbarea VALUES ('511002', '市中区', '511000');
INSERT INTO tbarea VALUES ('511011', '东兴区', '511000');
INSERT INTO tbarea VALUES ('511024', '威远县', '511000');
INSERT INTO tbarea VALUES ('511025', '资中县', '511000');
INSERT INTO tbarea VALUES ('511028', '隆昌县', '511000');
INSERT INTO tbarea VALUES ('511100', '乐山市', '510000');
INSERT INTO tbarea VALUES ('511101', '市辖区', '511100');
INSERT INTO tbarea VALUES ('511102', '市中区', '511100');
INSERT INTO tbarea VALUES ('511111', '沙湾区', '511100');
INSERT INTO tbarea VALUES ('511112', '五通桥区', '511100');
INSERT INTO tbarea VALUES ('511113', '金口河区', '511100');
INSERT INTO tbarea VALUES ('511123', '犍为县', '511100');
INSERT INTO tbarea VALUES ('511124', '井研县', '511100');
INSERT INTO tbarea VALUES ('511126', '夹江县', '511100');
INSERT INTO tbarea VALUES ('511129', '沐川县', '511100');
INSERT INTO tbarea VALUES ('511132', '峨边彝族自治县', '511100');
INSERT INTO tbarea VALUES ('511133', '马边彝族自治县', '511100');
INSERT INTO tbarea VALUES ('511181', '峨眉山市', '511100');
INSERT INTO tbarea VALUES ('511300', '南充市', '510000');
INSERT INTO tbarea VALUES ('511301', '市辖区', '511300');
INSERT INTO tbarea VALUES ('511302', '顺庆区', '511300');
INSERT INTO tbarea VALUES ('511303', '高坪区', '511300');
INSERT INTO tbarea VALUES ('511304', '嘉陵区', '511300');
INSERT INTO tbarea VALUES ('511321', '南部县', '511300');
INSERT INTO tbarea VALUES ('511322', '营山县', '511300');
INSERT INTO tbarea VALUES ('511323', '蓬安县', '511300');
INSERT INTO tbarea VALUES ('511324', '仪陇县', '511300');
INSERT INTO tbarea VALUES ('511325', '西充县', '511300');
INSERT INTO tbarea VALUES ('511381', '阆中市', '511300');
INSERT INTO tbarea VALUES ('511400', '眉山市', '510000');
INSERT INTO tbarea VALUES ('511401', '市辖区', '511400');
INSERT INTO tbarea VALUES ('511402', '东坡区', '511400');
INSERT INTO tbarea VALUES ('511421', '仁寿县', '511400');
INSERT INTO tbarea VALUES ('511422', '彭山县', '511400');
INSERT INTO tbarea VALUES ('511423', '洪雅县', '511400');
INSERT INTO tbarea VALUES ('511424', '丹棱县', '511400');
INSERT INTO tbarea VALUES ('511425', '青神县', '511400');
INSERT INTO tbarea VALUES ('511500', '宜宾市', '510000');
INSERT INTO tbarea VALUES ('511501', '市辖区', '511500');
INSERT INTO tbarea VALUES ('511502', '翠屏区', '511500');
INSERT INTO tbarea VALUES ('511503', '南溪区', '511500');
INSERT INTO tbarea VALUES ('511521', '宜宾县', '511500');
INSERT INTO tbarea VALUES ('511523', '江安县', '511500');
INSERT INTO tbarea VALUES ('511524', '长宁县', '511500');
INSERT INTO tbarea VALUES ('511525', '高县', '511500');
INSERT INTO tbarea VALUES ('511526', '珙县', '511500');
INSERT INTO tbarea VALUES ('511527', '筠连县', '511500');
INSERT INTO tbarea VALUES ('511528', '兴文县', '511500');
INSERT INTO tbarea VALUES ('511529', '屏山县', '511500');
INSERT INTO tbarea VALUES ('511600', '广安市', '510000');
INSERT INTO tbarea VALUES ('511601', '市辖区', '511600');
INSERT INTO tbarea VALUES ('511602', '广安区', '511600');
INSERT INTO tbarea VALUES ('511621', '岳池县', '511600');
INSERT INTO tbarea VALUES ('511622', '武胜县', '511600');
INSERT INTO tbarea VALUES ('511623', '邻水县', '511600');
INSERT INTO tbarea VALUES ('511681', '华蓥市', '511600');
INSERT INTO tbarea VALUES ('511700', '达州市', '510000');
INSERT INTO tbarea VALUES ('511701', '市辖区', '511700');
INSERT INTO tbarea VALUES ('511702', '通川区', '511700');
INSERT INTO tbarea VALUES ('511721', '达县', '511700');
INSERT INTO tbarea VALUES ('511722', '宣汉县', '511700');
INSERT INTO tbarea VALUES ('511723', '开江县', '511700');
INSERT INTO tbarea VALUES ('511724', '大竹县', '511700');
INSERT INTO tbarea VALUES ('511725', '渠县', '511700');
INSERT INTO tbarea VALUES ('511781', '万源市', '511700');
INSERT INTO tbarea VALUES ('511800', '雅安市', '510000');
INSERT INTO tbarea VALUES ('511801', '市辖区', '511800');
INSERT INTO tbarea VALUES ('511802', '雨城区', '511800');
INSERT INTO tbarea VALUES ('511803', '名山区', '511800');
INSERT INTO tbarea VALUES ('511822', '荥经县', '511800');
INSERT INTO tbarea VALUES ('511823', '汉源县', '511800');
INSERT INTO tbarea VALUES ('511824', '石棉县', '511800');
INSERT INTO tbarea VALUES ('511825', '天全县', '511800');
INSERT INTO tbarea VALUES ('511826', '芦山县', '511800');
INSERT INTO tbarea VALUES ('511827', '宝兴县', '511800');
INSERT INTO tbarea VALUES ('511900', '巴中市', '510000');
INSERT INTO tbarea VALUES ('511901', '市辖区', '511900');
INSERT INTO tbarea VALUES ('511902', '巴州区', '511900');
INSERT INTO tbarea VALUES ('511921', '通江县', '511900');
INSERT INTO tbarea VALUES ('511922', '南江县', '511900');
INSERT INTO tbarea VALUES ('511923', '平昌县', '511900');
INSERT INTO tbarea VALUES ('512000', '资阳市', '510000');
INSERT INTO tbarea VALUES ('512001', '市辖区', '512000');
INSERT INTO tbarea VALUES ('512002', '雁江区', '512000');
INSERT INTO tbarea VALUES ('512021', '安岳县', '512000');
INSERT INTO tbarea VALUES ('512022', '乐至县', '512000');
INSERT INTO tbarea VALUES ('512081', '简阳市', '512000');
INSERT INTO tbarea VALUES ('513200', '阿坝藏族羌族自治州', '510000');
INSERT INTO tbarea VALUES ('513221', '汶川县', '513200');
INSERT INTO tbarea VALUES ('513222', '理县', '513200');
INSERT INTO tbarea VALUES ('513223', '茂县', '513200');
INSERT INTO tbarea VALUES ('513224', '松潘县', '513200');
INSERT INTO tbarea VALUES ('513225', '九寨沟县', '513200');
INSERT INTO tbarea VALUES ('513226', '金川县', '513200');
INSERT INTO tbarea VALUES ('513227', '小金县', '513200');
INSERT INTO tbarea VALUES ('513228', '黑水县', '513200');
INSERT INTO tbarea VALUES ('513229', '马尔康县', '513200');
INSERT INTO tbarea VALUES ('513230', '壤塘县', '513200');
INSERT INTO tbarea VALUES ('513231', '阿坝县', '513200');
INSERT INTO tbarea VALUES ('513232', '若尔盖县', '513200');
INSERT INTO tbarea VALUES ('513233', '红原县', '513200');
INSERT INTO tbarea VALUES ('513300', '甘孜藏族自治州', '510000');
INSERT INTO tbarea VALUES ('513321', '康定县', '513300');
INSERT INTO tbarea VALUES ('513322', '泸定县', '513300');
INSERT INTO tbarea VALUES ('513323', '丹巴县', '513300');
INSERT INTO tbarea VALUES ('513324', '九龙县', '513300');
INSERT INTO tbarea VALUES ('513325', '雅江县', '513300');
INSERT INTO tbarea VALUES ('513326', '道孚县', '513300');
INSERT INTO tbarea VALUES ('513327', '炉霍县', '513300');
INSERT INTO tbarea VALUES ('513328', '甘孜县', '513300');
INSERT INTO tbarea VALUES ('513329', '新龙县', '513300');
INSERT INTO tbarea VALUES ('513330', '德格县', '513300');
INSERT INTO tbarea VALUES ('513331', '白玉县', '513300');
INSERT INTO tbarea VALUES ('513332', '石渠县', '513300');
INSERT INTO tbarea VALUES ('513333', '色达县', '513300');
INSERT INTO tbarea VALUES ('513334', '理塘县', '513300');
INSERT INTO tbarea VALUES ('513335', '巴塘县', '513300');
INSERT INTO tbarea VALUES ('513336', '乡城县', '513300');
INSERT INTO tbarea VALUES ('513337', '稻城县', '513300');
INSERT INTO tbarea VALUES ('513338', '得荣县', '513300');
INSERT INTO tbarea VALUES ('513400', '凉山彝族自治州', '510000');
INSERT INTO tbarea VALUES ('513401', '西昌市', '513400');
INSERT INTO tbarea VALUES ('513422', '木里藏族自治县', '513400');
INSERT INTO tbarea VALUES ('513423', '盐源县', '513400');
INSERT INTO tbarea VALUES ('513424', '德昌县', '513400');
INSERT INTO tbarea VALUES ('513425', '会理县', '513400');
INSERT INTO tbarea VALUES ('513426', '会东县', '513400');
INSERT INTO tbarea VALUES ('513427', '宁南县', '513400');
INSERT INTO tbarea VALUES ('513428', '普格县', '513400');
INSERT INTO tbarea VALUES ('513429', '布拖县', '513400');
INSERT INTO tbarea VALUES ('513430', '金阳县', '513400');
INSERT INTO tbarea VALUES ('513431', '昭觉县', '513400');
INSERT INTO tbarea VALUES ('513432', '喜德县', '513400');
INSERT INTO tbarea VALUES ('513433', '冕宁县', '513400');
INSERT INTO tbarea VALUES ('513434', '越西县', '513400');
INSERT INTO tbarea VALUES ('513435', '甘洛县', '513400');
INSERT INTO tbarea VALUES ('513436', '美姑县', '513400');
INSERT INTO tbarea VALUES ('513437', '雷波县', '513400');
INSERT INTO tbarea VALUES ('520000', '贵州省', '0');
INSERT INTO tbarea VALUES ('520100', '贵阳市', '520000');
INSERT INTO tbarea VALUES ('520101', '市辖区', '520100');
INSERT INTO tbarea VALUES ('520102', '南明区', '520100');
INSERT INTO tbarea VALUES ('520103', '云岩区', '520100');
INSERT INTO tbarea VALUES ('520111', '花溪区', '520100');
INSERT INTO tbarea VALUES ('520112', '乌当区', '520100');
INSERT INTO tbarea VALUES ('520113', '白云区', '520100');
INSERT INTO tbarea VALUES ('520114', '小河区', '520100');
INSERT INTO tbarea VALUES ('520121', '开阳县', '520100');
INSERT INTO tbarea VALUES ('520122', '息烽县', '520100');
INSERT INTO tbarea VALUES ('520123', '修文县', '520100');
INSERT INTO tbarea VALUES ('520181', '清镇市', '520100');
INSERT INTO tbarea VALUES ('520200', '六盘水市', '520000');
INSERT INTO tbarea VALUES ('520201', '钟山区', '520200');
INSERT INTO tbarea VALUES ('520203', '六枝特区', '520200');
INSERT INTO tbarea VALUES ('520221', '水城县', '520200');
INSERT INTO tbarea VALUES ('520222', '盘县', '520200');
INSERT INTO tbarea VALUES ('520300', '遵义市', '520000');
INSERT INTO tbarea VALUES ('520301', '市辖区', '520300');
INSERT INTO tbarea VALUES ('520302', '红花岗区', '520300');
INSERT INTO tbarea VALUES ('520303', '汇川区', '520300');
INSERT INTO tbarea VALUES ('520321', '遵义县', '520300');
INSERT INTO tbarea VALUES ('520322', '桐梓县', '520300');
INSERT INTO tbarea VALUES ('520323', '绥阳县', '520300');
INSERT INTO tbarea VALUES ('520324', '正安县', '520300');
INSERT INTO tbarea VALUES ('520325', '道真仡佬族苗族自治县', '520300');
INSERT INTO tbarea VALUES ('520326', '务川仡佬族苗族自治县', '520300');
INSERT INTO tbarea VALUES ('520327', '凤冈县', '520300');
INSERT INTO tbarea VALUES ('520328', '湄潭县', '520300');
INSERT INTO tbarea VALUES ('520329', '余庆县', '520300');
INSERT INTO tbarea VALUES ('520330', '习水县', '520300');
INSERT INTO tbarea VALUES ('520381', '赤水市', '520300');
INSERT INTO tbarea VALUES ('520382', '仁怀市', '520300');
INSERT INTO tbarea VALUES ('520400', '安顺市', '520000');
INSERT INTO tbarea VALUES ('520401', '市辖区', '520400');
INSERT INTO tbarea VALUES ('520402', '西秀区', '520400');
INSERT INTO tbarea VALUES ('520421', '平坝县', '520400');
INSERT INTO tbarea VALUES ('520422', '普定县', '520400');
INSERT INTO tbarea VALUES ('520423', '镇宁布依族苗族自治县', '520400');
INSERT INTO tbarea VALUES ('520424', '关岭布依族苗族自治县', '520400');
INSERT INTO tbarea VALUES ('520425', '紫云苗族布依族自治县', '520400');
INSERT INTO tbarea VALUES ('520500', '毕节市', '520000');
INSERT INTO tbarea VALUES ('520502', '七星关区', '520500');
INSERT INTO tbarea VALUES ('520521', '大方县', '520500');
INSERT INTO tbarea VALUES ('520522', '黔西县', '520500');
INSERT INTO tbarea VALUES ('520523', '金沙县', '520500');
INSERT INTO tbarea VALUES ('520524', '织金县', '520500');
INSERT INTO tbarea VALUES ('520525', '纳雍县', '520500');
INSERT INTO tbarea VALUES ('520526', '威宁彝族回族苗族自治县', '520500');
INSERT INTO tbarea VALUES ('520527', '赫章县', '520500');
INSERT INTO tbarea VALUES ('520600', '铜仁市', '520000');
INSERT INTO tbarea VALUES ('520602', '碧江区', '520600');
INSERT INTO tbarea VALUES ('520603', '万山区', '520600');
INSERT INTO tbarea VALUES ('520621', '江口县', '520600');
INSERT INTO tbarea VALUES ('520622', '玉屏侗族自治县', '520600');
INSERT INTO tbarea VALUES ('520623', '石阡县', '520600');
INSERT INTO tbarea VALUES ('520624', '思南县', '520600');
INSERT INTO tbarea VALUES ('520625', '印江土家族苗族自治县', '520600');
INSERT INTO tbarea VALUES ('520626', '德江县', '520600');
INSERT INTO tbarea VALUES ('520627', '沿河土家族自治县', '520600');
INSERT INTO tbarea VALUES ('520628', '松桃苗族自治县', '520600');
INSERT INTO tbarea VALUES ('522300', '黔西南布依族苗族自治州', '520000');
INSERT INTO tbarea VALUES ('522301', '兴义市', '522300');
INSERT INTO tbarea VALUES ('522322', '兴仁县', '522300');
INSERT INTO tbarea VALUES ('522323', '普安县', '522300');
INSERT INTO tbarea VALUES ('522324', '晴隆县', '522300');
INSERT INTO tbarea VALUES ('522325', '贞丰县', '522300');
INSERT INTO tbarea VALUES ('522326', '望谟县', '522300');
INSERT INTO tbarea VALUES ('522327', '册亨县', '522300');
INSERT INTO tbarea VALUES ('522328', '安龙县', '522300');
INSERT INTO tbarea VALUES ('522600', '黔东南苗族侗族自治州', '520000');
INSERT INTO tbarea VALUES ('522601', '凯里市', '522600');
INSERT INTO tbarea VALUES ('522622', '黄平县', '522600');
INSERT INTO tbarea VALUES ('522623', '施秉县', '522600');
INSERT INTO tbarea VALUES ('522624', '三穗县', '522600');
INSERT INTO tbarea VALUES ('522625', '镇远县', '522600');
INSERT INTO tbarea VALUES ('522626', '岑巩县', '522600');
INSERT INTO tbarea VALUES ('522627', '天柱县', '522600');
INSERT INTO tbarea VALUES ('522628', '锦屏县', '522600');
INSERT INTO tbarea VALUES ('522629', '剑河县', '522600');
INSERT INTO tbarea VALUES ('522630', '台江县', '522600');
INSERT INTO tbarea VALUES ('522631', '黎平县', '522600');
INSERT INTO tbarea VALUES ('522632', '榕江县', '522600');
INSERT INTO tbarea VALUES ('522633', '从江县', '522600');
INSERT INTO tbarea VALUES ('522634', '雷山县', '522600');
INSERT INTO tbarea VALUES ('522635', '麻江县', '522600');
INSERT INTO tbarea VALUES ('522636', '丹寨县', '522600');
INSERT INTO tbarea VALUES ('522700', '黔南布依族苗族自治州', '520000');
INSERT INTO tbarea VALUES ('522701', '都匀市', '522700');
INSERT INTO tbarea VALUES ('522702', '福泉市', '522700');
INSERT INTO tbarea VALUES ('522722', '荔波县', '522700');
INSERT INTO tbarea VALUES ('522723', '贵定县', '522700');
INSERT INTO tbarea VALUES ('522725', '瓮安县', '522700');
INSERT INTO tbarea VALUES ('522726', '独山县', '522700');
INSERT INTO tbarea VALUES ('522727', '平塘县', '522700');
INSERT INTO tbarea VALUES ('522728', '罗甸县', '522700');
INSERT INTO tbarea VALUES ('522729', '长顺县', '522700');
INSERT INTO tbarea VALUES ('522730', '龙里县', '522700');
INSERT INTO tbarea VALUES ('522731', '惠水县', '522700');
INSERT INTO tbarea VALUES ('522732', '三都水族自治县', '522700');
INSERT INTO tbarea VALUES ('530000', '云南省', '0');
INSERT INTO tbarea VALUES ('530100', '昆明市', '530000');
INSERT INTO tbarea VALUES ('530101', '市辖区', '530100');
INSERT INTO tbarea VALUES ('530102', '五华区', '530100');
INSERT INTO tbarea VALUES ('530103', '盘龙区', '530100');
INSERT INTO tbarea VALUES ('530111', '官渡区', '530100');
INSERT INTO tbarea VALUES ('530112', '西山区', '530100');
INSERT INTO tbarea VALUES ('530113', '东川区', '530100');
INSERT INTO tbarea VALUES ('530114', '呈贡区', '530100');
INSERT INTO tbarea VALUES ('530122', '晋宁县', '530100');
INSERT INTO tbarea VALUES ('530124', '富民县', '530100');
INSERT INTO tbarea VALUES ('530125', '宜良县', '530100');
INSERT INTO tbarea VALUES ('530126', '石林彝族自治县', '530100');
INSERT INTO tbarea VALUES ('530127', '嵩明县', '530100');
INSERT INTO tbarea VALUES ('530128', '禄劝彝族苗族自治县', '530100');
INSERT INTO tbarea VALUES ('530129', '寻甸回族彝族自治县', '530100');
INSERT INTO tbarea VALUES ('530181', '安宁市', '530100');
INSERT INTO tbarea VALUES ('530300', '曲靖市', '530000');
INSERT INTO tbarea VALUES ('530301', '市辖区', '530300');
INSERT INTO tbarea VALUES ('530302', '麒麟区', '530300');
INSERT INTO tbarea VALUES ('530321', '马龙县', '530300');
INSERT INTO tbarea VALUES ('530322', '陆良县', '530300');
INSERT INTO tbarea VALUES ('530323', '师宗县', '530300');
INSERT INTO tbarea VALUES ('530324', '罗平县', '530300');
INSERT INTO tbarea VALUES ('530325', '富源县', '530300');
INSERT INTO tbarea VALUES ('530326', '会泽县', '530300');
INSERT INTO tbarea VALUES ('530328', '沾益县', '530300');
INSERT INTO tbarea VALUES ('530381', '宣威市', '530300');
INSERT INTO tbarea VALUES ('530400', '玉溪市', '530000');
INSERT INTO tbarea VALUES ('530402', '红塔区', '530400');
INSERT INTO tbarea VALUES ('530421', '江川县', '530400');
INSERT INTO tbarea VALUES ('530422', '澄江县', '530400');
INSERT INTO tbarea VALUES ('530423', '通海县', '530400');
INSERT INTO tbarea VALUES ('530424', '华宁县', '530400');
INSERT INTO tbarea VALUES ('530425', '易门县', '530400');
INSERT INTO tbarea VALUES ('530426', '峨山彝族自治县', '530400');
INSERT INTO tbarea VALUES ('530427', '新平彝族傣族自治县', '530400');
INSERT INTO tbarea VALUES ('530428', '元江哈尼族彝族傣族自治县', '530400');
INSERT INTO tbarea VALUES ('530500', '保山市', '530000');
INSERT INTO tbarea VALUES ('530501', '市辖区', '530500');
INSERT INTO tbarea VALUES ('530502', '隆阳区', '530500');
INSERT INTO tbarea VALUES ('530521', '施甸县', '530500');
INSERT INTO tbarea VALUES ('530522', '腾冲县', '530500');
INSERT INTO tbarea VALUES ('530523', '龙陵县', '530500');
INSERT INTO tbarea VALUES ('530524', '昌宁县', '530500');
INSERT INTO tbarea VALUES ('530600', '昭通市', '530000');
INSERT INTO tbarea VALUES ('530601', '市辖区', '530600');
INSERT INTO tbarea VALUES ('530602', '昭阳区', '530600');
INSERT INTO tbarea VALUES ('530621', '鲁甸县', '530600');
INSERT INTO tbarea VALUES ('530622', '巧家县', '530600');
INSERT INTO tbarea VALUES ('530623', '盐津县', '530600');
INSERT INTO tbarea VALUES ('530624', '大关县', '530600');
INSERT INTO tbarea VALUES ('530625', '永善县', '530600');
INSERT INTO tbarea VALUES ('530626', '绥江县', '530600');
INSERT INTO tbarea VALUES ('530627', '镇雄县', '530600');
INSERT INTO tbarea VALUES ('530628', '彝良县', '530600');
INSERT INTO tbarea VALUES ('530629', '威信县', '530600');
INSERT INTO tbarea VALUES ('530630', '水富县', '530600');
INSERT INTO tbarea VALUES ('530700', '丽江市', '530000');
INSERT INTO tbarea VALUES ('530701', '市辖区', '530700');
INSERT INTO tbarea VALUES ('530702', '古城区', '530700');
INSERT INTO tbarea VALUES ('530721', '玉龙纳西族自治县', '530700');
INSERT INTO tbarea VALUES ('530722', '永胜县', '530700');
INSERT INTO tbarea VALUES ('530723', '华坪县', '530700');
INSERT INTO tbarea VALUES ('530724', '宁蒗彝族自治县', '530700');
INSERT INTO tbarea VALUES ('530800', '普洱市', '530000');
INSERT INTO tbarea VALUES ('530801', '市辖区', '530800');
INSERT INTO tbarea VALUES ('530802', '思茅区', '530800');
INSERT INTO tbarea VALUES ('530821', '宁洱哈尼族彝族自治县', '530800');
INSERT INTO tbarea VALUES ('530822', '墨江哈尼族自治县', '530800');
INSERT INTO tbarea VALUES ('530823', '景东彝族自治县', '530800');
INSERT INTO tbarea VALUES ('530824', '景谷傣族彝族自治县', '530800');
INSERT INTO tbarea VALUES ('530825', '镇沅彝族哈尼族拉祜族自治县', '530800');
INSERT INTO tbarea VALUES ('530826', '江城哈尼族彝族自治县', '530800');
INSERT INTO tbarea VALUES ('530827', '孟连傣族拉祜族佤族自治县', '530800');
INSERT INTO tbarea VALUES ('530828', '澜沧拉祜族自治县', '530800');
INSERT INTO tbarea VALUES ('530829', '西盟佤族自治县', '530800');
INSERT INTO tbarea VALUES ('530900', '临沧市', '530000');
INSERT INTO tbarea VALUES ('530901', '市辖区', '530900');
INSERT INTO tbarea VALUES ('530902', '临翔区', '530900');
INSERT INTO tbarea VALUES ('530921', '凤庆县', '530900');
INSERT INTO tbarea VALUES ('530922', '云县', '530900');
INSERT INTO tbarea VALUES ('530923', '永德县', '530900');
INSERT INTO tbarea VALUES ('530924', '镇康县', '530900');
INSERT INTO tbarea VALUES ('530925', '双江拉祜族佤族布朗族傣族自治县', '530900');
INSERT INTO tbarea VALUES ('530926', '耿马傣族佤族自治县', '530900');
INSERT INTO tbarea VALUES ('530927', '沧源佤族自治县', '530900');
INSERT INTO tbarea VALUES ('532300', '楚雄彝族自治州', '530000');
INSERT INTO tbarea VALUES ('532301', '楚雄市', '532300');
INSERT INTO tbarea VALUES ('532322', '双柏县', '532300');
INSERT INTO tbarea VALUES ('532323', '牟定县', '532300');
INSERT INTO tbarea VALUES ('532324', '南华县', '532300');
INSERT INTO tbarea VALUES ('532325', '姚安县', '532300');
INSERT INTO tbarea VALUES ('532326', '大姚县', '532300');
INSERT INTO tbarea VALUES ('532327', '永仁县', '532300');
INSERT INTO tbarea VALUES ('532328', '元谋县', '532300');
INSERT INTO tbarea VALUES ('532329', '武定县', '532300');
INSERT INTO tbarea VALUES ('532331', '禄丰县', '532300');
INSERT INTO tbarea VALUES ('532500', '红河哈尼族彝族自治州', '530000');
INSERT INTO tbarea VALUES ('532501', '个旧市', '532500');
INSERT INTO tbarea VALUES ('532502', '开远市', '532500');
INSERT INTO tbarea VALUES ('532503', '蒙自市', '532500');
INSERT INTO tbarea VALUES ('532523', '屏边苗族自治县', '532500');
INSERT INTO tbarea VALUES ('532524', '建水县', '532500');
INSERT INTO tbarea VALUES ('532525', '石屏县', '532500');
INSERT INTO tbarea VALUES ('532526', '弥勒县', '532500');
INSERT INTO tbarea VALUES ('532527', '泸西县', '532500');
INSERT INTO tbarea VALUES ('532528', '元阳县', '532500');
INSERT INTO tbarea VALUES ('532529', '红河县', '532500');
INSERT INTO tbarea VALUES ('532530', '金平苗族瑶族傣族自治县', '532500');
INSERT INTO tbarea VALUES ('532531', '绿春县', '532500');
INSERT INTO tbarea VALUES ('532532', '河口瑶族自治县', '532500');
INSERT INTO tbarea VALUES ('532600', '文山壮族苗族自治州', '530000');
INSERT INTO tbarea VALUES ('532601', '文山市', '532600');
INSERT INTO tbarea VALUES ('532622', '砚山县', '532600');
INSERT INTO tbarea VALUES ('532623', '西畴县', '532600');
INSERT INTO tbarea VALUES ('532624', '麻栗坡县', '532600');
INSERT INTO tbarea VALUES ('532625', '马关县', '532600');
INSERT INTO tbarea VALUES ('532626', '丘北县', '532600');
INSERT INTO tbarea VALUES ('532627', '广南县', '532600');
INSERT INTO tbarea VALUES ('532628', '富宁县', '532600');
INSERT INTO tbarea VALUES ('532800', '西双版纳傣族自治州', '530000');
INSERT INTO tbarea VALUES ('532801', '景洪市', '532800');
INSERT INTO tbarea VALUES ('532822', '勐海县', '532800');
INSERT INTO tbarea VALUES ('532823', '勐腊县', '532800');
INSERT INTO tbarea VALUES ('532900', '大理白族自治州', '530000');
INSERT INTO tbarea VALUES ('532901', '大理市', '532900');
INSERT INTO tbarea VALUES ('532922', '漾濞彝族自治县', '532900');
INSERT INTO tbarea VALUES ('532923', '祥云县', '532900');
INSERT INTO tbarea VALUES ('532924', '宾川县', '532900');
INSERT INTO tbarea VALUES ('532925', '弥渡县', '532900');
INSERT INTO tbarea VALUES ('532926', '南涧彝族自治县', '532900');
INSERT INTO tbarea VALUES ('532927', '巍山彝族回族自治县', '532900');
INSERT INTO tbarea VALUES ('532928', '永平县', '532900');
INSERT INTO tbarea VALUES ('532929', '云龙县', '532900');
INSERT INTO tbarea VALUES ('532930', '洱源县', '532900');
INSERT INTO tbarea VALUES ('532931', '剑川县', '532900');
INSERT INTO tbarea VALUES ('532932', '鹤庆县', '532900');
INSERT INTO tbarea VALUES ('533100', '德宏傣族景颇族自治州', '530000');
INSERT INTO tbarea VALUES ('533102', '瑞丽市', '533100');
INSERT INTO tbarea VALUES ('533103', '芒市', '533100');
INSERT INTO tbarea VALUES ('533122', '梁河县', '533100');
INSERT INTO tbarea VALUES ('533123', '盈江县', '533100');
INSERT INTO tbarea VALUES ('533124', '陇川县', '533100');
INSERT INTO tbarea VALUES ('533300', '怒江傈僳族自治州', '530000');
INSERT INTO tbarea VALUES ('533321', '泸水县', '533300');
INSERT INTO tbarea VALUES ('533323', '福贡县', '533300');
INSERT INTO tbarea VALUES ('533324', '贡山独龙族怒族自治县', '533300');
INSERT INTO tbarea VALUES ('533325', '兰坪白族普米族自治县', '533300');
INSERT INTO tbarea VALUES ('533400', '迪庆藏族自治州', '530000');
INSERT INTO tbarea VALUES ('533421', '香格里拉县', '533400');
INSERT INTO tbarea VALUES ('533422', '德钦县', '533400');
INSERT INTO tbarea VALUES ('533423', '维西傈僳族自治县', '533400');
INSERT INTO tbarea VALUES ('540000', '西藏自治区', '0');
INSERT INTO tbarea VALUES ('540100', '拉萨市', '540000');
INSERT INTO tbarea VALUES ('540101', '市辖区', '540100');
INSERT INTO tbarea VALUES ('540102', '城关区', '540100');
INSERT INTO tbarea VALUES ('540121', '林周县', '540100');
INSERT INTO tbarea VALUES ('540122', '当雄县', '540100');
INSERT INTO tbarea VALUES ('540123', '尼木县', '540100');
INSERT INTO tbarea VALUES ('540124', '曲水县', '540100');
INSERT INTO tbarea VALUES ('540125', '堆龙德庆县', '540100');
INSERT INTO tbarea VALUES ('540126', '达孜县', '540100');
INSERT INTO tbarea VALUES ('540127', '墨竹工卡县', '540100');
INSERT INTO tbarea VALUES ('542100', '昌都地区', '540000');
INSERT INTO tbarea VALUES ('542121', '昌都县', '542100');
INSERT INTO tbarea VALUES ('542122', '江达县', '542100');
INSERT INTO tbarea VALUES ('542123', '贡觉县', '542100');
INSERT INTO tbarea VALUES ('542124', '类乌齐县', '542100');
INSERT INTO tbarea VALUES ('542125', '丁青县', '542100');
INSERT INTO tbarea VALUES ('542126', '察雅县', '542100');
INSERT INTO tbarea VALUES ('542127', '八宿县', '542100');
INSERT INTO tbarea VALUES ('542128', '左贡县', '542100');
INSERT INTO tbarea VALUES ('542129', '芒康县', '542100');
INSERT INTO tbarea VALUES ('542132', '洛隆县', '542100');
INSERT INTO tbarea VALUES ('542133', '边坝县', '542100');
INSERT INTO tbarea VALUES ('542200', '山南地区', '540000');
INSERT INTO tbarea VALUES ('542221', '乃东县', '542200');
INSERT INTO tbarea VALUES ('542222', '扎囊县', '542200');
INSERT INTO tbarea VALUES ('542223', '贡嘎县', '542200');
INSERT INTO tbarea VALUES ('542224', '桑日县', '542200');
INSERT INTO tbarea VALUES ('542225', '琼结县', '542200');
INSERT INTO tbarea VALUES ('542226', '曲松县', '542200');
INSERT INTO tbarea VALUES ('542227', '措美县', '542200');
INSERT INTO tbarea VALUES ('542228', '洛扎县', '542200');
INSERT INTO tbarea VALUES ('542229', '加查县', '542200');
INSERT INTO tbarea VALUES ('542231', '隆子县', '542200');
INSERT INTO tbarea VALUES ('542232', '错那县', '542200');
INSERT INTO tbarea VALUES ('542233', '浪卡子县', '542200');
INSERT INTO tbarea VALUES ('542300', '日喀则地区', '540000');
INSERT INTO tbarea VALUES ('542301', '日喀则市', '542300');
INSERT INTO tbarea VALUES ('542322', '南木林县', '542300');
INSERT INTO tbarea VALUES ('542323', '江孜县', '542300');
INSERT INTO tbarea VALUES ('542324', '定日县', '542300');
INSERT INTO tbarea VALUES ('542325', '萨迦县', '542300');
INSERT INTO tbarea VALUES ('542326', '拉孜县', '542300');
INSERT INTO tbarea VALUES ('542327', '昂仁县', '542300');
INSERT INTO tbarea VALUES ('542328', '谢通门县', '542300');
INSERT INTO tbarea VALUES ('542329', '白朗县', '542300');
INSERT INTO tbarea VALUES ('542330', '仁布县', '542300');
INSERT INTO tbarea VALUES ('542331', '康马县', '542300');
INSERT INTO tbarea VALUES ('542332', '定结县', '542300');
INSERT INTO tbarea VALUES ('542333', '仲巴县', '542300');
INSERT INTO tbarea VALUES ('542334', '亚东县', '542300');
INSERT INTO tbarea VALUES ('542335', '吉隆县', '542300');
INSERT INTO tbarea VALUES ('542336', '聂拉木县', '542300');
INSERT INTO tbarea VALUES ('542337', '萨嘎县', '542300');
INSERT INTO tbarea VALUES ('542338', '岗巴县', '542300');
INSERT INTO tbarea VALUES ('542400', '那曲地区', '540000');
INSERT INTO tbarea VALUES ('542421', '那曲县', '542400');
INSERT INTO tbarea VALUES ('542422', '嘉黎县', '542400');
INSERT INTO tbarea VALUES ('542423', '比如县', '542400');
INSERT INTO tbarea VALUES ('542424', '聂荣县', '542400');
INSERT INTO tbarea VALUES ('542425', '安多县', '542400');
INSERT INTO tbarea VALUES ('542426', '申扎县', '542400');
INSERT INTO tbarea VALUES ('542427', '索县', '542400');
INSERT INTO tbarea VALUES ('542428', '班戈县', '542400');
INSERT INTO tbarea VALUES ('542429', '巴青县', '542400');
INSERT INTO tbarea VALUES ('542430', '尼玛县', '542400');
INSERT INTO tbarea VALUES ('542500', '阿里地区', '540000');
INSERT INTO tbarea VALUES ('542521', '普兰县', '542500');
INSERT INTO tbarea VALUES ('542522', '札达县', '542500');
INSERT INTO tbarea VALUES ('542523', '噶尔县', '542500');
INSERT INTO tbarea VALUES ('542524', '日土县', '542500');
INSERT INTO tbarea VALUES ('542525', '革吉县', '542500');
INSERT INTO tbarea VALUES ('542526', '改则县', '542500');
INSERT INTO tbarea VALUES ('542527', '措勤县', '542500');
INSERT INTO tbarea VALUES ('542600', '林芝地区', '540000');
INSERT INTO tbarea VALUES ('542621', '林芝县', '542600');
INSERT INTO tbarea VALUES ('542622', '工布江达县', '542600');
INSERT INTO tbarea VALUES ('542623', '米林县', '542600');
INSERT INTO tbarea VALUES ('542624', '墨脱县', '542600');
INSERT INTO tbarea VALUES ('542625', '波密县', '542600');
INSERT INTO tbarea VALUES ('542626', '察隅县', '542600');
INSERT INTO tbarea VALUES ('542627', '朗县', '542600');
INSERT INTO tbarea VALUES ('610000', '陕西省', '0');
INSERT INTO tbarea VALUES ('610100', '西安市', '610000');
INSERT INTO tbarea VALUES ('610101', '市辖区', '610100');
INSERT INTO tbarea VALUES ('610102', '新城区', '610100');
INSERT INTO tbarea VALUES ('610103', '碑林区', '610100');
INSERT INTO tbarea VALUES ('610104', '莲湖区', '610100');
INSERT INTO tbarea VALUES ('610111', '灞桥区', '610100');
INSERT INTO tbarea VALUES ('610112', '未央区', '610100');
INSERT INTO tbarea VALUES ('610113', '雁塔区', '610100');
INSERT INTO tbarea VALUES ('610114', '阎良区', '610100');
INSERT INTO tbarea VALUES ('610115', '临潼区', '610100');
INSERT INTO tbarea VALUES ('610116', '长安区', '610100');
INSERT INTO tbarea VALUES ('610122', '蓝田县', '610100');
INSERT INTO tbarea VALUES ('610124', '周至县', '610100');
INSERT INTO tbarea VALUES ('610125', '户县', '610100');
INSERT INTO tbarea VALUES ('610126', '高陵县', '610100');
INSERT INTO tbarea VALUES ('610200', '铜川市', '610000');
INSERT INTO tbarea VALUES ('610201', '市辖区', '610200');
INSERT INTO tbarea VALUES ('610202', '王益区', '610200');
INSERT INTO tbarea VALUES ('610203', '印台区', '610200');
INSERT INTO tbarea VALUES ('610204', '耀州区', '610200');
INSERT INTO tbarea VALUES ('610222', '宜君县', '610200');
INSERT INTO tbarea VALUES ('610300', '宝鸡市', '610000');
INSERT INTO tbarea VALUES ('610301', '市辖区', '610300');
INSERT INTO tbarea VALUES ('610302', '渭滨区', '610300');
INSERT INTO tbarea VALUES ('610303', '金台区', '610300');
INSERT INTO tbarea VALUES ('610304', '陈仓区', '610300');
INSERT INTO tbarea VALUES ('610322', '凤翔县', '610300');
INSERT INTO tbarea VALUES ('610323', '岐山县', '610300');
INSERT INTO tbarea VALUES ('610324', '扶风县', '610300');
INSERT INTO tbarea VALUES ('610326', '眉县', '610300');
INSERT INTO tbarea VALUES ('610327', '陇县', '610300');
INSERT INTO tbarea VALUES ('610328', '千阳县', '610300');
INSERT INTO tbarea VALUES ('610329', '麟游县', '610300');
INSERT INTO tbarea VALUES ('610330', '凤县', '610300');
INSERT INTO tbarea VALUES ('610331', '太白县', '610300');
INSERT INTO tbarea VALUES ('610400', '咸阳市', '610000');
INSERT INTO tbarea VALUES ('610401', '市辖区', '610400');
INSERT INTO tbarea VALUES ('610402', '秦都区', '610400');
INSERT INTO tbarea VALUES ('610403', '杨陵区', '610400');
INSERT INTO tbarea VALUES ('610404', '渭城区', '610400');
INSERT INTO tbarea VALUES ('610422', '三原县', '610400');
INSERT INTO tbarea VALUES ('610423', '泾阳县', '610400');
INSERT INTO tbarea VALUES ('610424', '乾县', '610400');
INSERT INTO tbarea VALUES ('610425', '礼泉县', '610400');
INSERT INTO tbarea VALUES ('610426', '永寿县', '610400');
INSERT INTO tbarea VALUES ('610427', '彬县', '610400');
INSERT INTO tbarea VALUES ('610428', '长武县', '610400');
INSERT INTO tbarea VALUES ('610429', '旬邑县', '610400');
INSERT INTO tbarea VALUES ('610430', '淳化县', '610400');
INSERT INTO tbarea VALUES ('610431', '武功县', '610400');
INSERT INTO tbarea VALUES ('610481', '兴平市', '610400');
INSERT INTO tbarea VALUES ('610500', '渭南市', '610000');
INSERT INTO tbarea VALUES ('610501', '市辖区', '610500');
INSERT INTO tbarea VALUES ('610502', '临渭区', '610500');
INSERT INTO tbarea VALUES ('610521', '华县', '610500');
INSERT INTO tbarea VALUES ('610522', '潼关县', '610500');
INSERT INTO tbarea VALUES ('610523', '大荔县', '610500');
INSERT INTO tbarea VALUES ('610524', '合阳县', '610500');
INSERT INTO tbarea VALUES ('610525', '澄城县', '610500');
INSERT INTO tbarea VALUES ('610526', '蒲城县', '610500');
INSERT INTO tbarea VALUES ('610527', '白水县', '610500');
INSERT INTO tbarea VALUES ('610528', '富平县', '610500');
INSERT INTO tbarea VALUES ('610581', '韩城市', '610500');
INSERT INTO tbarea VALUES ('610582', '华阴市', '610500');
INSERT INTO tbarea VALUES ('610600', '延安市', '610000');
INSERT INTO tbarea VALUES ('610601', '市辖区', '610600');
INSERT INTO tbarea VALUES ('610602', '宝塔区', '610600');
INSERT INTO tbarea VALUES ('610621', '延长县', '610600');
INSERT INTO tbarea VALUES ('610622', '延川县', '610600');
INSERT INTO tbarea VALUES ('610623', '子长县', '610600');
INSERT INTO tbarea VALUES ('610624', '安塞县', '610600');
INSERT INTO tbarea VALUES ('610625', '志丹县', '610600');
INSERT INTO tbarea VALUES ('610626', '吴起县', '610600');
INSERT INTO tbarea VALUES ('610627', '甘泉县', '610600');
INSERT INTO tbarea VALUES ('610628', '富县', '610600');
INSERT INTO tbarea VALUES ('610629', '洛川县', '610600');
INSERT INTO tbarea VALUES ('610630', '宜川县', '610600');
INSERT INTO tbarea VALUES ('610631', '黄龙县', '610600');
INSERT INTO tbarea VALUES ('610632', '黄陵县', '610600');
INSERT INTO tbarea VALUES ('610700', '汉中市', '610000');
INSERT INTO tbarea VALUES ('610701', '市辖区', '610700');
INSERT INTO tbarea VALUES ('610702', '汉台区', '610700');
INSERT INTO tbarea VALUES ('610721', '南郑县', '610700');
INSERT INTO tbarea VALUES ('610722', '城固县', '610700');
INSERT INTO tbarea VALUES ('610723', '洋县', '610700');
INSERT INTO tbarea VALUES ('610724', '西乡县', '610700');
INSERT INTO tbarea VALUES ('610725', '勉县', '610700');
INSERT INTO tbarea VALUES ('610726', '宁强县', '610700');
INSERT INTO tbarea VALUES ('610727', '略阳县', '610700');
INSERT INTO tbarea VALUES ('610728', '镇巴县', '610700');
INSERT INTO tbarea VALUES ('610729', '留坝县', '610700');
INSERT INTO tbarea VALUES ('610730', '佛坪县', '610700');
INSERT INTO tbarea VALUES ('610800', '榆林市', '610000');
INSERT INTO tbarea VALUES ('610801', '市辖区', '610800');
INSERT INTO tbarea VALUES ('610802', '榆阳区', '610800');
INSERT INTO tbarea VALUES ('610821', '神木县', '610800');
INSERT INTO tbarea VALUES ('610822', '府谷县', '610800');
INSERT INTO tbarea VALUES ('610823', '横山县', '610800');
INSERT INTO tbarea VALUES ('610824', '靖边县', '610800');
INSERT INTO tbarea VALUES ('610825', '定边县', '610800');
INSERT INTO tbarea VALUES ('610826', '绥德县', '610800');
INSERT INTO tbarea VALUES ('610827', '米脂县', '610800');
INSERT INTO tbarea VALUES ('610828', '佳县', '610800');
INSERT INTO tbarea VALUES ('610829', '吴堡县', '610800');
INSERT INTO tbarea VALUES ('610830', '清涧县', '610800');
INSERT INTO tbarea VALUES ('610831', '子洲县', '610800');
INSERT INTO tbarea VALUES ('610900', '安康市', '610000');
INSERT INTO tbarea VALUES ('610901', '市辖区', '610900');
INSERT INTO tbarea VALUES ('610902', '汉滨区', '610900');
INSERT INTO tbarea VALUES ('610921', '汉阴县', '610900');
INSERT INTO tbarea VALUES ('610922', '石泉县', '610900');
INSERT INTO tbarea VALUES ('610923', '宁陕县', '610900');
INSERT INTO tbarea VALUES ('610924', '紫阳县', '610900');
INSERT INTO tbarea VALUES ('610925', '岚皋县', '610900');
INSERT INTO tbarea VALUES ('610926', '平利县', '610900');
INSERT INTO tbarea VALUES ('610927', '镇坪县', '610900');
INSERT INTO tbarea VALUES ('610928', '旬阳县', '610900');
INSERT INTO tbarea VALUES ('610929', '白河县', '610900');
INSERT INTO tbarea VALUES ('611000', '商洛市', '610000');
INSERT INTO tbarea VALUES ('611001', '市辖区', '611000');
INSERT INTO tbarea VALUES ('611002', '商州区', '611000');
INSERT INTO tbarea VALUES ('611021', '洛南县', '611000');
INSERT INTO tbarea VALUES ('611022', '丹凤县', '611000');
INSERT INTO tbarea VALUES ('611023', '商南县', '611000');
INSERT INTO tbarea VALUES ('611024', '山阳县', '611000');
INSERT INTO tbarea VALUES ('611025', '镇安县', '611000');
INSERT INTO tbarea VALUES ('611026', '柞水县', '611000');
INSERT INTO tbarea VALUES ('620000', '甘肃省', '0');
INSERT INTO tbarea VALUES ('620100', '兰州市', '620000');
INSERT INTO tbarea VALUES ('620101', '市辖区', '620100');
INSERT INTO tbarea VALUES ('620102', '城关区', '620100');
INSERT INTO tbarea VALUES ('620103', '七里河区', '620100');
INSERT INTO tbarea VALUES ('620104', '西固区', '620100');
INSERT INTO tbarea VALUES ('620105', '安宁区', '620100');
INSERT INTO tbarea VALUES ('620111', '红古区', '620100');
INSERT INTO tbarea VALUES ('620121', '永登县', '620100');
INSERT INTO tbarea VALUES ('620122', '皋兰县', '620100');
INSERT INTO tbarea VALUES ('620123', '榆中县', '620100');
INSERT INTO tbarea VALUES ('620200', '嘉峪关市', '620000');
INSERT INTO tbarea VALUES ('620201', '市辖区', '620200');
INSERT INTO tbarea VALUES ('620300', '金昌市', '620000');
INSERT INTO tbarea VALUES ('620301', '市辖区', '620300');
INSERT INTO tbarea VALUES ('620302', '金川区', '620300');
INSERT INTO tbarea VALUES ('620321', '永昌县', '620300');
INSERT INTO tbarea VALUES ('620400', '白银市', '620000');
INSERT INTO tbarea VALUES ('620401', '市辖区', '620400');
INSERT INTO tbarea VALUES ('620402', '白银区', '620400');
INSERT INTO tbarea VALUES ('620403', '平川区', '620400');
INSERT INTO tbarea VALUES ('620421', '靖远县', '620400');
INSERT INTO tbarea VALUES ('620422', '会宁县', '620400');
INSERT INTO tbarea VALUES ('620423', '景泰县', '620400');
INSERT INTO tbarea VALUES ('620500', '天水市', '620000');
INSERT INTO tbarea VALUES ('620501', '市辖区', '620500');
INSERT INTO tbarea VALUES ('620502', '秦州区', '620500');
INSERT INTO tbarea VALUES ('620503', '麦积区', '620500');
INSERT INTO tbarea VALUES ('620521', '清水县', '620500');
INSERT INTO tbarea VALUES ('620522', '秦安县', '620500');
INSERT INTO tbarea VALUES ('620523', '甘谷县', '620500');
INSERT INTO tbarea VALUES ('620524', '武山县', '620500');
INSERT INTO tbarea VALUES ('620525', '张家川回族自治县', '620500');
INSERT INTO tbarea VALUES ('620600', '武威市', '620000');
INSERT INTO tbarea VALUES ('620601', '市辖区', '620600');
INSERT INTO tbarea VALUES ('620602', '凉州区', '620600');
INSERT INTO tbarea VALUES ('620621', '民勤县', '620600');
INSERT INTO tbarea VALUES ('620622', '古浪县', '620600');
INSERT INTO tbarea VALUES ('620623', '天祝藏族自治县', '620600');
INSERT INTO tbarea VALUES ('620700', '张掖市', '620000');
INSERT INTO tbarea VALUES ('620701', '市辖区', '620700');
INSERT INTO tbarea VALUES ('620702', '甘州区', '620700');
INSERT INTO tbarea VALUES ('620721', '肃南裕固族自治县', '620700');
INSERT INTO tbarea VALUES ('620722', '民乐县', '620700');
INSERT INTO tbarea VALUES ('620723', '临泽县', '620700');
INSERT INTO tbarea VALUES ('620724', '高台县', '620700');
INSERT INTO tbarea VALUES ('620725', '山丹县', '620700');
INSERT INTO tbarea VALUES ('620800', '平凉市', '620000');
INSERT INTO tbarea VALUES ('620801', '市辖区', '620800');
INSERT INTO tbarea VALUES ('620802', '崆峒区', '620800');
INSERT INTO tbarea VALUES ('620821', '泾川县', '620800');
INSERT INTO tbarea VALUES ('620822', '灵台县', '620800');
INSERT INTO tbarea VALUES ('620823', '崇信县', '620800');
INSERT INTO tbarea VALUES ('620824', '华亭县', '620800');
INSERT INTO tbarea VALUES ('620825', '庄浪县', '620800');
INSERT INTO tbarea VALUES ('620826', '静宁县', '620800');
INSERT INTO tbarea VALUES ('620900', '酒泉市', '620000');
INSERT INTO tbarea VALUES ('620901', '市辖区', '620900');
INSERT INTO tbarea VALUES ('620902', '肃州区', '620900');
INSERT INTO tbarea VALUES ('620921', '金塔县', '620900');
INSERT INTO tbarea VALUES ('620922', '瓜州县', '620900');
INSERT INTO tbarea VALUES ('620923', '肃北蒙古族自治县', '620900');
INSERT INTO tbarea VALUES ('620924', '阿克塞哈萨克族自治县', '620900');
INSERT INTO tbarea VALUES ('620981', '玉门市', '620900');
INSERT INTO tbarea VALUES ('620982', '敦煌市', '620900');
INSERT INTO tbarea VALUES ('621000', '庆阳市', '620000');
INSERT INTO tbarea VALUES ('621001', '市辖区', '621000');
INSERT INTO tbarea VALUES ('621002', '西峰区', '621000');
INSERT INTO tbarea VALUES ('621021', '庆城县', '621000');
INSERT INTO tbarea VALUES ('621022', '环县', '621000');
INSERT INTO tbarea VALUES ('621023', '华池县', '621000');
INSERT INTO tbarea VALUES ('621024', '合水县', '621000');
INSERT INTO tbarea VALUES ('621025', '正宁县', '621000');
INSERT INTO tbarea VALUES ('621026', '宁县', '621000');
INSERT INTO tbarea VALUES ('621027', '镇原县', '621000');
INSERT INTO tbarea VALUES ('621100', '定西市', '620000');
INSERT INTO tbarea VALUES ('621101', '市辖区', '621100');
INSERT INTO tbarea VALUES ('621102', '安定区', '621100');
INSERT INTO tbarea VALUES ('621121', '通渭县', '621100');
INSERT INTO tbarea VALUES ('621122', '陇西县', '621100');
INSERT INTO tbarea VALUES ('621123', '渭源县', '621100');
INSERT INTO tbarea VALUES ('621124', '临洮县', '621100');
INSERT INTO tbarea VALUES ('621125', '漳县', '621100');
INSERT INTO tbarea VALUES ('621126', '岷县', '621100');
INSERT INTO tbarea VALUES ('621200', '陇南市', '620000');
INSERT INTO tbarea VALUES ('621201', '市辖区', '621200');
INSERT INTO tbarea VALUES ('621202', '武都区', '621200');
INSERT INTO tbarea VALUES ('621221', '成县', '621200');
INSERT INTO tbarea VALUES ('621222', '文县', '621200');
INSERT INTO tbarea VALUES ('621223', '宕昌县', '621200');
INSERT INTO tbarea VALUES ('621224', '康县', '621200');
INSERT INTO tbarea VALUES ('621225', '西和县', '621200');
INSERT INTO tbarea VALUES ('621226', '礼县', '621200');
INSERT INTO tbarea VALUES ('621227', '徽县', '621200');
INSERT INTO tbarea VALUES ('621228', '两当县', '621200');
INSERT INTO tbarea VALUES ('622900', '临夏回族自治州', '620000');
INSERT INTO tbarea VALUES ('622901', '临夏市', '622900');
INSERT INTO tbarea VALUES ('622921', '临夏县', '622900');
INSERT INTO tbarea VALUES ('622922', '康乐县', '622900');
INSERT INTO tbarea VALUES ('622923', '永靖县', '622900');
INSERT INTO tbarea VALUES ('622924', '广河县', '622900');
INSERT INTO tbarea VALUES ('622925', '和政县', '622900');
INSERT INTO tbarea VALUES ('622926', '东乡族自治县', '622900');
INSERT INTO tbarea VALUES ('622927', '积石山保安族东乡族撒拉族自治县', '622900');
INSERT INTO tbarea VALUES ('623000', '甘南藏族自治州', '620000');
INSERT INTO tbarea VALUES ('623001', '合作市', '623000');
INSERT INTO tbarea VALUES ('623021', '临潭县', '623000');
INSERT INTO tbarea VALUES ('623022', '卓尼县', '623000');
INSERT INTO tbarea VALUES ('623023', '舟曲县', '623000');
INSERT INTO tbarea VALUES ('623024', '迭部县', '623000');
INSERT INTO tbarea VALUES ('623025', '玛曲县', '623000');
INSERT INTO tbarea VALUES ('623026', '碌曲县', '623000');
INSERT INTO tbarea VALUES ('623027', '夏河县', '623000');
INSERT INTO tbarea VALUES ('630000', '青海省', '0');
INSERT INTO tbarea VALUES ('630100', '西宁市', '630000');
INSERT INTO tbarea VALUES ('630101', '市辖区', '630100');
INSERT INTO tbarea VALUES ('630102', '城东区', '630100');
INSERT INTO tbarea VALUES ('630103', '城中区', '630100');
INSERT INTO tbarea VALUES ('630104', '城西区', '630100');
INSERT INTO tbarea VALUES ('630105', '城北区', '630100');
INSERT INTO tbarea VALUES ('630121', '大通回族土族自治县', '630100');
INSERT INTO tbarea VALUES ('630122', '湟中县', '630100');
INSERT INTO tbarea VALUES ('630123', '湟源县', '630100');
INSERT INTO tbarea VALUES ('632100', '海东地区', '630000');
INSERT INTO tbarea VALUES ('632121', '平安县', '632100');
INSERT INTO tbarea VALUES ('632122', '民和回族土族自治县', '632100');
INSERT INTO tbarea VALUES ('632123', '乐都县', '632100');
INSERT INTO tbarea VALUES ('632126', '互助土族自治县', '632100');
INSERT INTO tbarea VALUES ('632127', '化隆回族自治县', '632100');
INSERT INTO tbarea VALUES ('632128', '循化撒拉族自治县', '632100');
INSERT INTO tbarea VALUES ('632200', '海北藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632221', '门源回族自治县', '632200');
INSERT INTO tbarea VALUES ('632222', '祁连县', '632200');
INSERT INTO tbarea VALUES ('632223', '海晏县', '632200');
INSERT INTO tbarea VALUES ('632224', '刚察县', '632200');
INSERT INTO tbarea VALUES ('632300', '黄南藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632321', '同仁县', '632300');
INSERT INTO tbarea VALUES ('632322', '尖扎县', '632300');
INSERT INTO tbarea VALUES ('632323', '泽库县', '632300');
INSERT INTO tbarea VALUES ('632324', '河南蒙古族自治县', '632300');
INSERT INTO tbarea VALUES ('632500', '海南藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632521', '共和县', '632500');
INSERT INTO tbarea VALUES ('632522', '同德县', '632500');
INSERT INTO tbarea VALUES ('632523', '贵德县', '632500');
INSERT INTO tbarea VALUES ('632524', '兴海县', '632500');
INSERT INTO tbarea VALUES ('632525', '贵南县', '632500');
INSERT INTO tbarea VALUES ('632600', '果洛藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632621', '玛沁县', '632600');
INSERT INTO tbarea VALUES ('632622', '班玛县', '632600');
INSERT INTO tbarea VALUES ('632623', '甘德县', '632600');
INSERT INTO tbarea VALUES ('632624', '达日县', '632600');
INSERT INTO tbarea VALUES ('632625', '久治县', '632600');
INSERT INTO tbarea VALUES ('632626', '玛多县', '632600');
INSERT INTO tbarea VALUES ('632700', '玉树藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632721', '玉树县', '632700');
INSERT INTO tbarea VALUES ('632722', '杂多县', '632700');
INSERT INTO tbarea VALUES ('632723', '称多县', '632700');
INSERT INTO tbarea VALUES ('632724', '治多县', '632700');
INSERT INTO tbarea VALUES ('632725', '囊谦县', '632700');
INSERT INTO tbarea VALUES ('632726', '曲麻莱县', '632700');
INSERT INTO tbarea VALUES ('632800', '海西蒙古族藏族自治州', '630000');
INSERT INTO tbarea VALUES ('632801', '格尔木市', '632800');
INSERT INTO tbarea VALUES ('632802', '德令哈市', '632800');
INSERT INTO tbarea VALUES ('632821', '乌兰县', '632800');
INSERT INTO tbarea VALUES ('632822', '都兰县', '632800');
INSERT INTO tbarea VALUES ('632823', '天峻县', '632800');
INSERT INTO tbarea VALUES ('640000', '宁夏回族自治区', '0');
INSERT INTO tbarea VALUES ('640100', '银川市', '640000');
INSERT INTO tbarea VALUES ('640101', '市辖区', '640100');
INSERT INTO tbarea VALUES ('640104', '兴庆区', '640100');
INSERT INTO tbarea VALUES ('640105', '西夏区', '640100');
INSERT INTO tbarea VALUES ('640106', '金凤区', '640100');
INSERT INTO tbarea VALUES ('640121', '永宁县', '640100');
INSERT INTO tbarea VALUES ('640122', '贺兰县', '640100');
INSERT INTO tbarea VALUES ('640181', '灵武市', '640100');
INSERT INTO tbarea VALUES ('640200', '石嘴山市', '640000');
INSERT INTO tbarea VALUES ('640201', '市辖区', '640200');
INSERT INTO tbarea VALUES ('640202', '大武口区', '640200');
INSERT INTO tbarea VALUES ('640205', '惠农区', '640200');
INSERT INTO tbarea VALUES ('640221', '平罗县', '640200');
INSERT INTO tbarea VALUES ('640300', '吴忠市', '640000');
INSERT INTO tbarea VALUES ('640301', '市辖区', '640300');
INSERT INTO tbarea VALUES ('640302', '利通区', '640300');
INSERT INTO tbarea VALUES ('640303', '红寺堡区', '640300');
INSERT INTO tbarea VALUES ('640323', '盐池县', '640300');
INSERT INTO tbarea VALUES ('640324', '同心县', '640300');
INSERT INTO tbarea VALUES ('640381', '青铜峡市', '640300');
INSERT INTO tbarea VALUES ('640400', '固原市', '640000');
INSERT INTO tbarea VALUES ('640401', '市辖区', '640400');
INSERT INTO tbarea VALUES ('640402', '原州区', '640400');
INSERT INTO tbarea VALUES ('640422', '西吉县', '640400');
INSERT INTO tbarea VALUES ('640423', '隆德县', '640400');
INSERT INTO tbarea VALUES ('640424', '泾源县', '640400');
INSERT INTO tbarea VALUES ('640425', '彭阳县', '640400');
INSERT INTO tbarea VALUES ('640500', '中卫市', '640000');
INSERT INTO tbarea VALUES ('640501', '市辖区', '640500');
INSERT INTO tbarea VALUES ('640502', '沙坡头区', '640500');
INSERT INTO tbarea VALUES ('640521', '中宁县', '640500');
INSERT INTO tbarea VALUES ('640522', '海原县', '640500');
INSERT INTO tbarea VALUES ('650000', '新疆维吾尔自治区', '0');
INSERT INTO tbarea VALUES ('650100', '乌鲁木齐市', '650000');
INSERT INTO tbarea VALUES ('650101', '市辖区', '650100');
INSERT INTO tbarea VALUES ('650102', '天山区', '650100');
INSERT INTO tbarea VALUES ('650103', '沙依巴克区', '650100');
INSERT INTO tbarea VALUES ('650104', '新市区', '650100');
INSERT INTO tbarea VALUES ('650105', '水磨沟区', '650100');
INSERT INTO tbarea VALUES ('650106', '头屯河区', '650100');
INSERT INTO tbarea VALUES ('650107', '达坂城区', '650100');
INSERT INTO tbarea VALUES ('650109', '米东区', '650100');
INSERT INTO tbarea VALUES ('650121', '乌鲁木齐县', '650100');
INSERT INTO tbarea VALUES ('650200', '克拉玛依市', '650000');
INSERT INTO tbarea VALUES ('650201', '市辖区', '650200');
INSERT INTO tbarea VALUES ('650202', '独山子区', '650200');
INSERT INTO tbarea VALUES ('650203', '克拉玛依区', '650200');
INSERT INTO tbarea VALUES ('650204', '白碱滩区', '650200');
INSERT INTO tbarea VALUES ('650205', '乌尔禾区', '650200');
INSERT INTO tbarea VALUES ('652100', '吐鲁番地区', '650000');
INSERT INTO tbarea VALUES ('652101', '吐鲁番市', '652100');
INSERT INTO tbarea VALUES ('652122', '鄯善县', '652100');
INSERT INTO tbarea VALUES ('652123', '托克逊县', '652100');
INSERT INTO tbarea VALUES ('652200', '哈密地区', '650000');
INSERT INTO tbarea VALUES ('652201', '哈密市', '652200');
INSERT INTO tbarea VALUES ('652222', '巴里坤哈萨克自治县', '652200');
INSERT INTO tbarea VALUES ('652223', '伊吾县', '652200');
INSERT INTO tbarea VALUES ('652300', '昌吉回族自治州', '650000');
INSERT INTO tbarea VALUES ('652301', '昌吉市', '652300');
INSERT INTO tbarea VALUES ('652302', '阜康市', '652300');
INSERT INTO tbarea VALUES ('652323', '呼图壁县', '652300');
INSERT INTO tbarea VALUES ('652324', '玛纳斯县', '652300');
INSERT INTO tbarea VALUES ('652325', '奇台县', '652300');
INSERT INTO tbarea VALUES ('652327', '吉木萨尔县', '652300');
INSERT INTO tbarea VALUES ('652328', '木垒哈萨克自治县', '652300');
INSERT INTO tbarea VALUES ('652700', '博尔塔拉蒙古自治州', '650000');
INSERT INTO tbarea VALUES ('652701', '博乐市', '652700');
INSERT INTO tbarea VALUES ('652722', '精河县', '652700');
INSERT INTO tbarea VALUES ('652723', '温泉县', '652700');
INSERT INTO tbarea VALUES ('652800', '巴音郭楞蒙古自治州', '650000');
INSERT INTO tbarea VALUES ('652801', '库尔勒市', '652800');
INSERT INTO tbarea VALUES ('652822', '轮台县', '652800');
INSERT INTO tbarea VALUES ('652823', '尉犁县', '652800');
INSERT INTO tbarea VALUES ('652824', '若羌县', '652800');
INSERT INTO tbarea VALUES ('652825', '且末县', '652800');
INSERT INTO tbarea VALUES ('652826', '焉耆回族自治县', '652800');
INSERT INTO tbarea VALUES ('652827', '和静县', '652800');
INSERT INTO tbarea VALUES ('652828', '和硕县', '652800');
INSERT INTO tbarea VALUES ('652829', '博湖县', '652800');
INSERT INTO tbarea VALUES ('652900', '阿克苏地区', '650000');
INSERT INTO tbarea VALUES ('652901', '阿克苏市', '652900');
INSERT INTO tbarea VALUES ('652922', '温宿县', '652900');
INSERT INTO tbarea VALUES ('652923', '库车县', '652900');
INSERT INTO tbarea VALUES ('652924', '沙雅县', '652900');
INSERT INTO tbarea VALUES ('652925', '新和县', '652900');
INSERT INTO tbarea VALUES ('652926', '拜城县', '652900');
INSERT INTO tbarea VALUES ('652927', '乌什县', '652900');
INSERT INTO tbarea VALUES ('652928', '阿瓦提县', '652900');
INSERT INTO tbarea VALUES ('652929', '柯坪县', '652900');
INSERT INTO tbarea VALUES ('653000', '克孜勒苏柯尔克孜自治州', '650000');
INSERT INTO tbarea VALUES ('653001', '阿图什市', '653000');
INSERT INTO tbarea VALUES ('653022', '阿克陶县', '653000');
INSERT INTO tbarea VALUES ('653023', '阿合奇县', '653000');
INSERT INTO tbarea VALUES ('653024', '乌恰县', '653000');
INSERT INTO tbarea VALUES ('653100', '喀什地区', '650000');
INSERT INTO tbarea VALUES ('653101', '喀什市', '653100');
INSERT INTO tbarea VALUES ('653121', '疏附县', '653100');
INSERT INTO tbarea VALUES ('653122', '疏勒县', '653100');
INSERT INTO tbarea VALUES ('653123', '英吉沙县', '653100');
INSERT INTO tbarea VALUES ('653124', '泽普县', '653100');
INSERT INTO tbarea VALUES ('653125', '莎车县', '653100');
INSERT INTO tbarea VALUES ('653126', '叶城县', '653100');
INSERT INTO tbarea VALUES ('653127', '麦盖提县', '653100');
INSERT INTO tbarea VALUES ('653128', '岳普湖县', '653100');
INSERT INTO tbarea VALUES ('653129', '伽师县', '653100');
INSERT INTO tbarea VALUES ('653130', '巴楚县', '653100');
INSERT INTO tbarea VALUES ('653131', '塔什库尔干塔吉克自治县', '653100');
INSERT INTO tbarea VALUES ('653200', '和田地区', '650000');
INSERT INTO tbarea VALUES ('653201', '和田市', '653200');
INSERT INTO tbarea VALUES ('653221', '和田县', '653200');
INSERT INTO tbarea VALUES ('653222', '墨玉县', '653200');
INSERT INTO tbarea VALUES ('653223', '皮山县', '653200');
INSERT INTO tbarea VALUES ('653224', '洛浦县', '653200');
INSERT INTO tbarea VALUES ('653225', '策勒县', '653200');
INSERT INTO tbarea VALUES ('653226', '于田县', '653200');
INSERT INTO tbarea VALUES ('653227', '民丰县', '653200');
INSERT INTO tbarea VALUES ('654000', '伊犁哈萨克自治州', '650000');
INSERT INTO tbarea VALUES ('654002', '伊宁市', '654000');
INSERT INTO tbarea VALUES ('654003', '奎屯市', '654000');
INSERT INTO tbarea VALUES ('654021', '伊宁县', '654000');
INSERT INTO tbarea VALUES ('654022', '察布查尔锡伯自治县', '654000');
INSERT INTO tbarea VALUES ('654023', '霍城县', '654000');
INSERT INTO tbarea VALUES ('654024', '巩留县', '654000');
INSERT INTO tbarea VALUES ('654025', '新源县', '654000');
INSERT INTO tbarea VALUES ('654026', '昭苏县', '654000');
INSERT INTO tbarea VALUES ('654027', '特克斯县', '654000');
INSERT INTO tbarea VALUES ('654028', '尼勒克县', '654000');
INSERT INTO tbarea VALUES ('654200', '塔城地区', '650000');
INSERT INTO tbarea VALUES ('654201', '塔城市', '654200');
INSERT INTO tbarea VALUES ('654202', '乌苏市', '654200');
INSERT INTO tbarea VALUES ('654221', '额敏县', '654200');
INSERT INTO tbarea VALUES ('654223', '沙湾县', '654200');
INSERT INTO tbarea VALUES ('654224', '托里县', '654200');
INSERT INTO tbarea VALUES ('654225', '裕民县', '654200');
INSERT INTO tbarea VALUES ('654226', '和布克赛尔蒙古自治县', '654200');
INSERT INTO tbarea VALUES ('654300', '阿勒泰地区', '650000');
INSERT INTO tbarea VALUES ('654301', '阿勒泰市', '654300');
INSERT INTO tbarea VALUES ('654321', '布尔津县', '654300');
INSERT INTO tbarea VALUES ('654322', '富蕴县', '654300');
INSERT INTO tbarea VALUES ('654323', '福海县', '654300');
INSERT INTO tbarea VALUES ('654324', '哈巴河县', '654300');
INSERT INTO tbarea VALUES ('654325', '青河县', '654300');
INSERT INTO tbarea VALUES ('654326', '吉木乃县', '654300');
INSERT INTO tbarea VALUES ('659000', '自治区直辖县级行政区划', '650000');
INSERT INTO tbarea VALUES ('659001', '石河子市', '659000');
INSERT INTO tbarea VALUES ('659002', '阿拉尔市', '659000');
INSERT INTO tbarea VALUES ('659003', '图木舒克市', '659000');
INSERT INTO tbarea VALUES ('659004', '五家渠市', '659000');
INSERT INTO tbarea VALUES ('710000', '台湾省', '0');
INSERT INTO tbarea VALUES ('810000', '香港特别行政区', '0');
INSERT INTO tbarea VALUES ('820000', '澳门特别行政区', '0');

-- ----------------------------
-- Table structure for `tj_parameter`
-- ----------------------------
DROP TABLE IF EXISTS `tj_parameter`;
CREATE TABLE `tj_parameter` (
  `PARAMETERID` varchar(16) NOT NULL,
  `PARAMETERMEMO` varchar(16) DEFAULT NULL,
  `PARAMETYPE` varchar(16) DEFAULT NULL,
  `idNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`PARAMETERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='参数大类';

-- ----------------------------
-- Records of tj_parameter
-- ----------------------------
INSERT INTO tj_parameter VALUES ('BM', '所属部门', '1', null);
INSERT INTO tj_parameter VALUES ('BWZ', '标志位', '1', null);
INSERT INTO tj_parameter VALUES ('BZ', '标志', '1', null);
INSERT INTO tj_parameter VALUES ('CGCKS', '超过参考值提示', '1', null);
INSERT INTO tj_parameter VALUES ('CHSJ', '触发事件', '1', null);
INSERT INTO tj_parameter VALUES ('CKZXS', '参考值显示', '1', null);
INSERT INTO tj_parameter VALUES ('CSLX', '参数类型', '1', null);
INSERT INTO tj_parameter VALUES ('GSLX', '格式类型', '1', null);
INSERT INTO tj_parameter VALUES ('MRZLX', '默认值类型', '1', null);
INSERT INTO tj_parameter VALUES ('QJXH', '全局序号', '1', null);
INSERT INTO tj_parameter VALUES ('SFBS', '是否必输', '1', null);
INSERT INTO tj_parameter VALUES ('SFJS', '是否及时', '2', null);
INSERT INTO tj_parameter VALUES ('SFXS', '是否显示', '1', null);
INSERT INTO tj_parameter VALUES ('WEEK', '星期', '1', null);
INSERT INTO tj_parameter VALUES ('WEEKUNIT', '周期单位', '1', null);
INSERT INTO tj_parameter VALUES ('WZ', '位置', '1', null);
INSERT INTO tj_parameter VALUES ('XB', '性别', '1', null);
INSERT INTO tj_parameter VALUES ('XQ', '兴趣', '1', null);
INSERT INTO tj_parameter VALUES ('XSLX', '显示类型', '1', null);
INSERT INTO tj_parameter VALUES ('XSWZ', '显示位置', '1', null);
INSERT INTO tj_parameter VALUES ('XSXS', '显示形式', '1', null);
INSERT INTO tj_parameter VALUES ('YN', '是否', '2', null);
INSERT INTO tj_parameter VALUES ('YXZT', '有效状态', '1', null);
INSERT INTO tj_parameter VALUES ('ZC', '职称', '1', null);
INSERT INTO tj_parameter VALUES ('ZDLX', '字段类型', '1', null);
INSERT INTO tj_parameter VALUES ('ZGXL', '最高学历', '2', null);
INSERT INTO tj_parameter VALUES ('ZGXW', '最高学位', '1', null);
INSERT INTO tj_parameter VALUES ('ZJLX', '证件类型', '2', null);
INSERT INTO tj_parameter VALUES ('ZY', '职业', '2', null);
INSERT INTO tj_parameter VALUES ('ZYZW', '职务', '1', null);

-- ----------------------------
-- Table structure for `tj_paramitem`
-- ----------------------------
DROP TABLE IF EXISTS `tj_paramitem`;
CREATE TABLE `tj_paramitem` (
  `PARA` varchar(20) NOT NULL,
  `PARAMETERID` varchar(20) NOT NULL,
  `PARAMETERNAME` varchar(200) DEFAULT NULL,
  `ABNAME` varchar(100) DEFAULT NULL,
  `PARAMLEVEL` varchar(2) DEFAULT NULL,
  `PARAMETERMEMO` varchar(200) DEFAULT NULL,
  `SORTNUM` int(11) DEFAULT NULL,
  `SP_PARAMVALUE` varchar(10) DEFAULT NULL,
  `SP_PARAMID` varchar(20) DEFAULT NULL,
  `IF_NODE` char(1) DEFAULT NULL,
  `idNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`PARA`,`PARAMETERID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='参数明细';

-- ----------------------------
-- Records of tj_paramitem
-- ----------------------------
INSERT INTO tj_paramitem VALUES ('0', 'BWZ', '标题', '标题', '0', '标题', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'CHSJ', '无触发', '无触发', '0', '无触发', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'GSLX', '标题', '标题', '0', '标题', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'SFXS', '否', '否', '1', '否', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'WEEK', '节假日', '节假日', '1', '节假日', '0', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'WZ', '左边', '左边', '0', '左边', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'XSLX', '文本框', '文本框', '1', '文本框', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'XSWZ', '左边', '左边', '0', '左边', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'XSXS', '文本框', '文本框', '0', '文本框', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'YXZT', '无效', '无效', '0', '无效', '0', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('0', 'ZDLX', '无', '不对应数据字段', '1', '不对应数据字段', '0', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'BWZ', '有效行', '有效行', '1', '有效行', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'BZ', '全资子公司', null, '1', null, '1', '0', 'BZ', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'CGCKS', '超过标准值提示最小值为0', '超过标准值提示最小值为0', '1', '超过标准值提示最小值为0', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'CHSJ', '点击（单击）', '点击（单击）', '1', '点击（单击）', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'CSLX', '系统参数', '系统', '1', '系统参数（用户不可修改）', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'GSLX', '有效行', '有效行', '1', '有效行', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'MRZLX', '手工填写默认值', '手工填写默认值', '1', '手工填写默认值', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'SFBS', '是', null, '1', null, '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'SFJS', '及时', null, '1', null, '1', '0', 'SFJS', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'SFXS', '是', '是', '1', '是', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'WEEK', '星期一', '星期一', '1', '星期一', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'WEEKUNIT', '天', '天', '1', '天', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'WZ', '右边', '右边', '1', '右边', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'XB', '男', '男', '1', '男', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'XQ', '读书', '', '1', '', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'XSLX', '下拉框', '下拉框', '1', '下拉框', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'XSWZ', '右边', '右边', '1', '右边', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'XSXS', '下拉框', '下拉框', '1', '下拉框', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'YXZT', '有效', '有效', '1', '有效', '1', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'ZC', '无', null, '1', null, '1', '0', 'ZC', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'ZDLX', 'bak1_10_len', '备用字段10字节', '1', '备用字段10字节', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'ZGXL', '大专以下', null, '1', null, '1', '0', 'ZGXL', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'ZGXW', '未知', null, '1', null, '1', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('1', 'ZYZW', '实际控制人', null, '1', null, '1', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('10', 'BM', '中医院', '', '1', '', '1', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('10', 'ZDLX', 'bak2_100_len', '备用字段100字节', '1', '备用字段100字节', '10', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1001', 'BM', '财会部', '财会部', '1', '财会部', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1003', 'BM', '外部科', '外部科', '1', '外部科', '3', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1004', 'BM', '骨科神经科', '骨科神经科', '1', '骨科神经科', '4', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1005', 'BM', '妇科', '妇科', '1', '妇科', '5', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('1006', 'BM', '后勤科', '后勤科', '1', '后勤科', '5', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('101', 'YN', '是', 'Y', '1', '是', '1', '0', null, '1', null);
INSERT INTO tj_paramitem VALUES ('101', 'ZJLX', '身份证', '身份证', '1', '身份证', '1', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('101', 'ZY', '国家机关、党群组织、企业、事业单位负责人', null, '1', null, '1', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('102', 'YN', '否', 'N', '1', '否', '2', '0', null, '1', null);
INSERT INTO tj_paramitem VALUES ('102', 'ZJLX', '户口簿', '户口簿', '1', '户口簿', '2', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('102', 'ZY', '专业技术人员', null, '1', null, '2', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('103', 'ZJLX', '护照', null, '1', null, '3', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('103', 'ZY', '办事人员和有关人员', null, '1', null, '3', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('104', 'ZJLX', '驾照', null, '1', null, '4', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('104', 'ZY', '商业、服务业人员', null, '1', null, '4', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('105', 'ZJLX', '军官证', null, '1', null, '5', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('105', 'ZY', '农、林、牧、渔、水利业生产人员', null, '1', null, '5', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('106', 'ZJLX', '士兵证', null, '1', null, '6', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('106', 'ZY', '生产、运输设备操作人员及有关人员', null, '1', null, '6', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('107', 'ZJLX', '港澳居民来往内地通行证', null, '1', null, '7', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('107', 'ZY', '军人', null, '1', null, '7', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('108', 'ZJLX', '台湾同胞来往内地通行证', null, '1', null, '8', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('108', 'ZY', '不便分类的其他从业人员', null, '1', null, '8', '0', 'ZY', '1', null);
INSERT INTO tj_paramitem VALUES ('109', 'ZJLX', '临时身份证', null, '1', null, '9', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('109', 'ZY', '未知', null, '1', null, '9', '0', '职业', '1', null);
INSERT INTO tj_paramitem VALUES ('110', 'ZJLX', '外国人居留证', null, '1', null, '10', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('111', 'ZJLX', '警官证', null, '1', null, '11', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('112', 'ZJLX', '其他证件', null, '1', null, '12', '0', 'ZJLX', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'BWZ', '小计行', '小计行', '2', '小计行', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'BZ', '控股和参股公司', null, '1', null, '2', '0', 'BZ', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'CGCKS', '超过标准值提示最小值为标准值的负数', '超过标准值提示最小值为标准值的负数', '2', '超过标准值提示最小值为标准值的负数', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'CHSJ', '点击（双击）', '点击（双击）', '2', '点击（双击）', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'CSLX', '用户参数', '用户', '1', '用户参数（用户自定义）', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'MRZLX', '调用JAVA类', '调用JAVA类', '2', '调用JAVA类', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'SFBS', '否', null, '1', null, '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'SFJS', '不及时', null, '1', null, '2', '0', 'SFJS', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'WEEK', '星期二', '星期二', '1', '星期二', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'WEEKUNIT', '周', '周', '1', '周', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'XB', '女', '女', '2', '女', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'XQ', '运动', '', '1', '', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'XSLX', '单选钮', '单选钮', '1', '单选钮', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'XSWZ', '左右通栏', '左右通栏', '2', '左右通栏', '2', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'ZC', '高级', null, '1', null, '2', '0', 'ZC', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'ZDLX', 'bak2_10_len', '备用字段10字节', '1', '备用字段10字节', '2', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'ZGXL', '大专', null, '1', null, '2', '0', 'ZGXL', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'ZGXW', '名誉博士', null, '1', null, '2', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('2', 'ZYZW', '董事长', null, '1', null, '2', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'BWZ', '合计行', '合计行', '3', '合计行', '3', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'BZ', '兄弟公司', null, '1', null, '3', '0', 'BZ', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'CGCKS', '与标准值不相等时提示用于计算行', '与标准值不相等时提示用于计算行', '3', '与标准值不相等时提示用于计算行', '3', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'CHSJ', '按键（按下）', '按键（按下）', '3', '按键（按下）', '3', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'MRZLX', '从SESSION中取值', '从SESSION中取值', '3', '从SESSION中取值', '3', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'WEEK', '星期三', '星期三', '1', '星期三', '3', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'WEEKUNIT', '月', '月', '1', '月', '3', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'XQ', '电影', '', '1', '', '3', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'XSLX', '多行文本框', '多行文本框', '1', '多行文本框', '3', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'ZC', '中级', null, '1', null, '3', '0', 'ZC', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'ZDLX', 'bak3_10_len', '备用字段10字节', '1', '备用字段10字节', '3', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'ZGXL', '本科', '本科', '1', null, '3', '0', 'ZGXL', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'ZGXW', '博士', null, '1', null, '3', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('3', 'ZYZW', '董事', null, '1', null, '3', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'BWZ', '总计行', '总计行', '4', '总计行', '4', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'BZ', '其他', null, '1', null, '4', '0', 'BZ', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'CGCKS', '超过标准值提示大于标准值[计算不显示行]', '超过标准值提示大于标准值[计算不显示行]', '4', '超过标准值提示大于标准值[计算不显示行]', '4', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'CHSJ', '按键（抬起）', '按键（抬起）', '4', '按键（抬起）', '4', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'MRZLX', '从REQUEST中取值', '从REQUEST中取值', '4', '从REQUEST中取值', '4', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'WEEK', '星期四', '星期四', '1', '星期四', '4', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'WEEKUNIT', '年', '年', '1', '年', '4', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'XSLX', '多选按钮', '多选按钮', '1', '多选按钮', '4', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'ZC', '初级', null, '1', null, '4', '0', 'ZC', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'ZDLX', 'bak1_20_len', '备用字段20字节', '1', '备用字段20字节', '4', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'ZGXL', '硕士', '硕士', '1', null, '4', '0', 'ZGXL', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'ZGXW', '硕士', null, '1', null, '4', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('4', 'ZYZW', '总经理', null, '1', null, '4', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'BWZ', '计算行但不显示到页面', '计算行但不显示到页面', '5', '计算行但不显示到页面', '5', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'MRZLX', 'DWR调用', 'DWR调用', '5', 'DWR调用', '5', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'WEEK', '星期五', '星期五', '1', '星期五', '5', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'XSLX', '弹出选择框', '弹出选择框', '1', '弹出选择框', '5', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'ZC', '未知', null, '1', null, '5', '0', 'ZC', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'ZDLX', 'bak2_20_len', '备用字段20字节', '1', '备用字段20字节', '5', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'ZGXL', '博士', '博士', '1', null, '5', '0', 'ZGXL', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'ZGXW', '学士', null, '1', null, '5', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('5', 'ZYZW', '财务总监(经理)', null, '1', null, '5', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('6', 'WEEK', '星期六', '星期六', '1', '星期六', '6', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('6', 'XSLX', '金额文本框', '金额文本框', '1', '金额文本框', '6', null, null, '1', null);
INSERT INTO tj_paramitem VALUES ('6', 'ZDLX', 'bak3_20_len', '备用字段20字节', '1', '备用字段20字节', '6', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('6', 'ZGXW', '其他', null, '1', null, '6', '0', 'ZGXW', '1', null);
INSERT INTO tj_paramitem VALUES ('6', 'ZYZW', '其他管理', null, '1', null, '6', '0', 'ZYZW', '1', null);
INSERT INTO tj_paramitem VALUES ('7', 'WEEK', '星期日', '星期日', '1', '星期日', '7', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('7', 'ZDLX', 'bak1_50_len', '备用字段50字节', '1', '备用字段50字节', '7', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('8', 'ZDLX', 'bak2_50_len', '备用字段50字节', '1', '备用字段50字节', '8', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('9', 'ZDLX', 'bak1_100_len', '备用字段100字节', '1', '备用字段100字节', '9', '', '', '1', null);
INSERT INTO tj_paramitem VALUES ('KHBH', 'QJXH', '客户编号', '客户编号', '1', '客户号', '550', '20100107', null, '1', null);
INSERT INTO tj_paramitem VALUES ('TIMENO', 'QJXH', '考勤批次号', '考勤批次号', '1', '考勤批次号', '1', '20141023', null, '1', null);
INSERT INTO tj_paramitem VALUES ('TJJXH', 'QJXH', '提交件序号', '提交件序号', '1', '提交件序号', '3', '20121013', null, '1', null);

-- ----------------------------
-- Table structure for `tradingrecords`
-- ----------------------------
DROP TABLE IF EXISTS `tradingrecords`;
CREATE TABLE `tradingrecords` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-用户账户交易记录表主键',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `idUseraccount` int(11) DEFAULT NULL COMMENT '账户主键',
  `idOrder` int(11) DEFAULT NULL COMMENT '订单主键，充值也是订单，购买商品也是订单，',
  `idPayway` int(11) DEFAULT NULL COMMENT '支付方式表主键',
  `tradingamount` decimal(16,2) DEFAULT NULL COMMENT '交易金额',
  `tradingtype` int(11) DEFAULT NULL COMMENT '交易类型，0=充值，1=支出，2=退款，3=转出，4充值赠送',
  `tradingtime` datetime DEFAULT NULL COMMENT '交易时间',
  `tradingNo` char(50) DEFAULT NULL COMMENT '交易单号',
  `note` varchar(50) DEFAULT NULL COMMENT '备注',
  `tradingstatus` int(11) DEFAULT NULL COMMENT '交易状态，0=待审核，1=支付成功，2=支付失败',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` decimal(16,4) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1086 DEFAULT CHARSET=utf8 COMMENT='支付管理-用户账户交易记录表tradingrecords';

-- ----------------------------
-- Records of tradingrecords
-- ----------------------------
INSERT INTO tradingrecords VALUES ('1', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'chongzhi', '1', '2016-02-22 11:02:56', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('2', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-02-22 17:11:43', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('3', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-02-22 17:12:27', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('4', '1000', '100002', null, '1000', '0.01', '0', '2016-02-22 17:14:53', '201602210001', '充值', '1', '2016-02-22 17:13:16', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('5', '1000', '100002', null, '1000', '0.01', '0', '2016-02-22 17:19:10', '2222', '充值', '1', '2016-02-22 17:17:34', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('6', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-02-22 17:34:17', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('7', '1000', '100002', null, '1000', '0.01', '0', '2016-02-23 11:16:37', '2222', '充值', '1', '2016-02-23 11:14:55', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('8', '1000', '100002', null, '1000', '0.01', '0', '2016-02-23 11:23:01', '2222', '充值', '1', '2016-02-23 11:21:20', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('9', '1000', '100002', null, '1000', '0.01', '0', '2016-02-23 11:49:50', '2222', '充值', '1', '2016-02-23 11:48:11', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('10', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-02-26 11:51:49', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('11', '1000', '100002', null, '1000', '0.01', '0', '2016-03-04 10:56:44', 'ad529c3e-508b-4240-a565-e98323580d17', '充值', '1', '2016-03-04 10:54:33', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('12', '1000', '100002', null, '1000', '0.01', '0', '2016-03-04 10:57:45', 'bc1c6fc0-3e47-4e96-8a73-1b1c1d0f8ef7', '充值', '1', '2016-03-04 10:55:34', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('13', '1000', '100002', null, '1000', '0.01', '0', '2016-03-04 10:59:19', 'e1c75f72-9535-4c96-a28a-6f27cfb19229', '充值', '1', '2016-03-04 10:57:06', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('14', '1000', '100002', null, '1000', '0.01', '0', '2016-03-04 11:04:13', 'bb12dd4a-e06a-47a2-b141-783bebd8bdd5', '充值', '1', '2016-03-04 11:02:02', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('15', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-03-14 14:49:10', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('16', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-03-14 14:49:30', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('17', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', 'åå¼', '1', '2016-03-14 14:53:40', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('18', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 00:23:20', '201602210001', '交易描述', '1', '2016-03-14 15:11:11', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1000', '1000', '100002', null, '1000', '0.10', '0', '2016-01-27 00:23:20', '201602210001', 'äº¤ææè¿°', '1', '2016-03-24 19:28:37', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1001', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 15:59:44', 'a982f94b-d502-4f74-b296-b758e0a4f2df', '充值', '1', '2016-03-25 15:58:54', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1002', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:10:48', '27c5b74f-981b-4375-a783-fd1018f47939', '充值', '1', '2016-03-25 16:09:56', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1003', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:11:16', 'c3257bb3-4987-418a-ac06-dbad154cce4f', '充值', '1', '2016-03-25 16:10:24', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1004', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:11:49', '2762f8e6-3dd9-409f-83ed-461982952518', '充值', '1', '2016-03-25 16:11:07', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1005', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:13:04', '8d8e434a-43ef-411d-ad3a-c38712c361cc', '充值', '1', '2016-03-25 16:12:12', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1006', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 16:18:09', 'fe9016ad-10f5-40c1-8255-e52721683cd5', '充值', '1', '2016-03-25 16:17:18', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1007', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 16:18:40', '339b05a2-5e8b-4cdb-9fa2-636c06fd14c7', '充值', '1', '2016-03-25 16:17:50', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1008', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:29:44', '275cc8fe-0fbd-4f67-9647-7d28fd884a05', '充值', '1', '2016-03-25 16:28:53', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1009', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:30:28', '8370e100-a4b0-49d3-8eb8-03ee70f105ca', '充值', '1', '2016-03-25 16:29:37', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1010', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 16:42:58', 'd8070c01-22c4-4abb-96ae-2f7dbece45b7', '充值', '1', '2016-03-25 16:42:16', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1011', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 17:08:33', '0e247784-6ccb-4d2c-ac06-f71d5af037d7', '充值', '1', '2016-03-25 17:07:51', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1012', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 17:09:14', '5960314a-9069-48a8-a69b-95df2a119a3e', '充值', '1', '2016-03-25 17:08:31', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1013', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 17:27:56', 'c9ae8726-3463-4577-85e8-11b1d12b34ca', '充值', '1', '2016-03-25 17:27:05', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1014', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 17:29:22', 'ced71316-d172-4d0e-9f00-7e7a2a9064e6', '充值', '1', '2016-03-25 17:28:31', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1015', '1086', '100012', null, '1000', '0.01', '0', '2016-03-25 17:33:08', '2f4c7989-085b-4a23-a890-86ae26afd138', '充值', '1', '2016-03-25 17:32:17', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1016', '1000', '100002', null, '1000', '0.01', '0', '2016-03-25 17:45:34', '694fc138-518e-4d69-8033-7f4125ceb6c5', '充值', '1', '2016-03-25 17:44:42', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1017', '1086', '100012', null, '1000', '0.01', '0', '2016-03-29 17:17:13', '1b24f97c-b154-433e-a0b0-94f5e3e043fd', '充值', '1', '2016-03-29 17:16:08', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1023', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 09:13:19', 'AUVDBQZOW017KBL', '交易描述', '1', '2016-03-31 09:12:08', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1024', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 09:26:05', 'WHO53TNG6EVV1AG', '充值', '1', '2016-03-31 09:24:54', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1025', '1000', '100002', null, '1000', '1000.00', '0', '2016-01-27 12:23:20', '201602210001', '充值', '1', '2016-03-31 10:17:53', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1026', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 10:31:01', 'ST0GUEVSXZDFYCO', '充值', '1', '2016-03-31 10:29:50', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1027', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 10:42:45', '0M03MKSY3QV8JLM', '充值', '1', '2016-03-31 10:41:34', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1028', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 10:45:03', 'UYAIFVM0NHWEUMF', '充值', '1', '2016-03-31 10:43:52', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1029', '1058', '100010', null, '1000', '0.01', '0', '2016-03-31 10:51:58', 'dd926ae0-43e5-48f3-9446-113e45e3c5ac', '充值', '1', '2016-03-31 10:50:47', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1030', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 11:04:25', 'G5ARU19TYL1C7Q7', '充值', '1', '2016-03-31 11:03:14', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1031', '1077', '100010', null, '1000', '9999.00', '0', '2016-01-27 12:23:20', 'ei\'w\'h\'ci\'w\'yue\'g\'fo\'i', '充值', '1', '2016-03-31 11:05:46', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1032', '1077', '100010', null, '1000', '0.02', '0', '2016-03-31 11:13:01', 'ca2858e4-353a-4dc6-915e-6dfb78e4686e', '充值', '1', '2016-03-31 11:08:39', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1033', '1077', '100010', null, null, '0.00', '4', '2016-03-31 11:08:50', null, '充值赠送', '1', '2016-03-31 11:08:50', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1034', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 11:10:42', '3K8E503ZDAIGT5E', '充值', '1', '2016-03-31 11:09:31', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1035', '1100', '100021', null, '1000', '0.01', '0', '2016-03-31 11:17:57', '637fbdc3-cbe6-414d-8f30-e60a752e3c97', '充值', '1', '2016-03-31 11:17:58', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1036', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 11:27:52', '1LOIU5FYBN1H8KC', '充值', '1', '2016-03-31 11:26:41', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1037', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:01:41', '8PEV9PFLOCFC203', '充值', '1', '2016-03-31 12:00:30', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1038', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:03:33', 'OK36KEGUG1QM4SX', '充值', '1', '2016-03-31 12:02:22', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1039', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:07:39', 'II37RKNDHH48GPK', '充值', '1', '2016-03-31 12:06:28', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1040', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:50:51', 'IJPOWB902OIBMQ7', '充值', '1', '2016-03-31 12:49:40', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1041', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:53:05', 'W30XS9WRBF26DV0', '充值', '1', '2016-03-31 12:51:54', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1042', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:55:14', 'ZP7Y75QHAO7QWE2', '充值', '1', '2016-03-31 12:54:03', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1043', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:56:51', 'IQ5LKMAPRCO5TV6', '充值', '1', '2016-03-31 12:55:40', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1044', '1000', '100002', null, '1000', '0.02', '0', '2016-03-31 12:58:23', 'QAZJXIZFHIO91QJ', '充值', '1', '2016-03-31 12:57:12', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1045', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 12:59:36', 'LP36YA2R2NWOIV6', '充值', '1', '2016-03-31 12:58:25', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1046', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:01:57', '0LQPJ9DG0WEQRL8', '充值', '1', '2016-03-31 13:00:46', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1047', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:05:19', 'Y51UZXA1KRRPRSX', '充值', '1', '2016-03-31 13:04:08', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1048', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:31:37', 'S73EGZ8XY4G3UF3', '充值', '1', '2016-03-31 13:30:25', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1049', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:36:50', 'BXHB44Z3DP4VAOV', '充值', '1', '2016-03-31 13:35:39', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1050', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:39:50', 'B9PIGJ8PZIPS4IL', '充值', '1', '2016-03-31 13:38:38', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1051', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:43:55', 'AI301HRI1G3GSPH', '充值', '1', '2016-03-31 13:42:43', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1052', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:48:06', 'FEO988R2CXWUCRV', '充值', '1', '2016-03-31 13:46:54', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1053', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:49:58', 'VSW10GSU4M74XJP', '充值', '1', '2016-03-31 13:48:47', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1054', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:53:38', 'B9UHP0N3U0VU07D', '充值', '1', '2016-03-31 13:52:27', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1055', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 13:55:17', 'K50P8EJPQ7T5Q4Z', '充值', '1', '2016-03-31 13:54:06', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1056', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:12:56', 'HOV1QA52U4JYAF5', '充值', '1', '2016-03-31 14:11:45', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1057', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:13:27', '63IDPHRDDO758AC', '充值', '1', '2016-03-31 14:12:17', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1058', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:15:19', 'MY7O0PS55DIFT26', '充值', '1', '2016-03-31 14:14:07', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1059', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:16:58', 'VUWWJ3OA1KG9JZS', '充值', '1', '2016-03-31 14:15:46', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1060', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:25:35', '2ZCJTC5FF0YF9VR', '充值', '1', '2016-03-31 14:24:24', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1061', '1000', '100002', null, null, '0.00', '4', '2016-03-31 14:24:28', null, '充值赠送', '1', '2016-03-31 14:24:28', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1062', '1077', '100010', null, '1000', '0.02', '0', '2016-03-31 14:31:13', '58bc1b55-5fee-4fac-9d2a-bfbfb045be2c', '充值', '1', '2016-03-31 14:26:50', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1063', '1077', '100010', null, null, '0.00', '4', '2016-03-31 14:26:53', null, '充值赠送', '1', '2016-03-31 14:26:53', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1064', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:29:19', 'Y895W97ZZEKZFFF', '充值', '1', '2016-03-31 14:28:07', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1065', '1000', '100002', null, null, '0.00', '4', '2016-03-31 14:28:54', null, '充值赠送', '1', '2016-03-31 14:28:54', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1066', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:42:30', '3NII3QHU2CNL0GI', '充值', '1', '2016-03-31 14:41:19', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1067', '1000', '100002', null, null, '0.00', '4', '2016-03-31 14:41:21', null, '充值赠送', '1', '2016-03-31 14:41:21', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1068', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 14:51:21', 'CGM88IACBBZOQGZ', '充值', '1', '2016-03-31 14:50:09', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1069', '1000', '100002', null, null, '0.00', '4', '2016-03-31 14:50:11', null, '充值赠送', '1', '2016-03-31 14:50:11', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1070', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 15:01:32', 'HJNEKKULBXHWH4T', '充值', '1', '2016-03-31 15:00:21', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1071', '1000', '100002', null, null, '0.00', '4', '2016-03-31 15:00:23', null, '充值赠送', '1', '2016-03-31 15:00:23', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1072', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 15:02:14', 'NJLPM5SMUZ140X9', '充值', '1', '2016-03-31 15:01:03', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1073', '1000', '100002', null, null, '0.00', '4', '2016-03-31 15:01:04', null, '充值赠送', '1', '2016-03-31 15:01:04', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1074', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 15:07:59', 'QDAHCPCARMUKJRZ', '充值', '1', '2016-03-31 15:06:47', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1075', '1000', '100002', null, null, '0.00', '4', '2016-03-31 15:06:50', null, '充值赠送', '1', '2016-03-31 15:06:50', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1076', '1000', '100002', null, '1000', '0.01', '0', '2016-03-31 15:08:26', 'Z0Y4GJAAZ6KXXQP', '充值', '1', '2016-03-31 15:07:14', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1077', '1000', '100002', null, null, '0.00', '4', '2016-03-31 15:07:16', null, '充值赠送', '1', '2016-03-31 15:07:16', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1078', '1100', '100021', null, '1000', '0.01', '0', '2016-03-31 06:19:03', 'ILDBGJ0OZEQ7LBZ', '充值', '1', '2016-03-31 18:17:51', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1079', '1100', '100021', null, null, '0.00', '4', '2016-03-31 18:17:58', null, '充值赠送', '1', '2016-03-31 18:17:58', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1080', '1077', '100010', null, '1000', '0.01', '0', '2016-04-01 17:11:03', 'e553479c-a79d-4329-8107-3dd135acc494', '充值', '1', '2016-04-01 17:09:46', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1081', '1077', '100010', null, null, '0.00', '4', '2016-04-01 17:09:48', null, '充值赠送', '1', '2016-04-01 17:09:48', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1082', '1077', '100010', null, '1000', '0.01', '0', '2016-04-08 15:22:01', 'MHFFT6TTZJ58ESA', '充值', '1', '2016-04-08 15:20:21', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1083', '1077', '100010', null, null, '0.00', '4', '2016-04-08 15:20:27', null, '充值赠送', '1', '2016-04-08 15:20:27', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1084', '1077', '100010', null, '1000', '0.01', '0', '2016-04-08 15:22:38', 'HJSIV6FCR3ROPGZ', '充值', '1', '2016-04-08 15:20:57', '0', null, null, null, null, null);
INSERT INTO tradingrecords VALUES ('1085', '1077', '100010', null, null, '0.00', '4', '2016-04-08 15:20:59', null, '充值赠送', '1', '2016-04-08 15:20:59', '0', null, null, null, null, null);

-- ----------------------------
-- Table structure for `t_available_no`
-- ----------------------------
DROP TABLE IF EXISTS `t_available_no`;
CREATE TABLE `t_available_no` (
  `idNumber` varchar(20) NOT NULL,
  `inst_no` varchar(9) NOT NULL,
  `name` varchar(20) NOT NULL,
  `crt_no` int(11) NOT NULL,
  `bgn_no` int(11) NOT NULL,
  `inv` int(11) NOT NULL,
  `max_no` int(11) NOT NULL,
  `warn_rate` decimal(11,4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_available_no
-- ----------------------------
INSERT INTO t_available_no VALUES ('t_inst_mgmt', '省营', '机构网点表', '1', '1', '1', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_gloss_info', '省营', '营销术语信息', '1', '1', '1', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_excel_info', '省营', 'excel配置信息表', '1', '1', '1', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_tlr_mgmt', '省营', '柜员管理表', '1', '1', '1', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_info_mgmt', '省营', '信息发布管理', '2', '2', '2', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('bbs', '省营', '业务交流区', '2', '2', '2', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_product_info', '省营', '产品信息表', '2', '2', '2', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_product_select', '省营', '产品查询', '2', '2', '2', '99999999', '80.0000');
INSERT INTO t_available_no VALUES ('t_comp_info', '省营', '公司信息表', '2', '2', '2', '99999999', '80.0000');

-- ----------------------------
-- Table structure for `t_comp_file`
-- ----------------------------
DROP TABLE IF EXISTS `t_comp_file`;
CREATE TABLE `t_comp_file` (
  `idNumber` varchar(255) NOT NULL,
  `comp_id` varchar(255) DEFAULT NULL,
  `file_type` varchar(255) DEFAULT NULL,
  `file_url` varchar(255) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `back1` varchar(255) DEFAULT NULL,
  `back2` varchar(255) DEFAULT NULL,
  `flag` varchar(255) DEFAULT NULL,
  `compversion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_comp_file
-- ----------------------------

-- ----------------------------
-- Table structure for `t_excel_info`
-- ----------------------------
DROP TABLE IF EXISTS `t_excel_info`;
CREATE TABLE `t_excel_info` (
  `idNumber` varchar(255) NOT NULL,
  `product_no` varchar(255) DEFAULT NULL,
  `Para_name` varchar(255) DEFAULT NULL,
  `Y_site` varchar(255) DEFAULT NULL,
  `X_site` varchar(255) DEFAULT NULL,
  `X_tab` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `Exc_value` varchar(255) DEFAULT NULL,
  `sheetName` varchar(255) DEFAULT NULL,
  `paraSite` varchar(255) DEFAULT NULL,
  `back1` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_excel_info
-- ----------------------------

-- ----------------------------
-- Table structure for `t_info_mgmt`
-- ----------------------------
DROP TABLE IF EXISTS `t_info_mgmt`;
CREATE TABLE `t_info_mgmt` (
  `info_id` varchar(255) NOT NULL,
  `info_type` varchar(255) DEFAULT NULL,
  `info_head` varchar(255) DEFAULT NULL,
  `info_body` varchar(255) DEFAULT NULL,
  `info_path` varchar(255) DEFAULT NULL,
  `Info_name` varchar(255) DEFAULT NULL,
  `reas_date` varchar(255) DEFAULT NULL,
  `inst_no` varchar(255) DEFAULT NULL,
  `tlr_no` varchar(255) DEFAULT NULL,
  `lst_upd_date` varchar(255) DEFAULT NULL,
  `lst_upd_tlr` varchar(255) DEFAULT NULL,
  `info_state` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_info_mgmt
-- ----------------------------

-- ----------------------------
-- Table structure for `t_inst_mgmt`
-- ----------------------------
DROP TABLE IF EXISTS `t_inst_mgmt`;
CREATE TABLE `t_inst_mgmt` (
  `idNumber` varchar(9) NOT NULL COMMENT '主键',
  `inst_type` varchar(8) DEFAULT NULL COMMENT '类型',
  `inst_name` varchar(100) DEFAULT NULL COMMENT '机构名称',
  `up_inst_no` varchar(9) DEFAULT NULL COMMENT '上级机构',
  `address` varchar(200) DEFAULT NULL COMMENT '地址',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话',
  `contact_psn` varchar(20) DEFAULT NULL COMMENT '联系人',
  `inst_busn_stat` varchar(1) DEFAULT NULL COMMENT '机构状态',
  `lst_modify_tlr` varchar(9) DEFAULT NULL COMMENT '最后修改人',
  `lst_modify_date` varchar(8) DEFAULT NULL COMMENT '最后修改时间',
  `brno` varchar(6) DEFAULT NULL,
  `back2` varchar(2) DEFAULT NULL,
  `back3` varchar(20) DEFAULT NULL,
  `back4` varchar(20) DEFAULT NULL,
  `back5` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='机构表';

-- ----------------------------
-- Records of t_inst_mgmt
-- ----------------------------
INSERT INTO t_inst_mgmt VALUES ('000000001', '2', '3423', '23423432', '234234', '234234', '2342343', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('000000002', '1', '21', '12', '21', '21', '21', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('000000003', '1', '省营', '8888', 'xxx', 'xxx', 'xxx', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('0420', '3', '网点二', '4401', 'xx', 'xx', 'xx', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('12', '3', '312', '312', 'FSAFDSFSA', 'FSAFDSFSA', '55', '2', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('122', ' ', 'tata', ' ', ' ', ' ', ' ', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('1224', ' ', 'asasdf', ' ', ' ', ' ', ' ', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('123', '1', '32', '321', '43243242', '43243242', '321', '2', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('4400', '1', '营业部', '4400', 'xx', 'xx', 'xx', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('4401', '2', '一级支行', '4400', 'xx', 'xx', 'xx', '1', null, null, null, null, null, null, null);
INSERT INTO t_inst_mgmt VALUES ('4402', '3', '网点一', '4401', 'xx', 'xx', 'xx', '1', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `t_tlr_mgmt`
-- ----------------------------
DROP TABLE IF EXISTS `t_tlr_mgmt`;
CREATE TABLE `t_tlr_mgmt` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机号',
  `tlr_name` varchar(30) DEFAULT NULL COMMENT '用户名称',
  `inst_no` varchar(9) DEFAULT NULL COMMENT '机构编号',
  `tlr_type` varchar(2) DEFAULT NULL COMMENT '用户类型、0=买家、1=卖家、2=系统用户',
  `tlr_pwd` varchar(32) DEFAULT NULL COMMENT '密码',
  `islock` char(1) DEFAULT NULL COMMENT '是否锁定 Y锁定 N未锁定',
  `deliveryaddress` varchar(60) DEFAULT NULL COMMENT '收货地址',
  `stallsname` varchar(50) DEFAULT NULL COMMENT '档口名称',
  `creationtime` datetime DEFAULT NULL COMMENT '注册时间',
  `userlogo` varchar(80) DEFAULT NULL COMMENT '头像',
  `examine` char(1) DEFAULT NULL COMMENT '审核是否通过,0表示待审批，1表示审批通过，2表示审批未通过',
  `lst_pwd_date` datetime DEFAULT NULL COMMENT '最近修改密码的时间',
  `lst_modify_tlr` varchar(9) DEFAULT NULL COMMENT '最近修改人',
  `lst_modify_date` datetime DEFAULT NULL COMMENT '最近修改时间',
  `deliveryaddress2` varchar(60) DEFAULT NULL COMMENT '申请收货地址',
  `address_status` varchar(1) DEFAULT NULL COMMENT '地址修改审核状态 0审核中 1审核通过 2审核未通过',
  `province` varchar(10) DEFAULT NULL COMMENT '省',
  `city` varchar(10) DEFAULT NULL COMMENT '市',
  `area` varchar(10) DEFAULT NULL COMMENT '区',
  `addresss_upts` varchar(20) DEFAULT NULL COMMENT '地址修改时间',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识 1删除 0h或者null没删除',
  `tlr_stat` varchar(1) DEFAULT NULL,
  `back1` char(2) DEFAULT NULL,
  `back2` varchar(30) DEFAULT NULL,
  `back3` decimal(16,2) DEFAULT NULL,
  `provinceup` varchar(10) DEFAULT NULL COMMENT '申请修改省份',
  `cityup` varchar(10) DEFAULT NULL COMMENT '申请修改市',
  `areaup` varchar(10) DEFAULT NULL COMMENT '申请修改区',
  `phoneup` varchar(11) DEFAULT NULL COMMENT '修改买家信息--申请修改的手机号',
  `nameup` varchar(30) DEFAULT NULL COMMENT '修改卖家信息--申请修改的姓名',
  `stallsnameup` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '申请修改的档口名称',
  `update_status` varchar(1) DEFAULT NULL COMMENT '修改买家信息审核状态 0审核中 1审核通过 2审核未通过',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1157 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_tlr_mgmt
-- ----------------------------
INSERT INTO t_tlr_mgmt VALUES ('2', '15920916673', '系统管理员', '0420', '2', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, null, '2015-02-13 00:00:00', '1458811209723375632.jpg', '1', null, null, null, '广东省广州市芳村区相当地址', '0', '广东省', '广州市', '市辖区', '2016-03-24 17:23:43', null, '0', null, null, null, '广东省', '广州市', '市辖区', '15920916679', '测试用户', '你好么哦哦哦', '0');
INSERT INTO t_tlr_mgmt VALUES ('3', '13010243234', '买家', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广州市', null, '2015-02-13 00:00:00', null, '1', null, '翠花', null, null, null, '广东省', '广州市', '市辖区', null, null, null, null, null, null, null, null, null, null, '翠花', null, null);
INSERT INTO t_tlr_mgmt VALUES ('1000', '13427664780', '广州市壹鲜农业有限公司', '0008', '0', 'c33367701511b4f6020ec61ded352059', 'N', '越秀区', '亚麻得', '2016-01-22 10:10:14', '1459238716523748920.PNG', '1', '2016-03-07 10:14:57', '小桂子', '2016-03-07 10:14:57', '广东省广州市芳村区相当地址', '0', '广东省', '广东省', '广东省', '2016-04-06 17:49:37', null, null, null, null, null, '广东省', '广州市', '市辖区', '18023242323', '罗玉凤', '你好么哦哦哦', '0');
INSERT INTO t_tlr_mgmt VALUES ('1024', '15920916678', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区上社新菜市场', null, '2016-01-25 11:56:49', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1025', '15920916678', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'dsdsds12121212', null, '2016-01-25 17:25:53', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1026', '15920916673', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:34:56', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1027', '15920916672', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:38:34', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1030', '13610189066', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:46:44', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1031', '13610189067', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:55:46', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1032', '13610189062', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:56:57', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1033', '13610189061', '刘德华', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', null, '2016-01-25 17:57:51', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1034', '13763035145', '提莫队长', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', '华景新城', '2016-01-26 08:59:39', '1457658583423635499.jpg', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1035', '13763035144', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:04:43', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1036', '13763035143', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:37:19', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1037', '13710250250', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广州市', null, '2016-01-26 09:48:08', '1037.jpg', '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1039', '13763035146', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:48:42', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1040', '13763035148', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:48:49', 'dsdsds.jpg', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1041', '13763035147', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:48:57', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1042', '13763035117', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:50:30', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1043', '13763035118', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:56:51', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1044', '13763035111', '啊啊', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '11111', null, '2016-01-26 09:57:01', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1047', '13710250123', '啊啊', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-01-26 15:25:06', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1048', '13710250119', '啊啊', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-01-26 15:58:25', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1049', '13710250009', '傻缺', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'gdscb', null, '2016-01-27 09:21:36', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1050', '13710250008', '傻缺', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'gdscb', null, '2016-01-27 10:12:40', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1051', '13763035180', '傻缺', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'shenzhencity', null, '2016-01-27 10:29:28', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1052', '13763035181', '傻缺', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'shenzhencity', null, '2016-01-27 10:29:37', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1053', '13610189099', '傻缺', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市密云县咯女tone', null, '2016-01-27 10:31:35', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1054', '13610189088', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市密云县duisfhb', null, '2016-01-27 10:42:59', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1055', '13610189055', null, null, '1', 'c33367701511b4f6020ec61ded352059', 'N', '', null, '2016-01-27 10:44:53', null, '1', '2016-03-09 17:28:16', '', '2016-03-09 17:28:16', '广东省韶关市市辖区啦啦啦啦啦', '0', null, null, null, '2016-03-17 15:26:18', null, null, null, null, null, '广东省', '韶关市', '市辖区', null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1056', '13112215123', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-01-27 14:24:17', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1057', '13710250300', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'gdscb', null, '2016-01-27 16:23:02', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1058', '18688849432', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市延庆县优惠', null, '2016-01-28 15:28:43', null, '0', '2016-02-29 10:48:09', '', '2016-02-29 10:48:09', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1059', '13763035140', null, null, '0', '81dc9bdb52d04dc20036dbd8313ed055', 'N', '北京市密云县北京', null, '2016-01-29 10:20:13', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1060', '13600008250', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区好就', null, '2016-01-29 10:32:48', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1061', '13823437987', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-01-29 11:29:19', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1063', '15616214476', null, null, '0', '271fb5a584116a72ec314dacef8bca56', 'N', '甘肃省嘉峪关市嘉峪关市ggg', null, '2016-02-16 15:53:16', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1064', '18071173687', '铿然', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'wewewewedsdsds', '铿然档口', '2016-02-17 11:14:49', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1065', '13610189056', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市密云县djvduh', null, '2016-02-17 16:54:46', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1066', '18039283965', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-02-26 16:05:11', null, '0', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1067', '13877676766', '阿萨德发', '123', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, 'fad', '2016-03-02 11:47:24', 'cf81f58e-9439-43ed-b2cd-27a447b8586c.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1068', '13877676755', '甘肃风光', '23423', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, 'fadf ', '2016-03-02 12:03:36', 'fb214420-4e31-4e13-896e-9b2ba028fd0f.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1074', '13610189022', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'fjhffbh', null, '2016-03-07 15:09:01', null, '0', null, null, null, null, null, '福建省', '厦门市', '海沧区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1075', '13877676722', '能感受到是是', '675674645', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '和四分公司非', '2016-03-07 16:24:40', '4b83e3c5-631e-4443-a60c-a939394b15b4.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1076', '15323334910', null, null, '1', '25f9e794323b453885f5181f1b624d0b', 'N', '', null, '2016-03-10 20:47:30', null, '0', null, null, null, null, null, '黑龙江省', '齐齐哈尔市', '齐齐哈尔市', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1077', '18000000000', '吴世桢', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '湖北省鄂州市鄂城区泽林镇福盛花园6栋一单元601', '梧桐100号档口', '2016-03-03 03:03:03', '1460109825515642656.jpg', '1', '2016-03-28 15:56:41', '吴世桢', '2016-03-28 15:56:41', '北京市 密云县111111', '0', '湖北省', '鄂州市', '鄂城区', '2016-04-08 13:58:27', '0', null, null, null, null, '北京市', ' ', '密云县', '18039652365', 'Tgggg', 'Ytghjjb', '0');
INSERT INTO t_tlr_mgmt VALUES ('1078', '15920916670', 'wendyshop', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '湖北省武汉市花湖开发区花湖大厦', null, '2016-03-03 03:03:03', '291394.jpg', '1', '2016-03-16 21:50:37', 'wendyshop', '2016-03-16 21:50:37', '香格里拉', '0', '湖北省', '武汉市', '花湖开发区', '2016-04-08 10:31:19', '0', null, null, null, null, '广东省', '惠州市', '博罗县', null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1079', '17198641024', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '福建省厦门市市辖区哈哈哈哈', null, '2016-03-14 13:55:24', null, '1', '2016-03-14 14:24:33', '', '2016-03-14 14:24:33', null, null, '福建省', '厦门市', '市辖区', null, null, null, null, null, null, null, null, null, '17198641024', '来了', '华移', '0');
INSERT INTO t_tlr_mgmt VALUES ('1080', '13134567890', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'gzcmd', null, '2016-03-24 10:16:08', null, '0', null, null, null, null, null, 'gd', 'gz', 'th', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1081', '18071173666', '伊人浅笑最倾城', '8787', '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '湖北省鄂州市鄂城区吴都公馆', '吴都公馆99号档口', '2016-03-24 13:56:26', '1459412797121606670.jpg', '1', '2016-03-24 14:08:26', '伊人浅笑最倾城', '2016-03-24 14:08:26', '福建省厦门市海沧区福建省厦门市海沧区厦门大厦11楼104', '0', '湖北省', '鄂州市', '鄂城区', '2016-03-25 15:36:58', '0', null, null, null, null, '福建省', '厦门市', '海沧区', null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1082', '18071173777', 'wenham', '8788', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '浙江省宁波市堇州区枫红大厦', null, '2016-03-25 11:26:57', null, '1', null, null, null, null, null, '浙江省', '宁波市', '堇州区', null, '0', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1086', '15920916669', '刘积训', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区华景新城菜市场', '你好', '2016-03-25 15:54:24', '1459242779752868177.jpg', '1', '2016-03-29 17:26:20', '刘积训', '2016-03-29 17:26:20', '北京市 密云县测试Android申请修改地址', '0', '广东省', '广州市', '天河区', '2016-03-29 17:22:19', null, null, null, null, null, '北京市', ' ', '密云县', '13901369174', '刘刘', '华景新城档口', '0');
INSERT INTO t_tlr_mgmt VALUES ('1088', '15920916672', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-03-29 11:22:30', null, '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1089', '13427664788', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '湖北省咸宁市嘉鱼县地址', null, '2016-03-29 14:35:02', null, '0', null, null, null, null, null, '湖北省', '咸宁市', '嘉鱼县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1090', '15876918131', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '湖北省咸宁市嘉鱼县地址', null, '2016-03-29 14:39:30', null, '0', null, null, null, null, null, '湖北省', '咸宁市', '嘉鱼县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1091', '13427664781', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-03-29 14:46:28', null, '0', null, null, null, null, null, '湖北省', '咸宁市', '嘉鱼县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1092', '13877676761', '要让他人', '1111', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '新增企业1', '2016-03-30 09:41:38', '37451e5f-4c99-4e82-8337-57f4f825488f.png', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1093', '13877676766', '快回家', '223423423', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '新增企业2', '2016-03-30 09:58:03', 'e749e4ab-e8e0-4a49-ab61-a2da0828b04c.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1094', '', '', '335520139', '1', 'd41d8cd98f00b204e9800998ecf8427e', 'N', null, '测试店铺1', '2016-03-30 10:00:56', '594d5db0-19bc-415f-954e-d48fb8dfefe9.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1095', '13877676766', '研讨会', '4545434', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '新增企业3', '2016-03-30 10:21:23', '2f3096fc-8e8e-4246-aecc-17c12209ba33.jpg', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1096', '13877676766', '也太过分', '23', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '新增自营店铺1', '2016-03-30 10:56:40', '2da25800-6748-421e-b1c0-482653c107c3.jpg', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1097', '15920916661', null, null, '0', 'a4b9b3c1478e933a0098499a2bfcd5d0', 'N', '北京市 密云县测试Android收货地址', null, '2016-03-30 14:32:20', null, '0', null, null, null, null, null, '北京市', ' ', '密云县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1098', '15920916662', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市 密云县测试Android注册买家', null, '2016-03-30 15:23:57', null, '1', null, null, null, null, null, '北京市', ' ', '密云县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1099', '15920916654', null, null, '1', '670b14728ad9902aecba32e22fa4f6bd', 'N', '', null, '2016-03-30 15:26:47', null, '0', '2016-03-30 15:57:07', '', '2016-03-30 15:57:07', null, null, '北京市', ' ', '密云县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1100', '15920916001', '刘积训', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市海珠区华夏新菜市场', 'A12', '2016-03-31 10:51:33', '1459503365029486526.jpg', '1', null, null, null, null, null, '广东省', '广州市', '海珠区', null, null, null, null, null, null, null, null, null, '15920916679', '刘积训', 'A127', '0');
INSERT INTO t_tlr_mgmt VALUES ('1101', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:34:06', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1102', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:42:28', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1103', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:44:26', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1104', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:51:16', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1105', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:57:07', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1106', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 11:58:47', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1107', '', '', '', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '', '2016-03-31 12:01:35', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1108', '13838277849', null, null, '0', 'e35cf7b66449df565f93c607d5a81d09', 'N', '广东省广州市天河区guang ', null, '2016-04-01 09:45:14', null, '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1109', '13877676765', '东莞市分公司和', '5345', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '测试1', '2016-04-01 11:22:41', 'b987250d-d8c7-4afc-a025-567998d9a1ce.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1110', '13877676765', '东莞市分公司和', '5345', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '测试1', '2016-04-01 11:22:36', 'a6fc0dc1-927d-4098-86f3-52ca10745eb9.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1111', '13877676764', '好多个', '6546', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '新增测试企业', '2016-04-01 11:40:38', 'a9238bcb-fbf7-4e8d-9a91-ddf1293d63ba.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1113', '18071173333', '喜羊羊', '5546', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区', null, '2016-04-05 10:36:17', null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '18802093449', '吴世桢', null, null);
INSERT INTO t_tlr_mgmt VALUES ('1114', '13877676763', '法国人', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '4-5测试企业1', '2016-04-05 14:14:50', '9bc97c19-ef8c-47b4-be17-298c7759c243.png', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1115', '13877676762', '高德', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '天街13号', '4-5测试企业2', '2016-04-05 14:29:00', 'abfd1dd6-17c0-4245-bf8f-cb027c2fdf30.png', null, null, null, null, null, null, '广东省', '广州市', '南沙区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1117', '13877676760', '好菜', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '南街66号', '4-5新增测试企业4', '2016-04-05 15:43:05', 'c9861dbf-27be-4f64-812d-155f0921e7e8.png', null, null, null, null, null, null, '山东省', '滨州市', '无棣县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1118', '13877676759', '美好的', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '东街33号', '4-5新增批发商1', '2016-04-05 15:45:46', '965544e0-79eb-405b-84f1-11d3f3100260.png', null, null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1119', '13877676767', '挂的第三方', '0420', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '西街33号', '4-5新增自营店1', '2016-04-05 15:48:09', '0d002feb-ce20-4d28-899b-d80bfb8b04ad.png', null, null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1120', '15920916671', '刘积训', '0420', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '测试地址', '测试店铺0001', '2016-04-05 17:10:11', '6154865b-7a70-4120-84f5-4d668ea74da5.jpg', '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1121', '18071171111', '梧桐', null, '1', '48818e012b89beedb3b16ab1a805fa9d', 'N', '吴中大厦', '世纪天成', '2016-04-05 18:02:16', '1bc15480-9d01-4fc4-b99b-7fb3ba4149c4.jpg', null, null, null, null, null, null, '江苏省', '苏州市', '吴中区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1122', '13877676768', '挂的第三方', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', 'fadfad', '测试6', '2016-04-05 18:45:20', null, null, null, null, null, null, null, '广东省', '深圳市', '宝安区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1123', '13877676769', '东莞市分公司和', '52312321', '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '富士达发生的', '而伟大是飞洒的', '2016-04-05 18:53:28', null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1124', '15920916601', '刘积训', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '测试地址', '测试帐号07', '2016-04-06 09:54:28', 'cf41c101-a191-4ff5-9883-0db7f6e3a983.jpg', null, null, null, null, null, null, '广东省', '广州市', '海珠区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1125', '15920916602', '刘积训', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '测试地址', '测试账号1', '2016-04-06 10:14:43', '6c10f450-cd4e-47dc-88b4-ffc93af234fc.png', null, null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1126', '13263065267', '刘邦', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '么么啊的', '2016-04-06 10:20:49', '70ad5b9d-1423-4fb1-9630-858afb02cd90.jpg', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1128', '13427664780', null, null, '1', 'c33367701511b4f6020ec61ded352059', 'N', '', null, '2016-04-06 10:50:16', null, '1', null, null, null, null, null, '江西省', '新余市', '渝水区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1129', '13877676771', '东莞市分公司和', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '富家凹看来你嘎达', '4-6测试企业1', '2016-04-06 11:09:17', '0198f851-06ec-4200-acf9-ff8f012f1c2f.png', '1', null, null, null, null, null, '吉林省', '四平市', null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1130', '15974740719', '张飞', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', null, '啦啦啦', '2016-04-06 11:22:57', 'bd9296cb-3fd3-4859-bee3-c5783852446b.jpg', '1', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1131', '15920916605', '刘积训', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '测试地址01', '测试企业08', '2016-04-06 11:46:47', '7500c5a0-aab7-4e13-919a-629ecd6ebfe8.png', '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1132', '15876918137', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-04-06 11:53:40', null, '0', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1133', '13808873470', '姚迪', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '九龙镇', '广州科渥菲投资管理中心（有限合伙）', '2016-04-06 11:59:44', '758ddef1-73b2-4c2e-8414-2748d0d834f8.jpg', '1', null, null, null, null, null, '广东省', '广州市', '增城市', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1134', '15876918138', null, null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '', null, '2016-04-06 13:46:20', null, '0', null, null, null, null, null, '广东省', '潮州市', '潮安县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1135', '13877676772', '昂纳', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '发发的个', '4-6新增', '2016-04-06 14:29:06', 'e04ecadf-6c9e-407e-bd23-828550408dd2.jpg', null, null, null, null, null, null, '浙江省', '杭州市', '西湖区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1136', '12345678', '么么哒', null, '2', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, '2016-04-28 20:22:51', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, '18812093449', null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1137', '15920916606', '刘积训', null, '1', 'e807f1fcf82d132f9bb018ca6738a19f', 'N', '中关村东路66号1号楼2层商业3-055', '北京量生钱网络科技有限公司', '2016-04-07 09:52:00', 'e7134750-bf23-4904-b7b2-a1c2e22176d5.png', null, null, null, null, null, null, '北京市', '海淀区', null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1138', '13877676789', '想飞上天会', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '把大哥温哥华双方各', '4-7测试企业1', '2016-04-07 11:43:05', '952bfda1-cc79-4445-bd2e-b9195366fabf.png', null, null, null, null, null, null, '浙江省', '杭州市', '西湖区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1142', '18802093449', '许鸿桂', null, '0', 'c33367701511b4f6020ec61ded352059', 'N', null, null, '2016-04-07 15:06:17', '1460015507675878034.JPG', '1', '2016-04-07 16:51:39', '许鸿桂', '2016-04-07 16:51:39', null, '0', null, null, null, '2016-04-07 16:35:09', null, null, null, null, null, null, null, null, null, '吴同', null, '0');
INSERT INTO t_tlr_mgmt VALUES ('1143', '15920916600', '刘积训', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '华景新城189号', '测试店铺-0408', '2016-04-08 09:13:02', 'cc693157-bd8e-4725-a13b-56d997b7a543.png', '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1145', '18651650542', '噶打法的', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '是四分公司非', '4-8新增企业2', '2016-04-08 10:56:38', 'fcfb05d7-78c9-4ce5-a8bc-89163263bcd6.png', '1', null, null, null, null, null, '福建省', '', null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1146', '13699747407', 'asda', null, '1', 'e10adc3949ba59abbe56e057f20f883e', 'N', '123123', '1231', '2016-04-08 11:00:57', '63368967-dc89-4474-89fb-77596ad9b89c.jpg', '1', null, null, null, null, null, '浙江省', '杭州市', '建德市', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1148', '13427664785', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省惠州市博罗县七星岩', null, '2016-04-08 11:13:55', null, '1', null, null, null, null, null, '广东省', '惠州市', '博罗县', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1149', '18520768637', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '重庆市 永川市11111111', null, '2016-04-08 11:14:09', null, '1', null, null, null, null, null, '重庆市', ' ', '永川市', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1150', '15920916679', '刘积训', null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市 密云县测试账户地址', 'A12', '2016-04-08 11:44:32', '1460087228147564917.jpg', '1', null, null, null, null, null, '北京市', ' ', '密云县', null, null, null, null, null, null, null, null, null, '15920916679', '刘积训', 'A12', '0');
INSERT INTO t_tlr_mgmt VALUES ('1151', '15920911234', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '北京市 密云县测试地址', null, '2016-04-08 11:55:42', '1460087805389473683.jpg', '1', null, null, null, null, null, '北京市', ' ', '密云县', null, null, null, null, null, null, null, null, null, '15920911234', '刘积训', 'A12', '0');
INSERT INTO t_tlr_mgmt VALUES ('1152', '18820775258', null, null, '0', 'e75960e75243e37494fa264c305d2416', 'N', '广东省广州市海珠区客村正大街', null, '2016-04-08 12:40:45', null, '1', null, null, null, null, null, '广东省', '广州市', '海珠区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1153', '13178871113', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区黄埔大道76号', null, '2016-04-08 13:42:11', '1460096974659358319.jpg', '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, '13178871113', '黄烟灰', '帅辉靚菜档', '0');
INSERT INTO t_tlr_mgmt VALUES ('1154', '13412345678', null, null, '0', 'da2845722d40ae8744dde37ab52d19b5', 'N', '广东省广州市天河区华景软件园', null, '2016-04-08 15:47:32', null, '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1155', '13427664789', null, null, '0', '77ffd211e788db1e175c85985c0fa966', 'N', '广东省广州市天河区中山大道西89', null, '2016-04-08 15:54:04', null, '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO t_tlr_mgmt VALUES ('1156', '13427664790', null, null, '0', 'e10adc3949ba59abbe56e057f20f883e', 'N', '广东省广州市天河区中山大道西89号', null, '2016-04-08 15:55:24', null, '1', null, null, null, null, null, '广东省', '广州市', '天河区', null, null, null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `useraccount`
-- ----------------------------
DROP TABLE IF EXISTS `useraccount`;
CREATE TABLE `useraccount` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '支付管理-用户账户表主键',
  `account` char(20) DEFAULT NULL COMMENT '账号，按一定规则给一个唯一账号，建议与用户主键做组合索引',
  `idUser` int(11) DEFAULT NULL COMMENT '用户主键',
  `balance` decimal(16,2) DEFAULT NULL COMMENT '账户余额，账户总余额=账户余额+收益金额',
  `availablemoney` decimal(16,2) DEFAULT NULL COMMENT '可用款余额，可用款交易类型为充值，交易状态为支付成功的才是可用款，收益全部都是可用款，可用款总额=审核通过后的账户可用款+收益金额',
  `notavailablemoney` decimal(16,2) DEFAULT NULL COMMENT '不可用款，就是交易状态为：待审核的，交易类型为充值的都是不可用款',
  `isSetpassword` char(1) DEFAULT NULL COMMENT '是否设置交易密码，Y=已设置，N=未设置',
  `paypassword` varchar(100) DEFAULT NULL COMMENT '交易密码',
  `creationtime` datetime DEFAULT NULL COMMENT '创建账户时间',
  `setpaypwdtime` datetime DEFAULT NULL COMMENT '设置交易密码时间',
  `modifypaypwdtime` datetime DEFAULT NULL COMMENT '修改交易密码时间',
  `upmodifypaypwdtime` datetime DEFAULT NULL COMMENT '上次修改交易密码时间',
  `isfrozen` char(1) DEFAULT NULL COMMENT '是否冻结,Y=冻结，N=未冻结',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标识',
  `back1` char(2) DEFAULT NULL COMMENT '预留字段1',
  `back2` char(2) DEFAULT NULL COMMENT '预留字段2',
  `back3` varchar(30) DEFAULT NULL COMMENT '预留字段3',
  `back4` varchar(50) DEFAULT NULL COMMENT '预留字段4',
  `back5` varchar(16) DEFAULT NULL COMMENT '预留字段5',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=100039 DEFAULT CHARSET=utf8 COMMENT='支付管理-用户账户表useraccount';

-- ----------------------------
-- Records of useraccount
-- ----------------------------
INSERT INTO useraccount VALUES ('100001', null, '1007', '200000.00', '100000.00', '100000.00', 'Y', 'e10adc3949ba59abbe56e057f20f883e', null, null, null, null, 'N', null, null, null, null, null, null, null);
INSERT INTO useraccount VALUES ('100002', '12132344123123', '1000', '87658.76', '50000.00', '50000.00', 'Y', 'e3ceb5881a0a1fdaad01296d7554868d', '2016-01-27 16:30:54', '2016-03-28 09:49:38', null, null, 'N', '2016-01-27 16:31:00', '0', null, null, null, null, null);
INSERT INTO useraccount VALUES ('100008', '', '1025', '0.00', '0.00', '0.00', 'Y', 'd5d099bc9964551f7dbd97a0f68876ca', '2016-03-14 11:19:27', '2016-03-14 11:21:41', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-14 11:19:27', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100009', '', '1079', '0.00', '0.00', '0.00', 'Y', 'e10adc3949ba59abbe56e057f20f883e', '2016-03-14 14:25:04', '2016-03-14 14:25:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-14 14:25:04', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100010', '', '1077', '8220.93', '0.00', '0.00', 'Y', 'e10adc3949ba59abbe56e057f20f883e', '2016-03-16 12:01:31', '2016-03-16 12:01:31', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-16 12:01:31', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100012', '1086684111', '1086', '0.07', '0.00', '0.00', 'Y', 'e3ceb5881a0a1fdaad01296d7554868d', '2016-03-25 15:54:24', '2016-03-25 18:07:02', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-25 15:54:24', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100013', '1087387002', '1087', '0.00', '0.00', '0.00', 'N', '', '2016-03-29 11:13:34', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-29 11:13:34', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100014', '1088624712', '1088', '0.00', '0.00', '0.00', 'N', '', '2016-03-29 11:22:30', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-29 11:22:30', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100015', '1089111386', '1089', '0.00', '0.00', '0.00', 'N', '', '2016-03-29 14:35:02', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-29 14:35:02', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100016', '1090119601', '1090', '0.00', '0.00', '0.00', 'N', '', '2016-03-29 14:39:30', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-29 14:39:30', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100017', '1091226085', '1091', '0.00', '0.00', '0.00', 'N', '', '2016-03-29 14:46:28', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-29 14:46:28', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100018', '1097199760', '1097', '0.00', '0.00', '0.00', 'N', '', '2016-03-30 14:32:20', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-30 14:32:20', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100019', '1098312381', '1098', '0.00', '0.00', '0.00', 'N', '', '2016-03-30 15:23:57', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-30 15:23:57', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100020', '1099653573', '1099', '0.00', '0.00', '0.00', 'N', '', '2016-03-30 15:26:47', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-30 15:26:47', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100021', '1100452154', '1100', '0.02', '0.00', '0.00', 'Y', '670b14728ad9902aecba32e22fa4f6bd', '2016-03-31 10:51:33', '2016-03-31 11:22:55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-03-31 10:51:33', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100022', '1108776538', '1108', '0.00', '0.00', '0.00', 'N', '', '2016-04-01 09:45:14', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-01 09:45:14', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100023', '1116745925', '1116', '0.00', '0.00', '0.00', 'N', '', '2016-04-05 15:10:36', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-05 15:10:36', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100024', '1127411534', '1127', '0.00', '0.00', '0.00', 'N', '', '2016-04-06 10:32:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-06 10:32:04', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100025', '1128456504', '1128', '0.00', '0.00', '0.00', 'N', '', '2016-04-06 10:50:16', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-06 10:50:16', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100026', '1132738336', '1132', '0.00', '0.00', '0.00', 'N', '', '2016-04-06 11:53:40', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-06 11:53:40', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100027', '1134839667', '1134', '0.00', '0.00', '0.00', 'N', '', '2016-04-06 13:46:20', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-06 13:46:20', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100028', '1142502856', '1142', '0.00', '0.00', '0.00', 'Y', 'c33367701511b4f6020ec61ded352059', '2016-04-07 15:06:17', '2016-04-07 16:49:54', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-07 15:06:17', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100029', '1147571063', '1147', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 11:06:50', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 11:06:50', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100030', '1148453852', '1148', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 11:13:55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 11:13:55', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100031', '1149359850', '1149', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 11:14:09', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 11:14:09', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100032', '1150242580', '1150', '0.00', '0.00', '0.00', 'Y', 'ede6d15f18fa03e426874e2a716cf8d8', '2016-04-08 11:44:32', '2016-04-08 11:50:21', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 11:44:32', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100033', '1151492895', '1151', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 11:55:42', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 11:55:42', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100034', '1152441797', '1152', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 12:40:45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 12:40:45', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100035', '1153175745', '1153', '0.00', '0.00', '0.00', 'Y', 'e10adc3949ba59abbe56e057f20f883e', '2016-04-08 13:42:11', '2016-04-08 15:35:20', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 13:42:11', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100036', '1154181575', '1154', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 15:47:32', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 15:47:32', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100037', '1155461634', '1155', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 15:54:04', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 15:54:04', '0', '', '', '', '', '');
INSERT INTO useraccount VALUES ('100038', '1156554884', '1156', '0.00', '0.00', '0.00', 'N', '', '2016-04-08 15:55:24', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'N', '2016-04-08 15:55:24', '0', '', '', '', '', '');

-- ----------------------------
-- Table structure for `userscore`
-- ----------------------------
DROP TABLE IF EXISTS `userscore`;
CREATE TABLE `userscore` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统管理-用户评分表主键',
  `idScore` int(11) DEFAULT NULL COMMENT '评分人主键',
  `orderNo` char(20) DEFAULT NULL COMMENT '订单编号',
  `idcommodity` int(11) DEFAULT NULL COMMENT '商品主键',
  `idlevel` int(11) DEFAULT NULL COMMENT '商品级别主键',
  `commodity` varchar(20) DEFAULT NULL COMMENT '商品名称',
  `score` varchar(11) DEFAULT NULL COMMENT '评分',
  `originaddress` varchar(20) DEFAULT NULL COMMENT '地址 ',
  `ts` char(19) DEFAULT NULL COMMENT '时间戳',
  `dr` int(11) DEFAULT NULL COMMENT '删除标志',
  `back1` varchar(50) DEFAULT NULL COMMENT '预留字段1',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB AUTO_INCREMENT=1009 DEFAULT CHARSET=utf8 COMMENT='系统管理-用户评分表userscore';

-- ----------------------------
-- Records of userscore
-- ----------------------------
INSERT INTO userscore VALUES ('1006', '1077', '1027', '1000', '1001', '金针菇', '3', null, '2016-04-08 17:07:52', '0', null);
INSERT INTO userscore VALUES ('1007', '1077', '1027', '1000', '1000', '金针菇', '2', null, '2016-04-08 17:07:58', '0', null);
INSERT INTO userscore VALUES ('1008', '1077', '1028', '1000', '1000', '金针菇', '2.40', null, '2016-04-08 17:11:23', '0', null);

-- ----------------------------
-- Table structure for `usertoken`
-- ----------------------------
DROP TABLE IF EXISTS `usertoken`;
CREATE TABLE `usertoken` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户令牌表',
  `idUser` int(11) DEFAULT NULL COMMENT '用户表主键',
  `token` varchar(100) DEFAULT NULL COMMENT '令牌',
  `validtime` datetime DEFAULT NULL COMMENT '验证时间',
  `dr` int(2) DEFAULT NULL,
  `ts` varchar(19) DEFAULT NULL,
  PRIMARY KEY (`idNumber`)
) ENGINE=MyISAM AUTO_INCREMENT=1491 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertoken
-- ----------------------------
INSERT INTO usertoken VALUES ('1000', '1038', 'e5217148a0db4b8fb47c4a9542ca2e7adLo7gt', '2016-04-07 13:01:06', '0', '2016-04-06 16:11:19');
INSERT INTO usertoken VALUES ('1001', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-06 16:28:43');
INSERT INTO usertoken VALUES ('1002', '1128', '245d6db34e734cbc90fe91f0dc3a455d4ib7bv', '2016-04-07 09:34:15', '0', '2016-04-06 16:46:59');
INSERT INTO usertoken VALUES ('1003', '1000', '6e0e42385b3344019d7c2e711bf1f791K5hY6x', '2016-04-07 10:11:39', '0', '2016-04-06 16:49:02');
INSERT INTO usertoken VALUES ('1004', '1066', 'e4cb614e44634e288c05eb1779b2be2aG1L4Kf', '2016-04-07 09:35:26', '0', '2016-04-06 17:59:26');
INSERT INTO usertoken VALUES ('1005', '0', 'a03bafd69aa5445bb355ac3b3002f806yBcLor', '2016-04-07 14:52:51', '0', '2016-04-07 10:13:11');
INSERT INTO usertoken VALUES ('1006', '1100', '0a432042009049b8be78dd65e963efa9myNCbF', '2016-04-07 15:00:03', '0', '2016-04-07 12:53:56');
INSERT INTO usertoken VALUES ('1007', '1131', '9925a96e75c04f42b634a385c1aef468Rbg6wN', '2016-04-07 14:50:50', '0', '2016-04-07 14:50:50');
INSERT INTO usertoken VALUES ('1008', '1100', '579085674fa04f5795b55dd7325251f9HmCw9k', '2016-04-07 15:03:32', '0', '2016-04-07 15:03:32');
INSERT INTO usertoken VALUES ('1009', '1100', '729cf099c91e4317b86a4956ba5180fdTQBgLU', '2016-04-07 15:03:32', '0', '2016-04-07 15:03:32');
INSERT INTO usertoken VALUES ('1010', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:03:32');
INSERT INTO usertoken VALUES ('1011', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:04:13');
INSERT INTO usertoken VALUES ('1012', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:06:41');
INSERT INTO usertoken VALUES ('1013', '1100', 'a477dba4d39d46028e5e9b35dd0cdba8vd5bz5', '2016-04-07 15:07:26', '0', '2016-04-07 15:07:26');
INSERT INTO usertoken VALUES ('1014', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:08:38');
INSERT INTO usertoken VALUES ('1015', '1100', '3929211ad19c48c88ec590849fe75444VR70hI', '2016-04-07 15:10:16', '0', '2016-04-07 15:10:16');
INSERT INTO usertoken VALUES ('1016', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:10:34');
INSERT INTO usertoken VALUES ('1017', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:13:02');
INSERT INTO usertoken VALUES ('1018', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:14:26');
INSERT INTO usertoken VALUES ('1019', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:15:01');
INSERT INTO usertoken VALUES ('1020', '1100', '52bc84d1bc744d7a987c56538bb6155fYQz0Iz', '2016-04-07 15:16:15', '0', '2016-04-07 15:16:15');
INSERT INTO usertoken VALUES ('1021', '1100', '71e8c6fff895402c9d460243839cc98fUq4pqT', '2016-04-07 15:20:09', '0', '2016-04-07 15:20:09');
INSERT INTO usertoken VALUES ('1022', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:26:16');
INSERT INTO usertoken VALUES ('1023', '1100', '786935f2d6e64d21a810c789c49d5ee493CDgF', '2016-04-07 15:28:45', '0', '2016-04-07 15:28:45');
INSERT INTO usertoken VALUES ('1024', '1100', '1f7ba5b200a847d5826edff5de145418XHdX5g', '2016-04-07 15:29:19', '0', '2016-04-07 15:29:19');
INSERT INTO usertoken VALUES ('1025', '1100', '93e366dbd1634de997431830447288910QByTt', '2016-04-07 15:30:21', '0', '2016-04-07 15:30:21');
INSERT INTO usertoken VALUES ('1026', '1100', '7dff7bc9f5e048a8b3492c9910094d582ol2t1', '2016-04-07 15:30:44', '0', '2016-04-07 15:30:44');
INSERT INTO usertoken VALUES ('1027', '1100', '29a2cf9642844f6e9b1bfdce793969846a5x41', '2016-04-07 15:31:05', '0', '2016-04-07 15:31:05');
INSERT INTO usertoken VALUES ('1028', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:32:04');
INSERT INTO usertoken VALUES ('1029', '1100', '930e781539534a608dc368bf4b28cd5fBXUc2a', '2016-04-07 15:32:58', '0', '2016-04-07 15:32:58');
INSERT INTO usertoken VALUES ('1030', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:33:00');
INSERT INTO usertoken VALUES ('1031', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:33:55');
INSERT INTO usertoken VALUES ('1032', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:34:30');
INSERT INTO usertoken VALUES ('1033', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:35:06');
INSERT INTO usertoken VALUES ('1034', '1100', '1dde1f10f38e4207b75db7853c9dfb88v4zE2L', '2016-04-07 15:35:48', '0', '2016-04-07 15:35:48');
INSERT INTO usertoken VALUES ('1035', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:36:12');
INSERT INTO usertoken VALUES ('1036', '1100', '1855b45287c946389344d6c009a8287bxoAqxh', '2016-04-07 15:36:47', '0', '2016-04-07 15:36:47');
INSERT INTO usertoken VALUES ('1037', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:36:58');
INSERT INTO usertoken VALUES ('1038', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:37:33');
INSERT INTO usertoken VALUES ('1039', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:38:32');
INSERT INTO usertoken VALUES ('1040', '1100', '6172093fce0d46cebeb7344fd5db83dfCw6m86', '2016-04-07 15:39:10', '0', '2016-04-07 15:39:10');
INSERT INTO usertoken VALUES ('1041', '1100', 'abf6f42bea7c4bc59ddbae93e5dee596igeP6r', '2016-04-07 15:39:25', '0', '2016-04-07 15:39:25');
INSERT INTO usertoken VALUES ('1042', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:40:13');
INSERT INTO usertoken VALUES ('1043', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:41:21');
INSERT INTO usertoken VALUES ('1044', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:44:17');
INSERT INTO usertoken VALUES ('1045', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:47:50');
INSERT INTO usertoken VALUES ('1046', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:49:27');
INSERT INTO usertoken VALUES ('1047', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:51:47');
INSERT INTO usertoken VALUES ('1048', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:53:15');
INSERT INTO usertoken VALUES ('1049', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 15:54:48');
INSERT INTO usertoken VALUES ('1050', '0', 'b3dac09b89594e528be8c85bd4d7553amBWWMe', '2016-04-07 15:55:05', '0', '2016-04-07 15:55:05');
INSERT INTO usertoken VALUES ('1051', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:55:09');
INSERT INTO usertoken VALUES ('1052', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:58:24');
INSERT INTO usertoken VALUES ('1053', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 15:59:52');
INSERT INTO usertoken VALUES ('1054', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 16:00:02');
INSERT INTO usertoken VALUES ('1055', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 16:00:44');
INSERT INTO usertoken VALUES ('1056', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 16:02:08');
INSERT INTO usertoken VALUES ('1057', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 16:03:23');
INSERT INTO usertoken VALUES ('1058', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 16:04:47');
INSERT INTO usertoken VALUES ('1059', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 16:05:54');
INSERT INTO usertoken VALUES ('1060', '1142', 'cc276f090f814648992e56c442095cb5BVSfXF', '2016-04-07 16:51:04', '0', '2016-04-07 16:06:55');
INSERT INTO usertoken VALUES ('1061', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 16:07:47');
INSERT INTO usertoken VALUES ('1062', '1077', '30a388ae8f6f4eb5931946470bda18713ngrT2', '2016-04-07 16:55:06', '0', '2016-04-07 16:11:30');
INSERT INTO usertoken VALUES ('1063', '1142', 'ca66609bb8734de38011e42eb27adb8fV7nwbq', '2016-04-07 16:59:11', '0', '2016-04-07 16:59:11');
INSERT INTO usertoken VALUES ('1064', '1077', '9e25d78bf04042a892bbf32fe9714759KH5Vnq', '2016-04-07 16:59:11', '0', '2016-04-07 16:59:11');
INSERT INTO usertoken VALUES ('1065', '1142', '3f098c11e0c9446783779a7ce1336424isgFxw', '2016-04-07 16:59:26', '0', '2016-04-07 16:59:26');
INSERT INTO usertoken VALUES ('1066', '1142', '089f5e05252f4966a90460c201ef6a8fmSd8i2', '2016-04-07 16:59:34', '0', '2016-04-07 16:59:34');
INSERT INTO usertoken VALUES ('1067', '1077', '24256791c4ff4914a7da086bac2e937fcs000z', '2016-04-07 16:59:59', '0', '2016-04-07 16:59:59');
INSERT INTO usertoken VALUES ('1068', '1077', '5814e371c6ae42da9ba202e9271c245dxvI4V9', '2016-04-07 17:01:34', '0', '2016-04-07 17:01:34');
INSERT INTO usertoken VALUES ('1069', '1077', 'a75b32f4eb0148aab47037d770703c43N6kTRV', '2016-04-07 17:02:03', '0', '2016-04-07 17:02:03');
INSERT INTO usertoken VALUES ('1070', '1077', 'e5983aee76b6429084905b66f9a55207pUyLK5', '2016-04-07 17:02:35', '0', '2016-04-07 17:02:35');
INSERT INTO usertoken VALUES ('1071', '1100', '6607f4ba87f448c592ec4e2cefaf5b3fK8fDN2', '2016-04-07 17:03:48', '0', '2016-04-07 17:03:48');
INSERT INTO usertoken VALUES ('1072', '1131', '97cafb92b23c46bdaecc4e05630db6d7YuXVL6', '2016-04-07 17:04:03', '0', '2016-04-07 17:04:03');
INSERT INTO usertoken VALUES ('1073', '1077', 'f0d769686b034648af80d7d057cc920eeNoqHK', '2016-04-07 17:04:20', '0', '2016-04-07 17:04:20');
INSERT INTO usertoken VALUES ('1074', '1100', 'be53251153bf40d6b88516b65e562de9BsGb1z', '2016-04-07 17:04:24', '0', '2016-04-07 17:04:24');
INSERT INTO usertoken VALUES ('1075', '1142', 'fdb50a7f7a36440ab132d186f1ecf71145AHvr', '2016-04-07 17:05:54', '0', '2016-04-07 17:05:54');
INSERT INTO usertoken VALUES ('1076', '1077', 'dabeef63caf74aacaf55ad2b8f22a06dEftnrx', '2016-04-07 17:06:04', '0', '2016-04-07 17:06:04');
INSERT INTO usertoken VALUES ('1077', '1142', 'ae596bdafef44af9966bcb5fd1154cb3i2KWoD', '2016-04-07 17:06:31', '0', '2016-04-07 17:06:31');
INSERT INTO usertoken VALUES ('1078', '1077', '3e0b6cfdcae14fdfbe2f00e7645cce74v2q9MH', '2016-04-07 17:17:12', '0', '2016-04-07 17:17:12');
INSERT INTO usertoken VALUES ('1079', '1142', '8735d4f876a344b699b21d0eefa94451fivFbB', '2016-04-07 17:17:20', '0', '2016-04-07 17:17:20');
INSERT INTO usertoken VALUES ('1080', '1077', '2540d862655f4900b2cb46ce0591a20ebN90G4', '2016-04-07 17:18:37', '0', '2016-04-07 17:18:37');
INSERT INTO usertoken VALUES ('1081', '1142', 'c944d421299d410ba27d6e618327ebc7oiUE1Q', '2016-04-07 17:21:47', '0', '2016-04-07 17:21:47');
INSERT INTO usertoken VALUES ('1082', '1077', '91c9e9f5f9574e72a84ab4af6d8b41d7kP6Jhy', '2016-04-07 17:23:26', '0', '2016-04-07 17:23:26');
INSERT INTO usertoken VALUES ('1083', '1077', 'f59201bf97b64e5da1d1475793fd7bd9Yuhe8e', '2016-04-07 17:24:15', '0', '2016-04-07 17:24:15');
INSERT INTO usertoken VALUES ('1084', '1142', 'abba3e6384ea4b7488d50a8c7090d864U8ewCa', '2016-04-07 17:24:27', '0', '2016-04-07 17:24:27');
INSERT INTO usertoken VALUES ('1085', '1142', '1f09194a49e2461bb50324869d3cdeef3wuSwM', '2016-04-07 17:25:40', '0', '2016-04-07 17:25:40');
INSERT INTO usertoken VALUES ('1086', '1077', '860e4e2d10bc4c899d722ed5b32b5ba1M8MG16', '2016-04-07 17:26:33', '0', '2016-04-07 17:26:33');
INSERT INTO usertoken VALUES ('1087', '1142', '971ba737a26a4827a8a672c185787231Q0jd7H', '2016-04-07 17:26:35', '0', '2016-04-07 17:26:35');
INSERT INTO usertoken VALUES ('1088', '1077', 'fb2b3c69ec854b9daf873e03c9c3d541GOA28l', '2016-04-07 17:28:37', '0', '2016-04-07 17:28:37');
INSERT INTO usertoken VALUES ('1089', '1142', 'ea05d4f0c595418d927c3c89c7e7dfbcj4RW3V', '2016-04-07 17:30:00', '0', '2016-04-07 17:30:00');
INSERT INTO usertoken VALUES ('1090', '1077', '2856aecc50bc4e64951e837cd39c4666Jpyhp7', '2016-04-07 17:30:55', '0', '2016-04-07 17:30:55');
INSERT INTO usertoken VALUES ('1091', '1077', 'cbfa30a80f6f43759d3a9582aa964ce7TikH3H', '2016-04-07 17:31:50', '0', '2016-04-07 17:31:50');
INSERT INTO usertoken VALUES ('1092', '1142', '9a4bfd3044b543c2bab97dae52c174fdLkUo8h', '2016-04-07 17:31:54', '0', '2016-04-07 17:31:54');
INSERT INTO usertoken VALUES ('1093', '1077', 'fcdb1aff4a7d495993a866b4b142740b012diu', '2016-04-07 17:32:47', '0', '2016-04-07 17:32:47');
INSERT INTO usertoken VALUES ('1094', '1142', 'f696460f612d4962bd00190cd9e5ad65W97Y4h', '2016-04-07 17:33:09', '0', '2016-04-07 17:33:09');
INSERT INTO usertoken VALUES ('1095', '1077', '45909dcaf6b64121a32ebb4135d4b724RPePVt', '2016-04-07 17:34:23', '0', '2016-04-07 17:34:23');
INSERT INTO usertoken VALUES ('1096', '1142', '2bbb20fde1f04dff9195c280c35eb5a287p8Mj', '2016-04-07 17:34:25', '0', '2016-04-07 17:34:25');
INSERT INTO usertoken VALUES ('1097', '1077', 'bf07c2ed7eef45a5b2087aac61c00230kOPmQw', '2016-04-07 17:34:59', '0', '2016-04-07 17:34:59');
INSERT INTO usertoken VALUES ('1098', '1142', '482c990ad7f24f53a797c77391f18c98yFWjjh', '2016-04-07 17:34:59', '0', '2016-04-07 17:34:59');
INSERT INTO usertoken VALUES ('1099', '1077', '9facf4ca308049f2809357404e906fbch1t6A6', '2016-04-07 17:35:17', '0', '2016-04-07 17:35:17');
INSERT INTO usertoken VALUES ('1100', '1142', '56f5d6a892e14dafa3cc1a53d73853d9eEEI6y', '2016-04-07 17:35:55', '0', '2016-04-07 17:35:55');
INSERT INTO usertoken VALUES ('1101', '1142', '6f0c7bd81ed74785addf8732be415f8dz42nsr', '2016-04-07 17:37:05', '0', '2016-04-07 17:37:05');
INSERT INTO usertoken VALUES ('1102', '1077', 'b9252f63f69644dd87ebd5d9b754153b9WUxTl', '2016-04-07 17:38:29', '0', '2016-04-07 17:38:29');
INSERT INTO usertoken VALUES ('1103', '1077', '8ed3303912f4471faa33326f39985c0b9cO5n4', '2016-04-07 17:39:38', '0', '2016-04-07 17:39:38');
INSERT INTO usertoken VALUES ('1104', '1142', '5e5662ffcca04bf88a55cb9d3248ff1em93qzs', '2016-04-07 17:39:38', '0', '2016-04-07 17:39:38');
INSERT INTO usertoken VALUES ('1105', '1142', '226dbaceefb24d389e311afb2973d478o7iNH9', '2016-04-07 17:39:38', '0', '2016-04-07 17:39:38');
INSERT INTO usertoken VALUES ('1106', '1142', '088aa765baa541fbb5850b809ea154b67POk3m', '2016-04-07 17:40:00', '0', '2016-04-07 17:40:00');
INSERT INTO usertoken VALUES ('1107', '1142', '43fbe47182e04780b2fbd4942d3382de3t9g7z', '2016-04-07 17:41:40', '0', '2016-04-07 17:41:40');
INSERT INTO usertoken VALUES ('1108', '1077', 'fb0700fb611344e59dae914c8e0da9d48AsQJU', '2016-04-07 17:41:51', '0', '2016-04-07 17:41:51');
INSERT INTO usertoken VALUES ('1109', '1142', 'ba3996a1f3fc48638dbc23d120ee1483qXFgSO', '2016-04-07 17:42:41', '0', '2016-04-07 17:42:41');
INSERT INTO usertoken VALUES ('1110', '1077', 'a6acf0e1e35d41e8b1b1e51d2b66d36b2YjNX3', '2016-04-07 17:42:45', '0', '2016-04-07 17:42:45');
INSERT INTO usertoken VALUES ('1111', '1077', '39ccb507f045434f903acbda2b6e0b85S7WwCa', '2016-04-07 17:43:12', '0', '2016-04-07 17:43:12');
INSERT INTO usertoken VALUES ('1112', '1077', '764b646159ef4a55b3ed5d88ac339cc05tBUGE', '2016-04-07 17:43:15', '0', '2016-04-07 17:43:15');
INSERT INTO usertoken VALUES ('1113', '1077', '1110e00e81764743a040e0f0542aeda83X7osS', '2016-04-07 17:44:11', '0', '2016-04-07 17:44:11');
INSERT INTO usertoken VALUES ('1114', '1077', 'b6e8e4771de1478b862e53c72c976b69OyXCsV', '2016-04-07 17:45:44', '0', '2016-04-07 17:45:44');
INSERT INTO usertoken VALUES ('1115', '1142', '7275df6bc07e4c308b8bb2ed66b6c2683J2F9J', '2016-04-07 17:46:35', '0', '2016-04-07 17:46:35');
INSERT INTO usertoken VALUES ('1116', '1142', '5e63df5011464110b3807e0dc90c1bc0IooLn1', '2016-04-07 18:00:53', '0', '2016-04-07 18:00:53');
INSERT INTO usertoken VALUES ('1117', '1142', '2fbaa1c195674b55a225a8be0b0bccd3jVC36p', '2016-04-07 18:01:37', '0', '2016-04-07 18:01:37');
INSERT INTO usertoken VALUES ('1118', '1142', 'e4082bbd123943efb7a69f18602a11cbe140R1', '2016-04-07 18:03:42', '0', '2016-04-07 18:03:42');
INSERT INTO usertoken VALUES ('1119', '1142', '04d3c432cece4d09bf3550d44aa76b42wUTBqc', '2016-04-07 18:04:12', '0', '2016-04-07 18:04:12');
INSERT INTO usertoken VALUES ('1120', '1077', 'adcd5a1618154a45b5d2690c5b56a8379WNY69', '2016-04-07 18:05:03', '0', '2016-04-07 18:05:03');
INSERT INTO usertoken VALUES ('1121', '1077', '0a572347b3b041dcb8fb9fbf5d3ba5e5kz8W2T', '2016-04-07 18:08:21', '0', '2016-04-07 18:08:21');
INSERT INTO usertoken VALUES ('1122', '1058', '5ce01a03d2a340c6b12744888fbf18104UPyP2', '2016-04-07 18:08:35', '0', '2016-04-07 18:08:35');
INSERT INTO usertoken VALUES ('1123', '1100', '99a5fb65d6d04b1c9fed85283d7dfd671yI63x', '2016-04-07 18:09:27', '0', '2016-04-07 18:09:27');
INSERT INTO usertoken VALUES ('1124', '1077', '67c5228530e649f4bc572d78765249cb2UGe6n', '2016-04-08 08:48:27', '0', '2016-04-08 08:48:27');
INSERT INTO usertoken VALUES ('1125', '1077', 'b5a322aa5699492a9114ad0f5e2706baXALLQj', '2016-04-08 08:48:54', '0', '2016-04-08 08:48:54');
INSERT INTO usertoken VALUES ('1126', '1077', '1b6ba6eeeed04721872d1564122a7f1f6F6DoX', '2016-04-08 08:52:13', '0', '2016-04-08 08:52:13');
INSERT INTO usertoken VALUES ('1127', '1077', '972eeeca8661494daea7ebd425795b4eL0Pl83', '2016-04-08 08:55:33', '0', '2016-04-08 08:55:33');
INSERT INTO usertoken VALUES ('1128', '1077', '4b56ba5243a34ad0b22e5652d2af96c959JEKl', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1129', '1077', '6e8fbe9669964590ba5c5df8d2b9e2begByna2', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1130', '1077', 'a9725c1ba2b541d987d747cfcae8ce3fEk6tw4', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1131', '1077', '966b334a15324b8cb451ce9f30ba55c5yH2mR0', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1132', '1077', '0c486e060e0748c489f209c094c10ab2Y5STcr', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1133', '1077', '9f4f1ce1e56a47349a7193dfc828b2ed6Nf7f7', '2016-04-08 08:58:25', '0', '2016-04-08 08:58:25');
INSERT INTO usertoken VALUES ('1134', '1142', '8cc229da21654df6825264a1d3f7db36m14RGK', '2016-04-08 08:59:19', '0', '2016-04-08 08:59:19');
INSERT INTO usertoken VALUES ('1135', '1077', '75787c19794847b6aa0f77d5b7bc0603Dhj9ND', '2016-04-08 09:00:05', '0', '2016-04-08 09:00:05');
INSERT INTO usertoken VALUES ('1136', '1077', 'df06395978874f04bfacb11377370516jsL04p', '2016-04-08 09:01:50', '0', '2016-04-08 09:01:50');
INSERT INTO usertoken VALUES ('1137', '1077', '303e68e580644030acf62bdf8401b4b1qbspBG', '2016-04-08 09:04:06', '0', '2016-04-08 09:04:06');
INSERT INTO usertoken VALUES ('1138', '1142', '703b0d5ce3f342408c273cf51141bb131mdv9L', '2016-04-08 09:04:16', '0', '2016-04-08 09:04:16');
INSERT INTO usertoken VALUES ('1139', '1142', '16cccbe756c4478f83280afd7355faf4SVvF0w', '2016-04-08 09:07:54', '0', '2016-04-08 09:07:54');
INSERT INTO usertoken VALUES ('1140', '1077', '7a503dbc1b0c49d3b8f8fc2948eaf0daPPaxH8', '2016-04-08 09:08:51', '0', '2016-04-08 09:08:51');
INSERT INTO usertoken VALUES ('1141', '1142', 'c250aa35a3334a6d952b071e403d3a2frs12xE', '2016-04-08 09:12:14', '0', '2016-04-08 09:12:14');
INSERT INTO usertoken VALUES ('1142', '1077', '6d894ea9b24b42538a50a8aa38ddddfb04PlxP', '2016-04-08 09:14:12', '0', '2016-04-08 09:14:12');
INSERT INTO usertoken VALUES ('1143', '1142', '1ec83fbcd3b74fb6b20bd993556be260UV4HOd', '2016-04-08 09:14:38', '0', '2016-04-08 09:14:38');
INSERT INTO usertoken VALUES ('1144', '1143', '7a34aa6a62d24972b661f8183667ded8Lr6Q8e', '2016-04-08 09:14:52', '0', '2016-04-08 09:14:52');
INSERT INTO usertoken VALUES ('1145', '1077', '8311d092cc6e49218a86060e9997576fyLorX0', '2016-04-08 09:16:15', '0', '2016-04-08 09:16:15');
INSERT INTO usertoken VALUES ('1146', '1077', '4657ce6087034e04847bca08d7324f07V3QXtT', '2016-04-08 09:16:39', '0', '2016-04-08 09:16:39');
INSERT INTO usertoken VALUES ('1147', '1077', 'be033766e0344257a125777223c4acecIp796o', '2016-04-08 09:17:28', '0', '2016-04-08 09:17:28');
INSERT INTO usertoken VALUES ('1148', '1077', '882b5fcef6ca455f902521143ded2f3936tu8X', '2016-04-08 09:18:48', '0', '2016-04-08 09:18:48');
INSERT INTO usertoken VALUES ('1149', '1055', '5bae6a4fecc6409ab3517b9b8c1b1305bfPm0Y', '2016-04-08 09:18:56', '0', '2016-04-08 09:18:56');
INSERT INTO usertoken VALUES ('1150', '1077', 'e5de1a5bbaa24ae7afcf916b625056e5VgSzrw', '2016-04-08 09:19:53', '0', '2016-04-08 09:19:53');
INSERT INTO usertoken VALUES ('1151', '1077', '23b468f0f6844bfa82de3023b1c615fbmDJ5F2', '2016-04-08 09:21:03', '0', '2016-04-08 09:21:03');
INSERT INTO usertoken VALUES ('1152', '1077', '49cb67c2d439446abd3894f08dbd181bFaWeH4', '2016-04-08 09:23:44', '0', '2016-04-08 09:23:44');
INSERT INTO usertoken VALUES ('1153', '1077', 'e559a53c2ded4431a7ff94a8de0f984c8owAA3', '2016-04-08 09:24:07', '0', '2016-04-08 09:24:07');
INSERT INTO usertoken VALUES ('1154', '1077', '52534e3091f4438f913476d86ff04076ASPhyX', '2016-04-08 09:25:25', '0', '2016-04-08 09:25:25');
INSERT INTO usertoken VALUES ('1155', '1055', '10a671fcaf014638bf25e87f1104c1f14Ov53x', '2016-04-08 09:25:36', '0', '2016-04-08 09:25:36');
INSERT INTO usertoken VALUES ('1156', '1077', '1638e16df19d4c02be42d62a469090187Ju49f', '2016-04-08 09:26:31', '0', '2016-04-08 09:26:31');
INSERT INTO usertoken VALUES ('1157', '1077', 'b5fcf649fd4747ef8fa0f65f8cf4ea78hMcLgM', '2016-04-08 09:28:17', '0', '2016-04-08 09:28:17');
INSERT INTO usertoken VALUES ('1158', '1077', 'ccc3ade2b78340c1a56745cb59e65113Y0zhJv', '2016-04-08 09:29:41', '0', '2016-04-08 09:29:41');
INSERT INTO usertoken VALUES ('1159', '1055', 'fa029196ab164f6a96635f2552edbb61773w8f', '2016-04-08 09:32:57', '0', '2016-04-08 09:32:57');
INSERT INTO usertoken VALUES ('1160', '1055', 'd6a762a97df049b9b0d8e932a4953003xFfQpr', '2016-04-08 09:32:57', '0', '2016-04-08 09:32:57');
INSERT INTO usertoken VALUES ('1161', '1077', 'f59a717aa8f845edb32e4c977892ee51wzDwzn', '2016-04-08 09:32:57', '0', '2016-04-08 09:32:57');
INSERT INTO usertoken VALUES ('1162', '1055', '77ff20d60b6247639d223ce6a774df02llT1sQ', '2016-04-08 09:33:20', '0', '2016-04-08 09:33:20');
INSERT INTO usertoken VALUES ('1163', '1077', 'f4e4ff71640a4f68b8f7e60c2806fc06yEbVl3', '2016-04-08 09:34:52', '0', '2016-04-08 09:34:52');
INSERT INTO usertoken VALUES ('1164', '1077', '98f5df7601aa43c0853a10247c0eb325VRDsv8', '2016-04-08 09:35:30', '0', '2016-04-08 09:35:30');
INSERT INTO usertoken VALUES ('1165', '1100', '0825fcc4832d4b7d9a7a1060f944f360YmoWs5', '2016-04-08 09:36:27', '0', '2016-04-08 09:36:27');
INSERT INTO usertoken VALUES ('1166', '1077', '1b8387427f9d4efda018b02f2788f6e72CnoTt', '2016-04-08 09:38:30', '0', '2016-04-08 09:38:30');
INSERT INTO usertoken VALUES ('1167', '1055', '184f2d5eec1141ff858995728f7462897saRCj', '2016-04-08 09:38:34', '0', '2016-04-08 09:38:34');
INSERT INTO usertoken VALUES ('1168', '1077', '96c29eabd76249efae56498c11a180453jq06G', '2016-04-08 09:42:11', '0', '2016-04-08 09:42:11');
INSERT INTO usertoken VALUES ('1169', '1077', 'c588322648d645e0bc719074f398e2111GyN82', '2016-04-08 09:40:32', '0', '2016-04-08 09:40:32');
INSERT INTO usertoken VALUES ('1170', '1077', 'c96dd9e21fbe4d958afa3504adc2c8b9fmOcrJ', '2016-04-08 09:42:54', '0', '2016-04-08 09:42:54');
INSERT INTO usertoken VALUES ('1171', '1058', 'fdb633884538490799dd03853b6e8c49h467gK', '2016-04-08 09:43:41', '0', '2016-04-08 09:43:41');
INSERT INTO usertoken VALUES ('1172', '1055', 'b749b61252a349c7a1d5523e0c717ceczKl6dk', '2016-04-08 09:44:34', '0', '2016-04-08 09:44:34');
INSERT INTO usertoken VALUES ('1173', '1055', '492df20bc27c4ff8ba75540348579b92NtudY3', '2016-04-08 09:44:45', '0', '2016-04-08 09:44:45');
INSERT INTO usertoken VALUES ('1174', '1055', 'c6e19b541a96459f83ece5e40c1c737bg4XiDS', '2016-04-08 09:45:13', '0', '2016-04-08 09:45:13');
INSERT INTO usertoken VALUES ('1175', '1077', '6f99c6f3f1264d74ac26e33bf491faedEU2Q67', '2016-04-08 09:45:58', '0', '2016-04-08 09:45:58');
INSERT INTO usertoken VALUES ('1176', '1055', '1b47b787af0342a8b2279051fa6449f08RK48n', '2016-04-08 09:46:21', '0', '2016-04-08 09:46:21');
INSERT INTO usertoken VALUES ('1177', '1055', '3899aee0268c4c129b44039e8dc53dd9VJF5xC', '2016-04-08 09:47:21', '0', '2016-04-08 09:47:21');
INSERT INTO usertoken VALUES ('1178', '1077', '8f19d843fae9478ca63080a41f4816bb2tpToK', '2016-04-08 09:50:05', '0', '2016-04-08 09:50:05');
INSERT INTO usertoken VALUES ('1179', '1055', 'db417535a9074031bf62a89a2bde4a2f8tc04g', '2016-04-08 09:50:20', '0', '2016-04-08 09:50:20');
INSERT INTO usertoken VALUES ('1180', '1055', 'deb9d8861a74427eb67a91f33d7718fcUlIlHL', '2016-04-08 09:50:48', '0', '2016-04-08 09:50:48');
INSERT INTO usertoken VALUES ('1181', '1058', '8a027d95accc4e1388e2743e30204d92TIn3z1', '2016-04-08 09:53:24', '0', '2016-04-08 09:53:24');
INSERT INTO usertoken VALUES ('1182', '1078', '37e59c5b81f645bba11394db7fbe610c80YUjR', '2016-04-08 09:55:09', '0', '2016-04-08 09:55:09');
INSERT INTO usertoken VALUES ('1183', '1077', 'd0507b394e554b298b3a800bb6bfe33d07SK0q', '2016-04-08 09:56:14', '0', '2016-04-08 09:56:14');
INSERT INTO usertoken VALUES ('1184', '1078', '52ae1c826e5c43c4a7b2628a714b5444aFsxQ9', '2016-04-08 09:56:39', '0', '2016-04-08 09:56:39');
INSERT INTO usertoken VALUES ('1185', '1077', 'ef1abd2e20c447b3a214d8bedfce2525eEf91j', '2016-04-08 10:05:23', '0', '2016-04-08 10:05:23');
INSERT INTO usertoken VALUES ('1186', '1078', '71c92e2340b6446f84eb85575ce5512614Lw20', '2016-04-08 10:07:27', '0', '2016-04-08 10:07:27');
INSERT INTO usertoken VALUES ('1187', '1077', '9a1988e5401349059db891ee043385b13hq9y6', '2016-04-08 10:08:10', '0', '2016-04-08 10:08:10');
INSERT INTO usertoken VALUES ('1188', '1077', '06cd75e6f39d41aaa6a89a0ebac60370qYujew', '2016-04-08 10:10:55', '0', '2016-04-08 10:10:55');
INSERT INTO usertoken VALUES ('1189', '1077', 'efb12c7adde24158af9baced7a50ce808X7HqS', '2016-04-08 10:11:27', '0', '2016-04-08 10:11:27');
INSERT INTO usertoken VALUES ('1190', '1078', 'b1f1a15912d141cda38ce51da1f45798jl6FRm', '2016-04-08 10:10:22', '0', '2016-04-08 10:10:22');
INSERT INTO usertoken VALUES ('1191', '1077', '69e969fd9ca94a1a99bee3049422f5dc3Ci8p7', '2016-04-08 10:12:11', '0', '2016-04-08 10:12:11');
INSERT INTO usertoken VALUES ('1192', '1078', 'efaaff2400584fa4b4dc5ca5e12f9fd05BuHDx', '2016-04-08 10:12:12', '0', '2016-04-08 10:12:12');
INSERT INTO usertoken VALUES ('1193', '1077', '40ded1801397491d977687db93f900ee0paP1H', '2016-04-08 10:12:23', '0', '2016-04-08 10:12:23');
INSERT INTO usertoken VALUES ('1194', '1077', '10c69c0b1f7f445ca8f46ecb259fabff6jPj9a', '2016-04-08 10:15:30', '0', '2016-04-08 10:15:30');
INSERT INTO usertoken VALUES ('1195', '1077', '1f4bdbff1ccc4da48a8256115be0dde2B325Sx', '2016-04-08 10:16:04', '0', '2016-04-08 10:16:04');
INSERT INTO usertoken VALUES ('1196', '1077', '8dc0613b612a486dac045c8ada744a83an6vG7', '2016-04-08 10:19:07', '0', '2016-04-08 10:19:07');
INSERT INTO usertoken VALUES ('1197', '1078', 'c10563b3190349118be4bb5fd72108cbUjxJ7M', '2016-04-08 10:21:58', '0', '2016-04-08 10:21:58');
INSERT INTO usertoken VALUES ('1198', '1077', 'f6495e336a604364ae32e91ce18b40b98MjmtA', '2016-04-08 10:22:22', '0', '2016-04-08 10:22:22');
INSERT INTO usertoken VALUES ('1199', '1061', '9077e9f76d0c46ab85bddc75d8ee4cfe5YM5JR', '2016-04-08 10:22:52', '0', '2016-04-08 10:22:52');
INSERT INTO usertoken VALUES ('1200', '1061', 'c58ff7aff59149739c7c995f1d4c322aSU2kdR', '2016-04-08 10:23:49', '0', '2016-04-08 10:23:49');
INSERT INTO usertoken VALUES ('1201', '1143', 'fe7545a736e941b08e3d6b61e068eaaemHn3Fm', '2016-04-08 10:26:46', '0', '2016-04-08 10:26:46');
INSERT INTO usertoken VALUES ('1202', '1077', 'f18d5606283944d69efee75c138fe77dOwyIVn', '2016-04-08 10:28:07', '0', '2016-04-08 10:28:07');
INSERT INTO usertoken VALUES ('1203', '1078', '61090f7b1a584a6b8eb3f4959763b7850DXCKT', '2016-04-08 10:29:15', '0', '2016-04-08 10:29:15');
INSERT INTO usertoken VALUES ('1204', '1058', '233906b715f44cdfaaf5496c0f043131w9KtSC', '2016-04-08 10:30:56', '0', '2016-04-08 10:30:56');
INSERT INTO usertoken VALUES ('1205', '1077', '6442ba3d2d124d20880d01dcf5284c9fSlaKXM', '2016-04-08 10:36:26', '0', '2016-04-08 10:36:26');
INSERT INTO usertoken VALUES ('1206', '1077', 'a7a995afcc8649fa8479226ec535c260P15V4C', '2016-04-08 10:37:16', '0', '2016-04-08 10:37:16');
INSERT INTO usertoken VALUES ('1207', '1077', '4cb365ab49fb4aa788ae6e854239e804UJUie3', '2016-04-08 10:39:00', '0', '2016-04-08 10:39:00');
INSERT INTO usertoken VALUES ('1208', '1077', 'a5c90b81629748e48ab14a40dade24a0ri9450', '2016-04-08 10:39:00', '0', '2016-04-08 10:39:00');
INSERT INTO usertoken VALUES ('1209', '1077', 'a769f248cf9e4b9d9456bbbb2861f782WYepzT', '2016-04-08 10:39:17', '0', '2016-04-08 10:39:17');
INSERT INTO usertoken VALUES ('1210', '1077', 'f2a99a092fcd4b0fae07cac8abc454c56U8rOQ', '2016-04-08 10:40:12', '0', '2016-04-08 10:40:12');
INSERT INTO usertoken VALUES ('1211', '1077', 'b380568d27874810a2eec6378fe4b302TOD80Y', '2016-04-08 10:42:39', '0', '2016-04-08 10:42:39');
INSERT INTO usertoken VALUES ('1212', '1077', '2b3595ca3b3f422d88033399d825413dfn1KJ5', '2016-04-08 10:44:37', '0', '2016-04-08 10:44:37');
INSERT INTO usertoken VALUES ('1213', '1077', 'b663875c130e46488c1cd92c48c6dbc7496mPI', '2016-04-08 10:44:54', '0', '2016-04-08 10:44:54');
INSERT INTO usertoken VALUES ('1214', '1077', 'cf45b5fbf0244ec7bbdd796c42d439d9g2002f', '2016-04-08 10:45:01', '0', '2016-04-08 10:45:01');
INSERT INTO usertoken VALUES ('1215', '1077', 'eab66bfe9a79407ca8a1e80a03119181wi002f', '2016-04-08 10:45:42', '0', '2016-04-08 10:45:42');
INSERT INTO usertoken VALUES ('1216', '1077', 'a5781aceaf6e415c8a70f909e88b3da59PBq6I', '2016-04-08 10:49:37', '0', '2016-04-08 10:49:37');
INSERT INTO usertoken VALUES ('1217', '1058', '44608804571846c281b92082a755343d1lwreK', '2016-04-08 10:57:18', '0', '2016-04-08 10:57:18');
INSERT INTO usertoken VALUES ('1218', '1077', 'b49e69a44cbf4e889c4f197cc184ed52xuB4X1', '2016-04-08 10:57:42', '0', '2016-04-08 10:57:42');
INSERT INTO usertoken VALUES ('1219', '1077', '0134aefba3de45debcaf7745b4528ef6Jkkm69', '2016-04-08 10:58:25', '0', '2016-04-08 10:58:25');
INSERT INTO usertoken VALUES ('1220', '1077', '008b352ba156440cbad91cc4b3c889806tm7AP', '2016-04-08 11:04:00', '0', '2016-04-08 11:04:00');
INSERT INTO usertoken VALUES ('1221', '1077', '0e1e2bbb6e5a41b895a4a96c484772ccBPsvra', '2016-04-08 11:05:09', '0', '2016-04-08 11:05:09');
INSERT INTO usertoken VALUES ('1222', '1147', '9c6e19576b20457985fd488bba2fd84a71y8nJ', '2016-04-08 11:07:08', '0', '2016-04-08 11:07:08');
INSERT INTO usertoken VALUES ('1223', '1147', 'e3721294375444d987da1ba4853660deOBWYyT', '2016-04-08 11:07:26', '0', '2016-04-08 11:07:26');
INSERT INTO usertoken VALUES ('1224', '1147', '8c5b9888e77b4d2690aa37c5891bcafcpLYud6', '2016-04-08 11:08:07', '0', '2016-04-08 11:08:07');
INSERT INTO usertoken VALUES ('1225', '1077', '3e5b7f498726458fb32cabe868aed7aaeAvQ8i', '2016-04-08 11:08:59', '0', '2016-04-08 11:08:59');
INSERT INTO usertoken VALUES ('1226', '1077', 'b9df108894084617b0d78b064c7f0bd9I9kv8a', '2016-04-08 11:11:22', '0', '2016-04-08 11:11:22');
INSERT INTO usertoken VALUES ('1227', '1077', '5192326ad6764aebaac5c97db1f53906WKBsAs', '2016-04-08 11:16:21', '0', '2016-04-08 11:16:21');
INSERT INTO usertoken VALUES ('1228', '1077', '9c58d96000574ae1812f1e575c4eb970OA5RjC', '2016-04-08 11:21:44', '0', '2016-04-08 11:21:44');
INSERT INTO usertoken VALUES ('1229', '1077', 'd6d166899415436baac1a05d10ce34efEXM2V1', '2016-04-08 11:23:36', '0', '2016-04-08 11:23:36');
INSERT INTO usertoken VALUES ('1230', '1077', '944f4f9ef5744398bf31285d3e5eb83fb6Mm10', '2016-04-08 11:30:54', '0', '2016-04-08 11:30:54');
INSERT INTO usertoken VALUES ('1231', '1077', '039d2fbcae854547b835bf61e06885ebI3eswH', '2016-04-08 11:34:11', '0', '2016-04-08 11:34:11');
INSERT INTO usertoken VALUES ('1232', '1077', '866412e32bec4500b2a4a1d206837b28P0UunV', '2016-04-08 11:35:15', '0', '2016-04-08 11:35:15');
INSERT INTO usertoken VALUES ('1233', '1077', 'fb074926e1114195a2c742ea6db73a80MHjti2', '2016-04-08 11:36:26', '0', '2016-04-08 11:36:26');
INSERT INTO usertoken VALUES ('1234', '1077', '8fd423176ef24b1ab98585e193e7acb7VLvrlH', '2016-04-08 11:36:59', '0', '2016-04-08 11:36:59');
INSERT INTO usertoken VALUES ('1235', '0', '9ccd47492cca4ba6bf543b9e1a9a6926meTTmu', '2016-04-08 11:44:35', '0', '2016-04-08 11:44:35');
INSERT INTO usertoken VALUES ('1236', '0', 'e849c22857ef47c2b0ae4e4ec757476d8E2gY3', '2016-04-08 11:44:47', '0', '2016-04-08 11:44:47');
INSERT INTO usertoken VALUES ('1237', '1077', 'e2c71a15980f45918c9eda46b8fe5c64YyHhvr', '2016-04-08 11:44:56', '0', '2016-04-08 11:44:56');
INSERT INTO usertoken VALUES ('1238', '1066', '91f81a8a29ab46899df765e7669e33f1yuSk8D', '2016-04-08 11:43:22', '0', '2016-04-08 11:43:22');
INSERT INTO usertoken VALUES ('1239', '0', '5a7ee16f284b4cdc9e564e5449cf204e2hIgY8', '2016-04-08 11:43:43', '0', '2016-04-08 11:43:43');
INSERT INTO usertoken VALUES ('1240', '1066', '44694a54f71c476fa745da9b91bf60eegBaCHO', '2016-04-08 11:45:56', '0', '2016-04-08 11:45:56');
INSERT INTO usertoken VALUES ('1241', '1150', 'f08b104b3ad54cc3bea039545d7043b41U4Uvf', '2016-04-08 11:46:33', '0', '2016-04-08 11:46:33');
INSERT INTO usertoken VALUES ('1242', '1077', '7ff2f116595a4f8480fb85328cc103fdd8RH1W', '2016-04-08 11:47:33', '0', '2016-04-08 11:47:33');
INSERT INTO usertoken VALUES ('1243', '1150', '838a4eb8c33e4820a5c0c57da04ac8bf9fbntX', '2016-04-08 11:50:03', '0', '2016-04-08 11:50:03');
INSERT INTO usertoken VALUES ('1244', '1077', 'b115d47c03104546ac028972af87939eoF25s1', '2016-04-08 11:50:36', '0', '2016-04-08 11:50:36');
INSERT INTO usertoken VALUES ('1245', '1077', 'd63eae729f8d4ae791325cf8fdbbdb21hn758i', '2016-04-08 11:50:53', '0', '2016-04-08 11:50:53');
INSERT INTO usertoken VALUES ('1246', '1150', '670138dcc1f849fbb99789efa246e0c2KBj7z3', '2016-04-08 11:51:57', '0', '2016-04-08 11:51:57');
INSERT INTO usertoken VALUES ('1247', '1077', '3f5f6ea8a9904ec48fb1a20a7978ffa5cQBoC2', '2016-04-08 11:54:51', '0', '2016-04-08 11:54:51');
INSERT INTO usertoken VALUES ('1248', '1077', '0da7ae72d1644c75a75245af29f04249N0w7bE', '2016-04-08 11:55:24', '0', '2016-04-08 11:55:24');
INSERT INTO usertoken VALUES ('1249', '1151', '46328401093746d8a70e7d5560c6ef6b3zvhhu', '2016-04-08 11:56:20', '0', '2016-04-08 11:56:20');
INSERT INTO usertoken VALUES ('1250', '1077', 'af2317f470cb41b4a1bb8ee679fa83c8h7O4Ub', '2016-04-08 11:56:33', '0', '2016-04-08 11:56:33');
INSERT INTO usertoken VALUES ('1251', '1077', '829f1af24c5343a09f146f9633261493rl82Hv', '2016-04-08 11:58:47', '0', '2016-04-08 11:58:47');
INSERT INTO usertoken VALUES ('1252', '1077', '6161a6ea4e53404080d061c15d38620euMuMoi', '2016-04-08 11:59:17', '0', '2016-04-08 11:59:17');
INSERT INTO usertoken VALUES ('1253', '1077', 'b08855a7321440459253eded09ab511aB4DQfN', '2016-04-08 12:00:30', '0', '2016-04-08 12:00:30');
INSERT INTO usertoken VALUES ('1254', '1077', '0974a6f9349248fe85f22830ebe4cc7437Ddwd', '2016-04-08 12:03:38', '0', '2016-04-08 12:03:38');
INSERT INTO usertoken VALUES ('1255', '1077', '4420479e69274f49a6a1432f8a1d7da1Fk8qKe', '2016-04-08 12:02:21', '0', '2016-04-08 12:02:21');
INSERT INTO usertoken VALUES ('1256', '1077', 'c1552f1bd95a4ecb84d6fe300dd532c17FovPT', '2016-04-08 12:03:05', '0', '2016-04-08 12:03:05');
INSERT INTO usertoken VALUES ('1257', '1077', '1ed23b338b8840b0ba2493d08056bd6aes9rQo', '2016-04-08 12:04:04', '0', '2016-04-08 12:04:04');
INSERT INTO usertoken VALUES ('1258', '1077', '430f4df9bcf443dbb7fde1f90448ae3b4VobM2', '2016-04-08 12:05:23', '0', '2016-04-08 12:05:23');
INSERT INTO usertoken VALUES ('1259', '1077', '314d9136b2964cecb0dcc73ef7c7fe20fJXL3k', '2016-04-08 12:07:00', '0', '2016-04-08 12:07:00');
INSERT INTO usertoken VALUES ('1260', '1152', '0d5dbd31307543b194303ccc28306712sa8868', '2016-04-08 12:41:00', '0', '2016-04-08 12:41:00');
INSERT INTO usertoken VALUES ('1261', '1077', '2dd12f03de574493a57931fd28de93a90V12UO', '2016-04-08 12:47:01', '0', '2016-04-08 12:47:01');
INSERT INTO usertoken VALUES ('1262', '1152', '78f61f6d27254a3fa7211a4a6e79ff212xhl45', '2016-04-08 12:45:45', '0', '2016-04-08 12:45:45');
INSERT INTO usertoken VALUES ('1263', '1152', 'f417b7072d2f44dc8a33ee872ddfac36NePOv8', '2016-04-08 12:45:52', '0', '2016-04-08 12:45:52');
INSERT INTO usertoken VALUES ('1264', '1152', 'dbf38e8db9c7427db62efef7b72a10a45KIULc', '2016-04-08 12:46:00', '0', '2016-04-08 12:46:00');
INSERT INTO usertoken VALUES ('1265', '1152', 'f62fc00a5fec4bb0b80b5a678b5c8d75iMjYJE', '2016-04-08 12:46:04', '0', '2016-04-08 12:46:04');
INSERT INTO usertoken VALUES ('1266', '1152', '068865f7c5f94aeaba9dd770873512cb5pkE5v', '2016-04-08 12:46:08', '0', '2016-04-08 12:46:08');
INSERT INTO usertoken VALUES ('1267', '1152', '66761b5ade814049aaf06177a44271037eRLQv', '2016-04-08 13:02:53', '0', '2016-04-08 13:02:53');
INSERT INTO usertoken VALUES ('1268', '1077', 'e9d3cc315b6d4fe6a2f977cfb02c0cf3tvE7Y9', '2016-04-08 13:38:22', '0', '2016-04-08 13:38:22');
INSERT INTO usertoken VALUES ('1269', '1077', '97b3a85aa1034438bed609568156d78bP59V41', '2016-04-08 13:41:06', '0', '2016-04-08 13:41:06');
INSERT INTO usertoken VALUES ('1270', '1153', 'a6f19d3ff8684a019a977320a494e3d8HMNAIL', '2016-04-08 13:42:22', '0', '2016-04-08 13:42:22');
INSERT INTO usertoken VALUES ('1271', '1077', '1f9bab820b43498fb006020fbbddd7384GklTv', '2016-04-08 13:44:12', '0', '2016-04-08 13:44:12');
INSERT INTO usertoken VALUES ('1272', '1077', '157d3993fac146f5be3df5c9ad1c6870E191Ce', '2016-04-08 13:44:01', '0', '2016-04-08 13:44:01');
INSERT INTO usertoken VALUES ('1273', '1077', '94b1914676c54003a44a1cd2aa33c8340oivwX', '2016-04-08 13:44:30', '0', '2016-04-08 13:44:30');
INSERT INTO usertoken VALUES ('1274', '1077', '97e5bae9597b4d9c819982b26fd17783iB7dY4', '2016-04-08 13:44:57', '0', '2016-04-08 13:44:57');
INSERT INTO usertoken VALUES ('1275', '0', '5385046960fd472182973e47e7bde614KyIJOV', '2016-04-08 13:48:14', '0', '2016-04-08 13:48:14');
INSERT INTO usertoken VALUES ('1276', '1077', 'ce3323eb5c984ede978b7012fbd258ccBgO5O5', '2016-04-08 13:49:05', '0', '2016-04-08 13:49:05');
INSERT INTO usertoken VALUES ('1277', '1077', '7535a8a1f5304f74af8ab216f9e6ce66Fl2CQ4', '2016-04-08 13:49:11', '0', '2016-04-08 13:49:11');
INSERT INTO usertoken VALUES ('1278', '1077', 'd8615988f0d74bcb948948be03192fe02f84il', '2016-04-08 13:49:19', '0', '2016-04-08 13:49:19');
INSERT INTO usertoken VALUES ('1279', '1077', '382ca66bb45948da8673b1cb4dab4ad1pU87pO', '2016-04-08 13:53:10', '0', '2016-04-08 13:53:10');
INSERT INTO usertoken VALUES ('1280', '1077', '23f887554fa8434b834728f002db5ee3ndwva5', '2016-04-08 13:53:47', '0', '2016-04-08 13:53:47');
INSERT INTO usertoken VALUES ('1281', '1077', '8675dc1546294ddb8aa1765d821178aa8QMm4E', '2016-04-08 13:54:54', '0', '2016-04-08 13:54:54');
INSERT INTO usertoken VALUES ('1282', '1077', '3adf622779844fc9aebe4d89363e9c19qjW5zq', '2016-04-08 13:55:13', '0', '2016-04-08 13:55:13');
INSERT INTO usertoken VALUES ('1283', '1077', 'd93a3f6f0b6144e4acb84d0aa678e58cPCC6f1', '2016-04-08 13:57:34', '0', '2016-04-08 13:57:34');
INSERT INTO usertoken VALUES ('1284', '1077', '609648737e4040cbabf03ceb781a162eWXzRg3', '2016-04-08 13:59:06', '0', '2016-04-08 13:59:06');
INSERT INTO usertoken VALUES ('1285', '1077', '736ec6e1e7b64376938aad28bae5f192G7QnHx', '2016-04-08 13:58:40', '0', '2016-04-08 13:58:40');
INSERT INTO usertoken VALUES ('1286', '1077', '7d35cba37f7347b4a965703916621216cyWLvc', '2016-04-08 13:59:46', '0', '2016-04-08 13:59:46');
INSERT INTO usertoken VALUES ('1287', '1077', 'e0bcb29c7485400ebbe11ead7ca8ccf9jzsk88', '2016-04-08 14:02:25', '0', '2016-04-08 14:02:25');
INSERT INTO usertoken VALUES ('1288', '1077', '05ab2c243b814b5fb6475ec0a42bc6453hUIzf', '2016-04-08 14:06:43', '0', '2016-04-08 14:06:43');
INSERT INTO usertoken VALUES ('1289', '1077', 'a7a5e5267cf742f99f9ab9fc1a32ee38XJ8q3h', '2016-04-08 14:06:54', '0', '2016-04-08 14:06:54');
INSERT INTO usertoken VALUES ('1290', '1077', 'd425c22e4f9342478636007679490e8a6Q187I', '2016-04-08 14:09:09', '0', '2016-04-08 14:09:09');
INSERT INTO usertoken VALUES ('1291', '1077', '09d137774b66405c9e2078cc542ba7c3Ag7MRn', '2016-04-08 14:08:13', '0', '2016-04-08 14:08:13');
INSERT INTO usertoken VALUES ('1292', '1077', '8dfad99b939e4c5faed12ccc5fd558778K3XB7', '2016-04-08 14:08:56', '0', '2016-04-08 14:08:56');
INSERT INTO usertoken VALUES ('1293', '1077', 'c9ef8542b6524564a4c20b0da8b83046XI927o', '2016-04-08 14:09:24', '0', '2016-04-08 14:09:24');
INSERT INTO usertoken VALUES ('1294', '1077', '97e93ab587a74d13a0205263f92539b37P3w3o', '2016-04-08 14:09:51', '0', '2016-04-08 14:09:51');
INSERT INTO usertoken VALUES ('1295', '1077', '648294cd30764a1eba60b85c04906459VBPJE2', '2016-04-08 14:10:32', '0', '2016-04-08 14:10:32');
INSERT INTO usertoken VALUES ('1296', '1077', '767aac8bd7124cba99c6cb1545286caaeDuo2T', '2016-04-08 14:10:45', '0', '2016-04-08 14:10:45');
INSERT INTO usertoken VALUES ('1297', '1077', 'fdb5144b383e46a9b990cd312e6826a68nCtvN', '2016-04-08 14:11:03', '0', '2016-04-08 14:11:03');
INSERT INTO usertoken VALUES ('1298', '1077', '68c39c9bc801471695aeeb63d332381eHVjp6c', '2016-04-08 14:12:39', '0', '2016-04-08 14:12:39');
INSERT INTO usertoken VALUES ('1299', '1077', 'ef3842403b1a47979212924d06070a830wzucJ', '2016-04-08 14:13:09', '0', '2016-04-08 14:13:09');
INSERT INTO usertoken VALUES ('1300', '1077', 'b527f63a3c8340b6b7522985e50fa9994wM02H', '2016-04-08 14:13:21', '0', '2016-04-08 14:13:21');
INSERT INTO usertoken VALUES ('1301', '1077', '6f371b9742e64e26a0b06bfcfe9a15a6m7pcdw', '2016-04-08 14:13:49', '0', '2016-04-08 14:13:49');
INSERT INTO usertoken VALUES ('1302', '1077', '70fd8b851555469bae4515b428430e7186xhph', '2016-04-08 14:14:47', '0', '2016-04-08 14:14:47');
INSERT INTO usertoken VALUES ('1303', '1077', '447bfa70e5dc4ca281f96ccf7dc02eb2JCqcAj', '2016-04-08 14:15:33', '0', '2016-04-08 14:15:33');
INSERT INTO usertoken VALUES ('1304', '1077', '3caa6d2ee65b433ba3ee49cec9a9c85aOeGvOz', '2016-04-08 14:15:45', '0', '2016-04-08 14:15:45');
INSERT INTO usertoken VALUES ('1305', '1077', 'cd862c8fedad4999b5c559e56eec6976PP2SX8', '2016-04-08 14:17:21', '0', '2016-04-08 14:17:21');
INSERT INTO usertoken VALUES ('1306', '1077', 'd54618d3727a4eda96a183e24c14968bUUqMfE', '2016-04-08 14:18:23', '0', '2016-04-08 14:18:23');
INSERT INTO usertoken VALUES ('1307', '1077', '940b81408ba241a38660047da7dc974fNp04sY', '2016-04-08 14:20:25', '0', '2016-04-08 14:20:25');
INSERT INTO usertoken VALUES ('1308', '1077', '15c39e73c81c4bd6a9739e816f84f3a2rKzi5P', '2016-04-08 14:19:13', '0', '2016-04-08 14:19:13');
INSERT INTO usertoken VALUES ('1309', '1077', 'e60b509dc3f0414b8e78b83ec79cd4b6UijLRv', '2016-04-08 14:23:29', '0', '2016-04-08 14:23:29');
INSERT INTO usertoken VALUES ('1310', '1077', '9f2134a3e106402b85d7673b81b44fb8e473Px', '2016-04-08 14:21:56', '0', '2016-04-08 14:21:56');
INSERT INTO usertoken VALUES ('1311', '1077', 'a3afdf30f9564f6b96a079dce71d953begt26J', '2016-04-08 14:22:18', '0', '2016-04-08 14:22:18');
INSERT INTO usertoken VALUES ('1312', '1077', '48899280a1234b1ca7291f318fdd88de26576K', '2016-04-08 14:22:55', '0', '2016-04-08 14:22:55');
INSERT INTO usertoken VALUES ('1313', '1077', 'a4adbb4375b2492d8ee549d3695469fe1pg8W2', '2016-04-08 14:23:25', '0', '2016-04-08 14:23:25');
INSERT INTO usertoken VALUES ('1314', '1077', '87e0022ea483495db163545977c1da72SUp1vu', '2016-04-08 14:23:38', '0', '2016-04-08 14:23:38');
INSERT INTO usertoken VALUES ('1315', '1077', 'c276fa4b559044faa7268ebbfcbed5e76g6y47', '2016-04-08 14:23:53', '0', '2016-04-08 14:23:53');
INSERT INTO usertoken VALUES ('1316', '1077', 'cb1f20c14a7a4843b8011ca79c2c71f1M1CHp8', '2016-04-08 14:26:36', '0', '2016-04-08 14:26:36');
INSERT INTO usertoken VALUES ('1317', '1077', '17add69ac83b436eae973f6bb8b31d03B0qA7Y', '2016-04-08 14:25:04', '0', '2016-04-08 14:25:04');
INSERT INTO usertoken VALUES ('1318', '1077', 'bba797757f924211b8c62cc359966e127X74k6', '2016-04-08 14:25:20', '0', '2016-04-08 14:25:20');
INSERT INTO usertoken VALUES ('1319', '1077', '08e0a6b6f0594a2da9b8fb2b0df4a7143jF858', '2016-04-08 14:25:40', '0', '2016-04-08 14:25:40');
INSERT INTO usertoken VALUES ('1320', '1058', 'a86b0fc2265b4c899f9a298cbb25f97eWWxTCV', '2016-04-08 14:25:50', '0', '2016-04-08 14:25:50');
INSERT INTO usertoken VALUES ('1321', '1077', '30abcf735cc7403d9e0a9a49cca6cbde9zT1o5', '2016-04-08 14:27:51', '0', '2016-04-08 14:27:51');
INSERT INTO usertoken VALUES ('1322', '1077', '0333f0012b3748fcaac868028f8c2add1WnIF0', '2016-04-08 14:28:06', '0', '2016-04-08 14:28:06');
INSERT INTO usertoken VALUES ('1323', '1058', '05cb28618e1146f7bc8f35e3b38485aasnc7Kn', '2016-04-08 14:27:19', '0', '2016-04-08 14:27:19');
INSERT INTO usertoken VALUES ('1324', '1077', 'dd7735b2c01145558287a7f73c5ad868eDau2S', '2016-04-08 14:27:29', '0', '2016-04-08 14:27:29');
INSERT INTO usertoken VALUES ('1325', '1058', '64b2c3e2a4be4723870535d3a81ab527pTD543', '2016-04-08 14:28:09', '0', '2016-04-08 14:28:09');
INSERT INTO usertoken VALUES ('1326', '1153', 'dc9c4efac66b4e8a9d32768bfb0a079fY12Cws', '2016-04-08 14:28:29', '0', '2016-04-08 14:28:29');
INSERT INTO usertoken VALUES ('1327', '1058', 'b2ad5972dd7f407f954ada486d794e0652lps2', '2016-04-08 14:29:06', '0', '2016-04-08 14:29:06');
INSERT INTO usertoken VALUES ('1328', '1058', 'efef799f772743f4b725fbc57a506fb95LWEF9', '2016-04-08 14:30:56', '0', '2016-04-08 14:30:56');
INSERT INTO usertoken VALUES ('1329', '1077', '710b8d1d20a2437cace7e93d67177bdaM5JXp5', '2016-04-08 14:40:36', '0', '2016-04-08 14:40:36');
INSERT INTO usertoken VALUES ('1330', '1077', 'bbf8d3f973bf4ebd9435370f53c15638Mp0iB0', '2016-04-08 14:45:32', '0', '2016-04-08 14:45:32');
INSERT INTO usertoken VALUES ('1331', '1077', 'bf154750d19748108e48e7622ef50bb380XJ3s', '2016-04-08 14:50:36', '0', '2016-04-08 14:50:36');
INSERT INTO usertoken VALUES ('1332', '1058', 'a92205bad5d047b49adfcbde2b70c50fNGGGPR', '2016-04-08 14:50:56', '0', '2016-04-08 14:50:56');
INSERT INTO usertoken VALUES ('1333', '1077', 'fd584706eb354e3fb780ca40c5718f82kANW7d', '2016-04-08 14:53:21', '0', '2016-04-08 14:53:21');
INSERT INTO usertoken VALUES ('1334', '1058', '51d3aa03d62747f4a19b3e9472cbd7e2n0P205', '2016-04-08 14:52:27', '0', '2016-04-08 14:52:27');
INSERT INTO usertoken VALUES ('1335', '1077', '19df034b91bf4a8bae64e1deef23510cnnUfMT', '2016-04-08 14:52:33', '0', '2016-04-08 14:52:33');
INSERT INTO usertoken VALUES ('1336', '1077', 'fdbf92fcea7b4fbca0de8a2fb5da9a69VM41X6', '2016-04-08 14:53:10', '0', '2016-04-08 14:53:10');
INSERT INTO usertoken VALUES ('1337', '1058', '5a18ac6ddb87450ca5cac5c2a5f2d3a4jAvCbG', '2016-04-08 14:53:45', '0', '2016-04-08 14:53:45');
INSERT INTO usertoken VALUES ('1338', '1077', 'fbc13c9263cf4dd08b17d494c2b783db1D40Ne', '2016-04-08 14:54:04', '0', '2016-04-08 14:54:04');
INSERT INTO usertoken VALUES ('1339', '1077', '788b68fc39e745f287055ec5120a04f6l5d2g7', '2016-04-08 14:56:15', '0', '2016-04-08 14:56:15');
INSERT INTO usertoken VALUES ('1340', '1153', '08cf80bd49844e4fa0bb696b36f5ba583I4knB', '2016-04-08 14:56:52', '0', '2016-04-08 14:56:52');
INSERT INTO usertoken VALUES ('1341', '1077', '24dce2eb13714fc4b6a100d137129e82SPzc9o', '2016-04-08 14:57:19', '0', '2016-04-08 14:57:19');
INSERT INTO usertoken VALUES ('1342', '1077', '2172ac08f81c44dd9aa3fff84514c21ah1S62u', '2016-04-08 14:57:42', '0', '2016-04-08 14:57:42');
INSERT INTO usertoken VALUES ('1343', '0', '878de5e7319d49c2999e294d2ffb6c84Bo9vCb', '2016-04-08 14:57:44', '0', '2016-04-08 14:57:44');
INSERT INTO usertoken VALUES ('1344', '0', 'b0b9017913564c81bb63f084e0ea1fb05YL6o4', '2016-04-08 14:57:49', '0', '2016-04-08 14:57:49');
INSERT INTO usertoken VALUES ('1345', '1077', 'b274ed2d0c1f4c2080d9f405056e582eCYB3MP', '2016-04-08 15:00:05', '0', '2016-04-08 15:00:05');
INSERT INTO usertoken VALUES ('1346', '1077', 'cd7fc0538708415db587bbf4ae28db55SeyK5G', '2016-04-08 14:58:30', '0', '2016-04-08 14:58:30');
INSERT INTO usertoken VALUES ('1347', '1153', '5b40becee7f241a6aa9418de44445849B070V8', '2016-04-08 14:58:44', '0', '2016-04-08 14:58:44');
INSERT INTO usertoken VALUES ('1348', '1058', '146e08064f7d4fbb8d1f577adf17fb03wV9blQ', '2016-04-08 14:58:58', '0', '2016-04-08 14:58:58');
INSERT INTO usertoken VALUES ('1349', '1077', 'c506e0e7942745eb917cea95b6c20de9sUEp1j', '2016-04-08 15:00:11', '0', '2016-04-08 15:00:11');
INSERT INTO usertoken VALUES ('1350', '1077', 'df52203445a34f0f9f2a888b97e1ab2cQDEcho', '2016-04-08 15:00:12', '0', '2016-04-08 15:00:12');
INSERT INTO usertoken VALUES ('1351', '1058', 'e913fddc23514524bc4b064b590d51afMW7Quv', '2016-04-08 15:00:35', '0', '2016-04-08 15:00:35');
INSERT INTO usertoken VALUES ('1352', '1077', '8f7b48e1aef54365adc8c11da8a696b71h034M', '2016-04-08 15:01:02', '0', '2016-04-08 15:01:02');
INSERT INTO usertoken VALUES ('1353', '1153', '2c2b26773f854c50b5b0151d48cd6b52cvwBhI', '2016-04-08 15:01:12', '0', '2016-04-08 15:01:12');
INSERT INTO usertoken VALUES ('1354', '1058', 'a1f9c3c9c23844e19e14db27083259a91id7U2', '2016-04-08 15:01:28', '0', '2016-04-08 15:01:28');
INSERT INTO usertoken VALUES ('1355', '1058', '33b43376a9bb45e99bcdf941a1797cf1P1sRzB', '2016-04-08 15:02:39', '0', '2016-04-08 15:02:39');
INSERT INTO usertoken VALUES ('1356', '1077', '9a0d5a08437c4068a069a2d3f2716a0eu3fRuH', '2016-04-08 15:05:28', '0', '2016-04-08 15:05:28');
INSERT INTO usertoken VALUES ('1357', '1058', '3296c67e344a4781b495926741748af1Qryd47', '2016-04-08 15:04:05', '0', '2016-04-08 15:04:05');
INSERT INTO usertoken VALUES ('1358', '1100', '0bee2ef1a2964057bdd13c31b5ab4f9cw91qo4', '2016-04-08 15:16:48', '0', '2016-04-08 15:16:48');
INSERT INTO usertoken VALUES ('1359', '1077', '9ff57b72e323453a81b49422b37f813d4Bz3me', '2016-04-08 15:16:52', '0', '2016-04-08 15:16:52');
INSERT INTO usertoken VALUES ('1360', '1058', '777c2fe23c524d5aa63146989dfbb3d7bHvLG3', '2016-04-08 15:16:57', '0', '2016-04-08 15:16:57');
INSERT INTO usertoken VALUES ('1361', '1077', '843d35c0e9124f5d9b1771cffec37b48hBVLcj', '2016-04-08 15:18:25', '0', '2016-04-08 15:18:25');
INSERT INTO usertoken VALUES ('1362', '1058', '9ee16a1820d6443586c620441bce0ef6FBw6Hz', '2016-04-08 15:20:48', '0', '2016-04-08 15:20:48');
INSERT INTO usertoken VALUES ('1363', '1077', '4d18870687fb41ca8b195db2edaf6dd2QOw7rk', '2016-04-08 15:23:58', '0', '2016-04-08 15:23:58');
INSERT INTO usertoken VALUES ('1364', '1077', 'c25f3acffca7452b9fd59ac66e13b085remS1G', '2016-04-08 15:26:15', '0', '2016-04-08 15:26:15');
INSERT INTO usertoken VALUES ('1365', '1058', 'ea9a670619044a77ad9caf37bcc0d9b7qnIuiW', '2016-04-08 15:25:05', '0', '2016-04-08 15:25:05');
INSERT INTO usertoken VALUES ('1366', '1077', 'b0c555c54a884be597d234df7f73ca7bjJI4vz', '2016-04-08 15:27:26', '0', '2016-04-08 15:27:26');
INSERT INTO usertoken VALUES ('1367', '1077', '8efdc419c89a471b80ad46a54a10c04d0mqL02', '2016-04-08 15:29:52', '0', '2016-04-08 15:29:52');
INSERT INTO usertoken VALUES ('1368', '1077', '3b22af6dc4c644a6a8b472642ada5ec56iewWV', '2016-04-08 15:31:43', '0', '2016-04-08 15:31:43');
INSERT INTO usertoken VALUES ('1369', '1077', '80c9d9bf605642e6ad022d5f121ce4327Wa1h6', '2016-04-08 15:33:05', '0', '2016-04-08 15:33:05');
INSERT INTO usertoken VALUES ('1370', '1153', 'a2a4a6f1d36a4913bcdbf315f69659ee7EG3w9', '2016-04-08 15:34:33', '0', '2016-04-08 15:34:33');
INSERT INTO usertoken VALUES ('1371', '1077', '45adb3d1d0764f659ac7e334369bab10olO7Eo', '2016-04-08 15:34:41', '0', '2016-04-08 15:34:41');
INSERT INTO usertoken VALUES ('1372', '1077', '6d804d660666463481da521e4fc547f125XiG1', '2016-04-08 15:34:49', '0', '2016-04-08 15:34:49');
INSERT INTO usertoken VALUES ('1373', '1077', '59102aea565b48d386e8613ce2fd2e54w9HLLy', '2016-04-08 15:35:01', '0', '2016-04-08 15:35:01');
INSERT INTO usertoken VALUES ('1374', '1077', 'f1046e4131564c48b68bc258b1dbff36ugdBe7', '2016-04-08 15:35:16', '0', '2016-04-08 15:35:16');
INSERT INTO usertoken VALUES ('1375', '1077', '21d2b89662554b938f184bddfb67dbd96103SP', '2016-04-08 15:39:26', '0', '2016-04-08 15:39:26');
INSERT INTO usertoken VALUES ('1376', '1077', '98210e80fc7e472f8ff0d1878aaf9226h2047m', '2016-04-08 15:39:47', '0', '2016-04-08 15:39:47');
INSERT INTO usertoken VALUES ('1377', '1077', 'bf09280f039d4653856f5a104e187f6823uSW7', '2016-04-08 15:39:02', '0', '2016-04-08 15:39:02');
INSERT INTO usertoken VALUES ('1378', '1077', '85a15450f8244d5a8d9a87c962b110edc9qmR2', '2016-04-08 15:40:31', '0', '2016-04-08 15:40:31');
INSERT INTO usertoken VALUES ('1379', '1077', '97a1882503ee4428b13ff0931820679bQ62oe2', '2016-04-08 15:41:59', '0', '2016-04-08 15:41:59');
INSERT INTO usertoken VALUES ('1380', '1077', 'abc661a5b9d64e5fa2b79f91c889a034lKzr1h', '2016-04-08 15:43:06', '0', '2016-04-08 15:43:06');
INSERT INTO usertoken VALUES ('1381', '0', '6330de8c45ce4b999c3c45f23009f300dtavSC', '2016-04-08 15:43:13', '0', '2016-04-08 15:43:13');
INSERT INTO usertoken VALUES ('1382', '1150', 'c69a2aa66c6f469597497d5da3cd841a8fr8f5', '2016-04-08 15:43:44', '0', '2016-04-08 15:43:44');
INSERT INTO usertoken VALUES ('1383', '1150', 'f57d4d3b5eff4ce391f40e260d36771db4pY8b', '2016-04-08 15:43:56', '0', '2016-04-08 15:43:56');
INSERT INTO usertoken VALUES ('1384', '1150', 'e3cbccd27dfa409795410db77080d728739503', '2016-04-08 15:43:58', '0', '2016-04-08 15:43:58');
INSERT INTO usertoken VALUES ('1385', '1077', '07b544070c584a4f98f24520665852c6Sc3XQX', '2016-04-08 15:44:10', '0', '2016-04-08 15:44:10');
INSERT INTO usertoken VALUES ('1386', '1077', 'd86b8f76caae4bf2978c8526cd13515991cHaO', '2016-04-08 15:44:33', '0', '2016-04-08 15:44:33');
INSERT INTO usertoken VALUES ('1387', '1154', '30309c7a4bab4a8ebf5c6c813ca4ab0f8MjXK8', '2016-04-08 15:47:48', '0', '2016-04-08 15:47:48');
INSERT INTO usertoken VALUES ('1388', '1077', '8fb74f840dd14ec8b06c0ec68e1ee7d1EXJ0Nk', '2016-04-08 15:48:33', '0', '2016-04-08 15:48:33');
INSERT INTO usertoken VALUES ('1389', '1150', '88a8c98aeeed432baf7ea8022d17e240xeC5nT', '2016-04-08 15:49:40', '0', '2016-04-08 15:49:40');
INSERT INTO usertoken VALUES ('1390', '1077', 'f44fbd811b754eb5ae4242bab06a75350y7meO', '2016-04-08 15:50:15', '0', '2016-04-08 15:50:15');
INSERT INTO usertoken VALUES ('1391', '1150', '6a4e22914bc24fe1bf3d5399fe63b222jf2p6H', '2016-04-08 15:53:16', '0', '2016-04-08 15:53:16');
INSERT INTO usertoken VALUES ('1392', '1077', 'f1a1ac198860456298a86c05fa4de5891c7yPF', '2016-04-08 15:55:09', '0', '2016-04-08 15:55:09');
INSERT INTO usertoken VALUES ('1393', '1150', 'beeba1be80bd4706902b4f0b985476bb9t6lgH', '2016-04-08 15:55:51', '0', '2016-04-08 15:55:51');
INSERT INTO usertoken VALUES ('1394', '1153', '0ad15e9867574d0b871b5c3886446927v7d8l0', '2016-04-08 15:55:58', '0', '2016-04-08 15:55:58');
INSERT INTO usertoken VALUES ('1395', '1077', '4a032be2eb5643868a7ae618c49fb96bNwflq9', '2016-04-08 15:57:05', '0', '2016-04-08 15:57:05');
INSERT INTO usertoken VALUES ('1396', '1153', '9c3f4130c1564f989acf7e9c011eeffa7S0z0m', '2016-04-08 15:57:31', '0', '2016-04-08 15:57:31');
INSERT INTO usertoken VALUES ('1397', '1153', '7d9667f15e184f0bb1578359817ad59826GkRA', '2016-04-08 15:58:12', '0', '2016-04-08 15:58:12');
INSERT INTO usertoken VALUES ('1398', '1077', '79d8d5eb0c0141c1b0f97f6e67de2f407p3uYq', '2016-04-08 16:00:31', '0', '2016-04-08 16:00:31');
INSERT INTO usertoken VALUES ('1399', '1077', '6a84e1f1428947d2af9a071d7058bfb0WSIl3D', '2016-04-08 16:00:34', '0', '2016-04-08 16:00:34');
INSERT INTO usertoken VALUES ('1400', '1077', 'b80659c4ecb24af484f21feaf0942980Ob9h5C', '2016-04-08 16:00:36', '0', '2016-04-08 16:00:36');
INSERT INTO usertoken VALUES ('1401', '1077', 'beca2a3d46c04a21bfa265152861f5187b6Xsg', '2016-04-08 16:01:00', '0', '2016-04-08 16:01:00');
INSERT INTO usertoken VALUES ('1402', '1152', '06af3953c9824731a5a778757abf1ce0HyP63p', '2016-04-08 16:01:43', '0', '2016-04-08 16:01:43');
INSERT INTO usertoken VALUES ('1403', '1077', '8023e4d85db043bbbd58c402df594c72uxICd3', '2016-04-08 16:01:44', '0', '2016-04-08 16:01:44');
INSERT INTO usertoken VALUES ('1404', '1077', '492cee9756b84871b96fd97bd45e165dm87fOW', '2016-04-08 16:02:57', '0', '2016-04-08 16:02:57');
INSERT INTO usertoken VALUES ('1405', '1077', '82ca7aa367f0482cb285ac0740ea3746j3foxy', '2016-04-08 16:03:18', '0', '2016-04-08 16:03:18');
INSERT INTO usertoken VALUES ('1406', '1077', '533962a9bf5e495c89a55b262e1b9047biP8Xr', '2016-04-08 16:05:46', '0', '2016-04-08 16:05:46');
INSERT INTO usertoken VALUES ('1407', '1077', 'c5d2ef992a254a8d85faeaa670d28c58xfk0R3', '2016-04-08 16:06:12', '0', '2016-04-08 16:06:12');
INSERT INTO usertoken VALUES ('1408', '1077', '887f7ec4ef6e4fdb99a6b6d10356554e7L45LK', '2016-04-08 16:07:16', '0', '2016-04-08 16:07:16');
INSERT INTO usertoken VALUES ('1409', '1077', 'd627ff29d9c74a7e95bb1eb2a2efa337pE88zP', '2016-04-08 16:07:21', '0', '2016-04-08 16:07:21');
INSERT INTO usertoken VALUES ('1410', '1077', '8668a7f780304581b7cfbf98b21c1e2168f9DD', '2016-04-08 16:09:43', '0', '2016-04-08 16:09:43');
INSERT INTO usertoken VALUES ('1411', '1077', 'a00ea65058494199a2dffe3e840d303fXFxwd1', '2016-04-08 16:10:35', '0', '2016-04-08 16:10:35');
INSERT INTO usertoken VALUES ('1412', '1153', '9b987c0fd68f4210bb3cb91727b9629dSrB8oa', '2016-04-08 16:10:37', '0', '2016-04-08 16:10:37');
INSERT INTO usertoken VALUES ('1413', '1077', '14f2e50009984b7cb8788299d93ada9d00X637', '2016-04-08 16:14:11', '0', '2016-04-08 16:14:11');
INSERT INTO usertoken VALUES ('1414', '1077', 'b083c0dc627b4f80aa972b5274b9b4b8vRm6FD', '2016-04-08 16:14:51', '0', '2016-04-08 16:14:51');
INSERT INTO usertoken VALUES ('1415', '1077', '1bbcc5db0b244d6c91ff47ae3d3182e6603oNg', '2016-04-08 16:16:13', '0', '2016-04-08 16:16:13');
INSERT INTO usertoken VALUES ('1416', '1154', '24c0416918fd4b3497410f2a1bbdf6f48brR6c', '2016-04-08 16:19:13', '0', '2016-04-08 16:19:13');
INSERT INTO usertoken VALUES ('1417', '1077', '7c87ba52996f43509a331846f37af883B0czx5', '2016-04-08 16:20:24', '0', '2016-04-08 16:20:24');
INSERT INTO usertoken VALUES ('1418', '1077', '9ec433530c1d433ca261717ab5c51a5740tN7V', '2016-04-08 16:23:07', '0', '2016-04-08 16:23:07');
INSERT INTO usertoken VALUES ('1419', '1077', '39cbe1ee16b04a319f94b547f1054b2cX4ssPh', '2016-04-08 16:25:59', '0', '2016-04-08 16:25:59');
INSERT INTO usertoken VALUES ('1420', '1077', '79f32200feb340978a290a504556115d2ixdxp', '2016-04-08 16:30:01', '0', '2016-04-08 16:30:01');
INSERT INTO usertoken VALUES ('1421', '0', 'd3c2fb8cb53f4ae197e429b89c22d3e5y6tO5j', '2016-04-08 16:33:10', '0', '2016-04-08 16:33:10');
INSERT INTO usertoken VALUES ('1422', '1077', '319bfdaee3ef4d2faa1794944d8bb7ddctTmOC', '2016-04-08 16:34:41', '0', '2016-04-08 16:34:41');
INSERT INTO usertoken VALUES ('1423', '1077', '15c4bb1a17ac44caa7b6aee8a458fcceJ4jd3J', '2016-04-08 16:37:00', '0', '2016-04-08 16:37:00');
INSERT INTO usertoken VALUES ('1424', '1077', 'fca2d6ac20854709b718aa3efb4ea6baLxM6I8', '2016-04-08 16:47:02', '0', '2016-04-08 16:47:02');
INSERT INTO usertoken VALUES ('1425', '1153', '0f8ff7c4dfe04758a4d3d7642882df15Bx6hqz', '2016-04-08 16:47:15', '0', '2016-04-08 16:47:15');
INSERT INTO usertoken VALUES ('1426', '1152', '1047876faeab4f0d85e5c5e76c848453V5vI4N', '2016-04-08 16:47:41', '0', '2016-04-08 16:47:41');
INSERT INTO usertoken VALUES ('1427', '1077', '0bb2b5a3fd734748b6958933814af813j8gV5n', '2016-04-08 16:48:31', '0', '2016-04-08 16:48:31');
INSERT INTO usertoken VALUES ('1428', '1077', 'f58d4596a72748f8b1d2ca948a1c4c42OAMIns', '2016-04-08 16:50:31', '0', '2016-04-08 16:50:31');
INSERT INTO usertoken VALUES ('1429', '0', '146e45ff9f7b4586a24ec978fb385f6aX4tnGr', '2016-04-08 16:52:28', '0', '2016-04-08 16:52:28');
INSERT INTO usertoken VALUES ('1430', '0', 'dd365eecc6a84bdc83e79e55cd7c0cc7rQLCGg', '2016-04-08 16:52:28', '0', '2016-04-08 16:52:28');
INSERT INTO usertoken VALUES ('1431', '0', '33667282e5ed4011bb551a4d471001b2288BOJ', '2016-04-08 16:52:31', '0', '2016-04-08 16:52:31');
INSERT INTO usertoken VALUES ('1432', '0', '828b4d6545e3417f9935e0bf1af738c4Ynh7Cg', '2016-04-08 16:52:31', '0', '2016-04-08 16:52:31');
INSERT INTO usertoken VALUES ('1433', '0', 'ea623fc3c9844164806211dbb1aad7d9zYILUv', '2016-04-08 16:52:31', '0', '2016-04-08 16:52:31');
INSERT INTO usertoken VALUES ('1434', '1077', '34ef2daec1a847229c38fd4b5ba7b6f7kKqF1Y', '2016-04-08 16:55:22', '0', '2016-04-08 16:55:22');
INSERT INTO usertoken VALUES ('1435', '1077', '056cceaad5b64d598b2c8491f147bc95m394o8', '2016-04-08 16:55:36', '0', '2016-04-08 16:55:36');
INSERT INTO usertoken VALUES ('1436', '1077', 'ec66ebe1eb7b4dd286581cf58b64f3084llMzD', '2016-04-08 16:56:51', '0', '2016-04-08 16:56:51');
INSERT INTO usertoken VALUES ('1437', '1153', '0588664e8e09452485959f4631fabbaaubXavf', '2016-04-08 16:59:58', '0', '2016-04-08 16:59:58');
INSERT INTO usertoken VALUES ('1438', '1077', '84669072d0c24a43837cdbb520e0113bf7lRYq', '2016-04-08 17:00:32', '0', '2016-04-08 17:00:32');
INSERT INTO usertoken VALUES ('1439', '1077', 'ab02a938f4fd49149cd05db8021929d3Cn8YOj', '2016-04-08 17:00:42', '0', '2016-04-08 17:00:42');
INSERT INTO usertoken VALUES ('1440', '1156', '2f713d6259bc4440a93b6bed31ab3992c8ovdM', '2016-04-08 17:01:08', '0', '2016-04-08 17:01:08');
INSERT INTO usertoken VALUES ('1441', '1152', '31a7fdcf832545bb899641198798797cj4q7ri', '2016-04-08 17:01:15', '0', '2016-04-08 17:01:15');
INSERT INTO usertoken VALUES ('1442', '1077', '6c2393b1c11348d19fd7d9f34b48a0bbg7r7X0', '2016-04-08 17:04:52', '0', '2016-04-08 17:04:52');
INSERT INTO usertoken VALUES ('1443', '1077', '80a86cb623db4780a77eb618911ed9d33bRa3K', '2016-04-08 17:05:12', '0', '2016-04-08 17:05:12');
INSERT INTO usertoken VALUES ('1444', '1077', '2785876a06a74c45819f9910a80e04cfas367b', '2016-04-08 17:07:57', '0', '2016-04-08 17:07:57');
INSERT INTO usertoken VALUES ('1445', '1077', '74d91319566044a58167c3bb10adeff75ifDSQ', '2016-04-08 17:08:58', '0', '2016-04-08 17:08:58');
INSERT INTO usertoken VALUES ('1446', '1156', 'e47ad63cc3e54e3fbb8658b2137f7295Rj762p', '2016-04-08 17:09:23', '0', '2016-04-08 17:09:23');
INSERT INTO usertoken VALUES ('1447', '1077', 'dead8f9e16cb45f4bc39ec58104f8be1q4d22k', '2016-04-08 17:10:36', '0', '2016-04-08 17:10:36');
INSERT INTO usertoken VALUES ('1448', '1077', '4093a7b9b60546e29aac77805358c1d435Hp2w', '2016-04-08 17:13:33', '0', '2016-04-08 17:13:33');
INSERT INTO usertoken VALUES ('1449', '1077', '2821ee95b737405d8aef328bfafcf403TCBA8N', '2016-04-08 17:14:06', '0', '2016-04-08 17:14:06');
INSERT INTO usertoken VALUES ('1450', '1077', '877521d73c5349cb9e2778fce9b77712dk3a02', '2016-04-08 17:16:25', '0', '2016-04-08 17:16:25');
INSERT INTO usertoken VALUES ('1451', '1077', 'd99990aedcc84424901b9a4783474d34M2E8vF', '2016-04-08 17:18:43', '0', '2016-04-08 17:18:43');
INSERT INTO usertoken VALUES ('1452', '1077', '7331c6e45a664823a406913b086da4b0YHDoBb', '2016-04-08 17:19:17', '0', '2016-04-08 17:19:17');
INSERT INTO usertoken VALUES ('1453', '1077', 'b94eb2aee94c4bc6a234882fb52c172a9nd7pH', '2016-04-08 17:21:02', '0', '2016-04-08 17:21:02');
INSERT INTO usertoken VALUES ('1454', '1077', '0df384bff0d94262b3e4d982bbb933fd0jtjt4', '2016-04-08 17:21:28', '0', '2016-04-08 17:21:28');
INSERT INTO usertoken VALUES ('1455', '1152', '789efc92105a48eb9fad6542635b6238agJUv1', '2016-04-08 17:22:07', '0', '2016-04-08 17:22:07');
INSERT INTO usertoken VALUES ('1456', '1077', 'a7bfa273d8da4f21b8f898b419b782e2l75PPP', '2016-04-08 17:22:33', '0', '2016-04-08 17:22:33');
INSERT INTO usertoken VALUES ('1457', '1077', 'c22f1543bcac4a1bb627fe0a990dce75x29aRk', '2016-04-08 17:24:56', '0', '2016-04-08 17:24:56');
INSERT INTO usertoken VALUES ('1458', '1077', '7fc9c2ffae0648a5af6e0ffaca573b4bqsujP1', '2016-04-08 17:26:40', '0', '2016-04-08 17:26:40');
INSERT INTO usertoken VALUES ('1459', '1077', '926dc411934c4b089cc12aadb0d48026V6OWE6', '2016-04-08 17:28:06', '0', '2016-04-08 17:28:06');
INSERT INTO usertoken VALUES ('1460', '1077', 'b8ead280597841e493d5c01b76ffd20a4D0ORt', '2016-04-08 17:33:33', '0', '2016-04-08 17:33:33');
INSERT INTO usertoken VALUES ('1461', '1077', 'ab0a109433bd4ce89c5db8174c2c3466Ek8xFv', '2016-04-08 17:34:17', '0', '2016-04-08 17:34:17');
INSERT INTO usertoken VALUES ('1462', '1077', '3587d73580da4d4ea4d769a550b9e03dq3EG1F', '2016-04-08 17:36:07', '0', '2016-04-08 17:36:07');
INSERT INTO usertoken VALUES ('1463', '1077', '55324de59d1948cea93bbbf757a289c5ME6CJr', '2016-04-08 17:37:54', '0', '2016-04-08 17:37:54');
INSERT INTO usertoken VALUES ('1464', '1077', '538acc987d954e7a8ad197850469e018X6LqgS', '2016-04-08 17:39:21', '0', '2016-04-08 17:39:21');
INSERT INTO usertoken VALUES ('1465', '1077', '734b4d312ad64aff8c0a9dea3b0d2e96PM1u1p', '2016-04-08 17:37:44', '0', '2016-04-08 17:37:44');
INSERT INTO usertoken VALUES ('1466', '1077', '9bce2284964746cd8a3487112fe33e23Id7Q7S', '2016-04-08 17:39:39', '0', '2016-04-08 17:39:39');
INSERT INTO usertoken VALUES ('1467', '1152', '4735a32a6882405fbb82df4318e05765bgMY9j', '2016-04-08 17:39:59', '0', '2016-04-08 17:39:59');
INSERT INTO usertoken VALUES ('1468', '1077', 'd1d157bbb2544846993b6414d392d986i40RoK', '2016-04-08 17:40:17', '0', '2016-04-08 17:40:17');
INSERT INTO usertoken VALUES ('1469', '1077', 'ee5b1356dd564b28bf36f37a33afb1bez33i3v', '2016-04-08 17:40:55', '0', '2016-04-08 17:40:55');
INSERT INTO usertoken VALUES ('1470', '1077', 'abe46ddfd8fd400e9d2e7bf6d5bf76abvu7TyJ', '2016-04-08 17:42:29', '0', '2016-04-08 17:42:29');
INSERT INTO usertoken VALUES ('1471', '1077', 'da8da6a1b31847159decdc495ac235ebX6n2O8', '2016-04-08 17:43:16', '0', '2016-04-08 17:43:16');
INSERT INTO usertoken VALUES ('1472', '1077', '65277761b93e4141bc6f3d04d675908ej878rw', '2016-04-08 17:43:20', '0', '2016-04-08 17:43:20');
INSERT INTO usertoken VALUES ('1473', '1077', '85b336d81a4e43d0b8a231faddf750faNq3X6Q', '2016-04-08 17:47:13', '0', '2016-04-08 17:47:13');
INSERT INTO usertoken VALUES ('1474', '1077', '8ec8b2ad288a4d23b07bdfeb82610deek7K919', '2016-04-08 17:48:55', '0', '2016-04-08 17:48:55');
INSERT INTO usertoken VALUES ('1475', '1077', '84a27bed35a342018ca6367c5cbe4050oja0m5', '2016-04-08 17:52:22', '0', '2016-04-08 17:52:22');
INSERT INTO usertoken VALUES ('1476', '1077', '5964087bd8984316a49b54e024d0afb1e5FxB3', '2016-04-08 17:53:28', '0', '2016-04-08 17:53:28');
INSERT INTO usertoken VALUES ('1477', '1077', 'faeddc04609a4795be3f523216edda7d43n59R', '2016-04-08 17:56:21', '0', '2016-04-08 17:56:21');
INSERT INTO usertoken VALUES ('1478', '1077', 'b4eb5221c2394fbe93ddde665849f4a5l4eg7P', '2016-04-08 17:58:27', '0', '2016-04-08 17:58:27');
INSERT INTO usertoken VALUES ('1479', '1077', '2be7e4d9eeb440e6ac854de5f8ab5432lM6WqU', '2016-04-08 17:59:35', '0', '2016-04-08 17:59:35');
INSERT INTO usertoken VALUES ('1480', '1077', '1f050b61b6a545c9a05c946f729c7da8zW9S6X', '2016-04-08 18:00:28', '0', '2016-04-08 18:00:28');
INSERT INTO usertoken VALUES ('1481', '1077', 'f5929dfcd47c4289890371ae9c9bca9cf6EpUN', '2016-04-08 18:03:18', '0', '2016-04-08 18:03:18');
INSERT INTO usertoken VALUES ('1482', '1077', '37583f2759bb41129a26dbcab4e35f62U06L49', '2016-04-08 18:04:12', '0', '2016-04-08 18:04:12');
INSERT INTO usertoken VALUES ('1483', '1077', 'a1bf57cd261d4447ac2122362705567fSiSI01', '2016-04-08 18:07:43', '0', '2016-04-08 18:07:43');
INSERT INTO usertoken VALUES ('1484', '1077', 'b5f76da4c9a34e0abf3daa545b39acdafJs1Ns', '2016-04-08 18:10:57', '0', '2016-04-08 18:10:57');
INSERT INTO usertoken VALUES ('1485', '1077', 'ec65e300cc48440ca9981cc129cc77879T1z14', '2016-04-08 18:15:26', '0', '2016-04-08 18:15:26');
INSERT INTO usertoken VALUES ('1486', '1077', 'e4a48273627641bb9835c54a6ba0d701ABmObJ', '2016-04-08 18:15:48', '0', '2016-04-08 18:15:48');
INSERT INTO usertoken VALUES ('1487', '1077', '508eeca86b5048a084fff00113ff5e62wY0suN', '2016-04-08 18:17:40', '0', '2016-04-08 18:17:40');
INSERT INTO usertoken VALUES ('1488', '1077', 'e9140f51ead4444a98b61b85c39d465ahlhMl5', '2016-04-08 18:17:52', '0', '2016-04-08 18:17:52');
INSERT INTO usertoken VALUES ('1489', '1152', 'e65959506ac54e258047c9f170191082f1Qy3l', '2016-04-08 18:21:08', '0', '2016-04-08 18:21:08');
INSERT INTO usertoken VALUES ('1490', '1077', '27e0af81c04648a3b2b5b25d0cf5083e9qg2L9', '2016-04-08 18:54:16', '0', '2016-04-08 18:54:16');

-- ----------------------------
-- Table structure for `user_defined_struts`
-- ----------------------------
DROP TABLE IF EXISTS `user_defined_struts`;
CREATE TABLE `user_defined_struts` (
  `idNumber` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `tableName` varchar(20) DEFAULT NULL COMMENT '表名',
  `pannal` char(1) DEFAULT '1' COMMENT '布局选择，上下布局，左右布局，多界面布局',
  `political` varchar(20) DEFAULT NULL COMMENT '功能选择',
  `seqno` int(11) DEFAULT NULL COMMENT '行号',
  `chinese` varchar(20) DEFAULT NULL COMMENT '中文',
  `column` varchar(20) DEFAULT NULL COMMENT '列名',
  `columnType` varchar(20) DEFAULT NULL COMMENT '表字段类型',
  `java_property` varchar(20) DEFAULT NULL COMMENT 'java属性',
  `pro_type` varchar(20) DEFAULT NULL COMMENT '属性类型',
  `input_type` char(2) DEFAULT NULL COMMENT '输入类型1文本框,2数字',
  `data_source` varchar(20) DEFAULT NULL COMMENT '数据来源',
  `is_required` varchar(1) DEFAULT NULL COMMENT '是否必输项',
  `trigger_event` char(2) DEFAULT NULL COMMENT '1点击,2数据改变,3失去焦点',
  `trigger_function` varchar(100) DEFAULT NULL COMMENT '触发函数',
  `sord_order` int(11) DEFAULT NULL COMMENT '字段排序',
  PRIMARY KEY (`idNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='生成表规则表';

-- ----------------------------
-- Records of user_defined_struts
-- ----------------------------
