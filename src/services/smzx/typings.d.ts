// @ts-ignore
/* eslint-disable */

declare namespace SMZX {
  type smzxAgvDevice = {
    /** 充电点 x|y|angle */
    charge_point: string;
    device_id: string;
    device_name: string;
    /** 在线状态 导入不要入参 */
    is_online: boolean;
    mac: string;
    product_id: string;
    product_name: string;
  };

  type smzxAgvDeviceGetReq = {
    id: string;
  };

  type smzxAgvDeviceGetResp = {
    agv_device: smzxAgvDevice;
    code: number;
    msg: string;
    propertys: string;
  };

  type smzxAgvDeviceImportReq = {
    list: smzxAgvDevice[];
  };

  type smzxAgvDeviceImportResp = {
    code: number;
    msg: string;
  };

  type smzxAgvDevicePageReq = {
    device_name: string;
    /** 第几页，从0开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxAgvDevicePageResp = {
    code: number;
    /** 设备列表 */
    list: smzxAgvDevice[];
    msg: string;
    /** 列表数量 */
    total: number;
  };

  type smzxAgvDeviceUpdate = {
    /** 充电点 x|y|angle */
    charge_point: string;
    id: string;
    mac: string;
  };

  type smzxAgvDeviceUpdateReq = {
    agv_device_update: smzxAgvDeviceUpdate;
  };

  type smzxAgvDeviceUpdateResp = {
    agv_device: smzxAgvDevice;
    code: number;
    msg: string;
  };

  type smzxBroadcast = {
    /** 播报代码 */
    code: string;
    /** 播报内容 */
    content: string;
    /** 播报id */
    id: string;
    /** 播报名称 */
    name: string;
  };

  type smzxBroadcastAddReq = {
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastAddResp = {
    broadcast: smzxBroadcast;
    code: number;
    msg: string;
  };

  type smzxBroadcastDelReq = {
    id: string;
  };

  type smzxBroadcastDelResp = {
    code: number;
    id: string;
    msg: string;
  };

  type smzxBroadcastGetReq = {
    id: string;
  };

  type smzxBroadcastGetResp = {
    broadcast: smzxBroadcast;
    code: number;
    msg: string;
  };

  type smzxBroadcastPageReq = {
    /** 第几页，从0开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxBroadcastPageResp = {
    code: number;
    /** 播报列表 */
    list: smzxBroadcast[];
    msg: string;
    /** 列表数量 */
    total: number;
  };

  type smzxBroadcastUpdateReq = {
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastUpdateResp = {
    broadcast: smzxBroadcast;
    code: number;
    msg: string;
  };

  type smzxDevicePropertyRefreshReq = Record<string, any>;

  type smzxDevicePropertyRefreshResp = {
    code: number;
    msg: string;
  };

  type smzxSensorDevice = {
    /** 区位类型 0无 1 外室 2 中式茶艺厅 3西式茶歇亭-1 */
    area: number;
    device_id: string;
    device_name: string;
    /** 在线状态 导入不要入参 */
    is_online: boolean;
    product_id: string;
    product_name: string;
  };

  type smzxSensorDeviceAllPropertyReq = Record<string, any>;

  type smzxSensorDeviceAllPropertyResp = {
    code: number;
    list: smzxSensorDeviceProperty[];
    msg: string;
  };

  type smzxSensorDeviceImportReq = {
    list: smzxSensorDevice[];
  };

  type smzxSensorDeviceImportResp = {
    code: number;
    msg: string;
  };

  type smzxSensorDevicePageReq = {
    device_name: string;
    /** 第几页，从0开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxSensorDevicePageResp = {
    code: number;
    /** 设备列表 */
    list: smzxSensorDevice[];
    msg: string;
    /** 列表数量 */
    total: number;
  };

  type smzxSensorDeviceProperty = {
    area: number;
    device_id: string;
    propertys: string;
  };

  type smzxSensorDeviceUpdate = {
    /** 区位类型 0无 1 外室 2 中式茶艺厅 3西式茶歇亭-1 */
    area: number;
    id: string;
  };

  type smzxSensorDeviceUpdateReq = {
    sensor_device_update: smzxSensorDeviceUpdate;
  };

  type smzxSensorDeviceUpdateResp = {
    code: number;
    msg: string;
    sensor_device: smzxSensorDevice;
  };

  type smzxStreamReq = {
    command: string;
    context: string;
    data: string;
    device_id: string;
    msg_id: string;
    time_stamp: number;
  };

  type smzxStreamResp = {
    command: string;
    context: string;
    data: string;
    msg_id: string;
    time_stamp: number;
  };

  type smzxVideo = {
    /** 视频id */
    id: string;
    /** 视频名称 */
    name: string;
    /** 视频url */
    video_url: string;
  };

  type smzxVideoAddReq = {
    video: smzxVideo;
  };

  type smzxVideoAddResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };

  type smzxVideoDelListReq = {
    ids: string[];
  };

  type smzxVideoDelListResp = {
    code: number;
    ids: string[];
    msg: string;
  };

  type smzxVideoDevice = {
    device_id: string;
    device_name: string;
    product_id: string;
    product_name: string;
  };

  type smzxVideoDeviceListReq = Record<string, any>;

  type smzxVideoDeviceListResp = {
    code: number;
    /** 设备列表 */
    list: smzxVideoDevice[];
    msg: string;
  };

  type smzxVideoGetReq = {
    id: string;
  };

  type smzxVideoGetResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };

  type smzxVideoPageReq = {
    /** 第几页，从0开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxVideoPageResp = {
    code: number;
    /** 视频列表 */
    list: smzxVideo[];
    msg: string;
    /** 列表数量 */
    total: number;
  };

  type smzxVideoPushReq = {
    device_ids: string[];
    video_id: string;
  };

  type smzxVideoPushResp = {
    code: number;
    msg: string;
  };

  type smzxVideoUpdateReq = {
    video: smzxVideo;
  };

  type smzxVideoUpdateResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };
}
