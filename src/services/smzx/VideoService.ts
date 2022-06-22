// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 添加视频 POST /rpc/smzx.service-robotics/VideoService.Add */
export async function VideoServiceAdd(
  body: SMZX.smzxVideoAddReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoAddResp>('/rpc/smzx.service-robotics/VideoService.Add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServiceAdd {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.Add';
}

/** 删除视频列表 POST /rpc/smzx.service-robotics/VideoService.DelList */
export async function VideoServiceDelList(
  body: SMZX.smzxVideoDelListReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoDelListResp>('/rpc/smzx.service-robotics/VideoService.DelList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServiceDelList {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.DelList';
}

/** 获取视频设备列表 POST /rpc/smzx.service-robotics/VideoService.DeviceList */
export async function VideoServiceDeviceList(
  body: SMZX.smzxVideoDeviceListReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoDeviceListResp>(
    '/rpc/smzx.service-robotics/VideoService.DeviceList',
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

export namespace VideoServiceDeviceList {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.DeviceList';
}

/** 获取视频 POST /rpc/smzx.service-robotics/VideoService.Get */
export async function VideoServiceGet(
  body: SMZX.smzxVideoGetReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoGetResp>('/rpc/smzx.service-robotics/VideoService.Get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServiceGet {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.Get';
}

/** 视频列表 POST /rpc/smzx.service-robotics/VideoService.Page */
export async function VideoServicePage(
  body: SMZX.smzxVideoPageReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoPageResp>('/rpc/smzx.service-robotics/VideoService.Page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServicePage {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.Page';
}

/** 视频推送 POST /rpc/smzx.service-robotics/VideoService.Push */
export async function VideoServicePush(
  body: SMZX.smzxVideoPushReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoPushResp>('/rpc/smzx.service-robotics/VideoService.Push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServicePush {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.Push';
}

/** 更新视频 POST /rpc/smzx.service-robotics/VideoService.Update */
export async function VideoServiceUpdate(
  body: SMZX.smzxVideoUpdateReq,
  options?: { [key: string]: any },
) {
  return request<SMZX.smzxVideoUpdateResp>('/rpc/smzx.service-robotics/VideoService.Update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace VideoServiceUpdate {
  export const apiUrl = '/rpc/smzx.service-robotics/VideoService.Update';
}
