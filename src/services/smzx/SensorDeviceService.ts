// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 传感器设备所有属性 pad POST /rpc/smzx.service-robotics/SensorDeviceService.AllProperty */
export async function SensorDeviceServiceAllProperty(
  body: SMZX.smzxSensorDeviceAllPropertyReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxSensorDeviceAllPropertyResp>(
    '/rpc/smzx.service-robotics/SensorDeviceService.AllProperty',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

export namespace SensorDeviceServiceAllProperty {
  export const apiUrl = '/rpc/smzx.service-robotics/SensorDeviceService.AllProperty';
}

/** 传感器设备导入 POST /rpc/smzx.service-robotics/SensorDeviceService.Import */
export async function SensorDeviceServiceImport(
  body: SMZX.smzxSensorDeviceImportReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxSensorDeviceImportResp>(
    '/rpc/smzx.service-robotics/SensorDeviceService.Import',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

export namespace SensorDeviceServiceImport {
  export const apiUrl = '/rpc/smzx.service-robotics/SensorDeviceService.Import';
}

/** 传感器设备分页 POST /rpc/smzx.service-robotics/SensorDeviceService.Page */
export async function SensorDeviceServicePage(
  body: SMZX.smzxSensorDevicePageReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxSensorDevicePageResp>(
    '/rpc/smzx.service-robotics/SensorDeviceService.Page',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

export namespace SensorDeviceServicePage {
  export const apiUrl = '/rpc/smzx.service-robotics/SensorDeviceService.Page';
}

/** 更新传感器设备 POST /rpc/smzx.service-robotics/SensorDeviceService.Update */
export async function SensorDeviceServiceUpdate(
  body: SMZX.smzxSensorDeviceUpdateReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxSensorDeviceUpdateResp>(
    '/rpc/smzx.service-robotics/SensorDeviceService.Update',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}

export namespace SensorDeviceServiceUpdate {
  export const apiUrl = '/rpc/smzx.service-robotics/SensorDeviceService.Update';
}
