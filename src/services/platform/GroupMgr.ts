// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 分配用户到组织 POST /rpc/platform-iam/GroupMgr.AssignUserToGroup */
export async function GroupMgrAssignUserToGroup(
  body: PLATFORM.platformIamAssignUserToGroupRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamAssignUserToGroupResponse>(
    '/rpc/platform-iam/GroupMgr.AssignUserToGroup',
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

export namespace GroupMgrAssignUserToGroup {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.AssignUserToGroup';
}

/** 新建组织 POST /rpc/platform-iam/GroupMgr.GroupCreate */
export async function GroupMgrGroupCreate(
  body: PLATFORM.platformIamGroupCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupCreateResponse>(
    '/rpc/platform-iam/GroupMgr.GroupCreate',
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

export namespace GroupMgrGroupCreate {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.GroupCreate';
}

/** 删除组织（或子组织） POST /rpc/platform-iam/GroupMgr.GroupDelete */
export async function GroupMgrGroupDelete(
  body: PLATFORM.platformIamGroupDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupDeleteResponse>(
    '/rpc/platform-iam/GroupMgr.GroupDelete',
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

export namespace GroupMgrGroupDelete {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.GroupDelete';
}

/** 组织详情 POST /rpc/platform-iam/GroupMgr.GroupDetail */
export async function GroupMgrGroupDetail(
  body: PLATFORM.platformIamGroupDetailRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupDetailResponse>(
    '/rpc/platform-iam/GroupMgr.GroupDetail',
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

export namespace GroupMgrGroupDetail {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.GroupDetail';
}

/** 编辑组织 POST /rpc/platform-iam/GroupMgr.GroupEdit */
export async function GroupMgrGroupEdit(
  body: PLATFORM.platformIamGroupEditRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupEditResponse>('/rpc/platform-iam/GroupMgr.GroupEdit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace GroupMgrGroupEdit {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.GroupEdit';
}

/** 组织列表 POST /rpc/platform-iam/GroupMgr.GroupList */
export async function GroupMgrGroupList(
  body: PLATFORM.platformIamGroupListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupListResponse>('/rpc/platform-iam/GroupMgr.GroupList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export namespace GroupMgrGroupList {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.GroupList';
}

/** 用户组织架构导入 POST /rpc/platform-iam/GroupMgr.ImportUserGroup */
export async function GroupMgrImportUserGroup(
  body: PLATFORM.platformIamImportUserGroupRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamImportUserGroupResponse>(
    '/rpc/platform-iam/GroupMgr.ImportUserGroup',
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

export namespace GroupMgrImportUserGroup {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.ImportUserGroup';
}

/** 获取用户所在组织 POST /rpc/platform-iam/GroupMgr.QueryGroupsByUser */
export async function GroupMgrQueryGroupsByUser(
  body: PLATFORM.platformIamQueryGroupsByUserRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamGroupListResponse>(
    '/rpc/platform-iam/GroupMgr.QueryGroupsByUser',
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

export namespace GroupMgrQueryGroupsByUser {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.QueryGroupsByUser';
}

/** 从组织中移除用户 POST /rpc/platform-iam/GroupMgr.RemoveUserFromGroup */
export async function GroupMgrRemoveUserFromGroup(
  body: PLATFORM.platformIamRemoveUserFromGroupRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamRemoveUserFromGroupResponse>(
    '/rpc/platform-iam/GroupMgr.RemoveUserFromGroup',
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

export namespace GroupMgrRemoveUserFromGroup {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.RemoveUserFromGroup';
}

/** 用户组织列表 POST /rpc/platform-iam/GroupMgr.UserGroupList */
export async function GroupMgrUserGroupList(
  body: PLATFORM.platformIamUserGroupListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamUserGroupListResponse>(
    '/rpc/platform-iam/GroupMgr.UserGroupList',
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

export namespace GroupMgrUserGroupList {
  export const apiUrl = '/rpc/platform-iam/GroupMgr.UserGroupList';
}
