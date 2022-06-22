// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 创建资源 POST /rpc/platform-iam/ResourceMgr.ResourceCreate */
export async function ResourceMgrResourceCreate(
  body: PLATFORM.platformIamResourceCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamResourceCreateResponse>(
    '/rpc/platform-iam/ResourceMgr.ResourceCreate',
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

export namespace ResourceMgrResourceCreate {
  export const apiUrl = '/rpc/platform-iam/ResourceMgr.ResourceCreate';
}

/** 删除资源 POST /rpc/platform-iam/ResourceMgr.ResourceDelete */
export async function ResourceMgrResourceDelete(
  body: PLATFORM.platformIamResourceDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamResourceDeleteResponse>(
    '/rpc/platform-iam/ResourceMgr.ResourceDelete',
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

export namespace ResourceMgrResourceDelete {
  export const apiUrl = '/rpc/platform-iam/ResourceMgr.ResourceDelete';
}

/** 编辑资源 POST /rpc/platform-iam/ResourceMgr.ResourceEdit */
export async function ResourceMgrResourceEdit(
  body: PLATFORM.platformIamResourceEditRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamResourceEditResponse>(
    '/rpc/platform-iam/ResourceMgr.ResourceEdit',
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

export namespace ResourceMgrResourceEdit {
  export const apiUrl = '/rpc/platform-iam/ResourceMgr.ResourceEdit';
}

/** 资源详情 POST /rpc/platform-iam/ResourceMgr.ResourceInfo */
export async function ResourceMgrResourceInfo(
  body: PLATFORM.platformIamResourceInfoRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamResourceInfoResponse>(
    '/rpc/platform-iam/ResourceMgr.ResourceInfo',
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

export namespace ResourceMgrResourceInfo {
  export const apiUrl = '/rpc/platform-iam/ResourceMgr.ResourceInfo';
}

/** 资源列表查询 POST /rpc/platform-iam/ResourceMgr.ResourceList */
export async function ResourceMgrResourceList(
  body: PLATFORM.platformIamResourceListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamResourceListResponse>(
    '/rpc/platform-iam/ResourceMgr.ResourceList',
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

export namespace ResourceMgrResourceList {
  export const apiUrl = '/rpc/platform-iam/ResourceMgr.ResourceList';
}
