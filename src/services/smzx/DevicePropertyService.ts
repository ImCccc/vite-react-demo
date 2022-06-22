// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 属性刷新 POST /rpc/smzx.service-robotics/DevicePropertyService.Refresh */
export async function DevicePropertyServiceRefresh(
  body: SMZX.smzxDevicePropertyRefreshReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxDevicePropertyRefreshResp>(
    '/rpc/smzx.service-robotics/DevicePropertyService.Refresh',
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

export namespace DevicePropertyServiceRefresh {
  export const apiUrl = '/rpc/smzx.service-robotics/DevicePropertyService.Refresh';
}
