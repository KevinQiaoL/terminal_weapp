import { wxRequest } from '../utils/request';

const domain = 'https://play.bohecd.com/www-gzplay/actForPhone/micro/' // 开发
/**
 * 接口格式
 * @params {[type]}   [description]
 * @return {[type]}   [description]
 */
//获取 用户openid session_key
const getOpenId = (params) => wxRequest(params, domain + 'getOpenid.php');
// 登录
const loginSys = (params) => wxRequest(params, domain + 'login.php' )
// 绑定
const bindSys = (params) => wxRequest(params, domain + 'bind.php')
// 获取彩店列表
const getStationList = (params) => wxRequest(params, domain + 'stationList.php')
// 网点下的终端列表
const getTerminalList = (params) => wxRequest(params, domain + 'devices.php')
// 终端详情
const getTerminalInfo = (params) => wxRequest(params, domain + 'deviceInfo.php')
// 单个节目单详情
const programInfo = (params) => wxRequest(params, domain + 'programInfo.php')
// 可选择节目单的列表
const programList = (params) => wxRequest(params, domain + 'programList.php')
// 可选择屏幕模板列表
const screenMode = (params) => wxRequest(params, domain + 'screenMode.php')
// 切换数据模式
const deviceDataMode = (params) => wxRequest(params, domain + 'deviceDataMode.php')
// 配置或修改屏幕节目单
const dispose = (params) => wxRequest(params, domain + 'dispose.php')
// 解除绑定
const cancelBind = (params) => wxRequest(params, domain + 'cancelBind.php')
// 素材列表
const resourceList = (params) => wxRequest(params, domain + 'resourceList.php')
// 设置插播
const upsert = (params) => wxRequest(params, domain + 'upsert.php')
// 设置跑马灯
const scroll = (params) => wxRequest(params, domain + 'scroll.php')


module.exports = {
  domain,
  getOpenId,
  loginSys,
  bindSys,
  getStationList,
  getTerminalList,
  getTerminalInfo,
  programInfo,
  programList,
  screenMode,
  deviceDataMode,
  dispose,
  cancelBind,
  resourceList,
  upsert,
  scroll
}
