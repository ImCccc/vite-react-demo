// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 新建菜单 POST /rpc/platform-iam/MenuMgr.MenuCreate */
export async function MenuMgrMenuCreate(
  body: PLATFORM.platformIamMenuCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamMenuCreateResponse>('/rpc/platform-iam/MenuMgr.MenuCreate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace MenuMgrMenuCreate {
  export const apiUrl = '/rpc/platform-iam/MenuMgr.MenuCreate';
}

/** 删除菜单 POST /rpc/platform-iam/MenuMgr.MenuDelete */
export async function MenuMgrMenuDelete(
  body: PLATFORM.platformIamMenuDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamMenuDeleteResponse>('/rpc/platform-iam/MenuMgr.MenuDelete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace MenuMgrMenuDelete {
  export const apiUrl = '/rpc/platform-iam/MenuMgr.MenuDelete';
}

/** 编辑菜单 POST /rpc/platform-iam/MenuMgr.MenuEdit */
export async function MenuMgrMenuEdit(
  body: PLATFORM.platformIamMenuEditRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamMenuEditResponse>('/rpc/platform-iam/MenuMgr.MenuEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace MenuMgrMenuEdit {
  export const apiUrl = '/rpc/platform-iam/MenuMgr.MenuEdit';
}

/** 菜单列表 POST /rpc/platform-iam/MenuMgr.MenuList */
export async function MenuMgrMenuList(
  body: PLATFORM.platformIamMenuListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamMenuListResponse>('/rpc/platform-iam/MenuMgr.MenuList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace MenuMgrMenuList {
  export const apiUrl = '/rpc/platform-iam/MenuMgr.MenuList';
}
