// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 角色资源权限查询 POST /rpc/platform-iam/RoleMgr.QueryRoleResources */
export async function RoleMgrQueryRoleResources(
  body: PLATFORM.platformIamQueryRoleResourcesRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamQueryRoleResourcesResponse>(
    '/rpc/platform-iam/RoleMgr.QueryRoleResources',
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

export namespace RoleMgrQueryRoleResources {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.QueryRoleResources';
}

/** 角色分配权限 POST /rpc/platform-iam/RoleMgr.RoleAssignPermission */
export async function RoleMgrRoleAssignPermission(
  body: PLATFORM.platformIamRoleAssignPermissionRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleAssignPermissionResponse>(
    '/rpc/platform-iam/RoleMgr.RoleAssignPermission',
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

export namespace RoleMgrRoleAssignPermission {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleAssignPermission';
}

/** 创建角色 POST /rpc/platform-iam/RoleMgr.RoleCreate */
export async function RoleMgrRoleCreate(
  body: PLATFORM.platformIamRoleCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleCreateResponse>('/rpc/platform-iam/RoleMgr.RoleCreate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace RoleMgrRoleCreate {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleCreate';
}

/** 删除角色 POST /rpc/platform-iam/RoleMgr.RoleDelete */
export async function RoleMgrRoleDelete(
  body: PLATFORM.platformIamRoleDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleDeleteResponse>('/rpc/platform-iam/RoleMgr.RoleDelete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace RoleMgrRoleDelete {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleDelete';
}

/** 编辑角色 POST /rpc/platform-iam/RoleMgr.RoleEdit */
export async function RoleMgrRoleEdit(
  body: PLATFORM.platformIamRoleEditRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleEditResponse>('/rpc/platform-iam/RoleMgr.RoleEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace RoleMgrRoleEdit {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleEdit';
}

/** 角色详情 POST /rpc/platform-iam/RoleMgr.RoleInfo */
export async function RoleMgrRoleInfo(
  body: PLATFORM.platformIamRoleInfoRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleInfoResponse>('/rpc/platform-iam/RoleMgr.RoleInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace RoleMgrRoleInfo {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleInfo';
}

/** 角色列表查询 POST /rpc/platform-iam/RoleMgr.RoleList */
export async function RoleMgrRoleList(
  body: PLATFORM.platformIamRoleListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRoleListResponse>('/rpc/platform-iam/RoleMgr.RoleList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace RoleMgrRoleList {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RoleList';
}

/** 角色权限列表 POST /rpc/platform-iam/RoleMgr.RolePermissionList */
export async function RoleMgrRolePermissionList(
  body: PLATFORM.platformIamRolePermissionListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRolePermissionListResponse>(
    '/rpc/platform-iam/RoleMgr.RolePermissionList',
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

export namespace RoleMgrRolePermissionList {
  export const apiUrl = '/rpc/platform-iam/RoleMgr.RolePermissionList';
}
