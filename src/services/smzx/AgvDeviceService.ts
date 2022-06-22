// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** AGV设备详细 包括属性列表 pad POST /rpc/smzx.service-robotics/AgvDeviceService.Get */
export async function AgvDeviceServiceGet(
  body: SMZX.smzxAgvDeviceGetReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxAgvDeviceGetResp>('/rpc/smzx.service-robotics/AgvDeviceService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace AgvDeviceServiceGet {
  export const apiUrl = '/rpc/smzx.service-robotics/AgvDeviceService.Get';
}

/** AGV设备导入 POST /rpc/smzx.service-robotics/AgvDeviceService.Import */
export async function AgvDeviceServiceImport(
  body: SMZX.smzxAgvDeviceImportReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxAgvDeviceImportResp>(
    '/rpc/smzx.service-robotics/AgvDeviceService.Import',
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

export namespace AgvDeviceServiceImport {
  export const apiUrl = '/rpc/smzx.service-robotics/AgvDeviceService.Import';
}

/** AGV设备分页 POST /rpc/smzx.service-robotics/AgvDeviceService.Page */
export async function AgvDeviceServicePage(
  body: SMZX.smzxAgvDevicePageReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxAgvDevicePageResp>('/rpc/smzx.service-robotics/AgvDeviceService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace AgvDeviceServicePage {
  export const apiUrl = '/rpc/smzx.service-robotics/AgvDeviceService.Page';
}

/** 更新AGV设备 POST /rpc/smzx.service-robotics/AgvDeviceService.Update */
export async function AgvDeviceServiceUpdate(
  body: SMZX.smzxAgvDeviceUpdateReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxAgvDeviceUpdateResp>(
    '/rpc/smzx.service-robotics/AgvDeviceService.Update',
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

export namespace AgvDeviceServiceUpdate {
  export const apiUrl = '/rpc/smzx.service-robotics/AgvDeviceService.Update';
}
