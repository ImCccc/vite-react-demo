// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 新建项目 POST /rpc/platform-iam/ProjectMgr.ProjectCreate */
export async function ProjectMgrProjectCreate(
  body: PLATFORM.platformIamProjectCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamProjectCreateResponse>(
    '/rpc/platform-iam/ProjectMgr.ProjectCreate',
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

export namespace ProjectMgrProjectCreate {
  export const apiUrl = '/rpc/platform-iam/ProjectMgr.ProjectCreate';
}

/** 删除项目 POST /rpc/platform-iam/ProjectMgr.ProjectDelete */
export async function ProjectMgrProjectDelete(
  body: PLATFORM.platformIamProjectDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamProjectDeleteResponse>(
    '/rpc/platform-iam/ProjectMgr.ProjectDelete',
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

export namespace ProjectMgrProjectDelete {
  export const apiUrl = '/rpc/platform-iam/ProjectMgr.ProjectDelete';
}

/** 项目详情 POST /rpc/platform-iam/ProjectMgr.ProjectDetail */
export async function ProjectMgrProjectDetail(
  body: PLATFORM.platformIamProjectDetailRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamProjectDetailResponse>(
    '/rpc/platform-iam/ProjectMgr.ProjectDetail',
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

export namespace ProjectMgrProjectDetail {
  export const apiUrl = '/rpc/platform-iam/ProjectMgr.ProjectDetail';
}

/** 编辑项目 POST /rpc/platform-iam/ProjectMgr.ProjectEdit */
export async function ProjectMgrProjectEdit(
  body: PLATFORM.platformIamProjectEditRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamProjectEditResponse>(
    '/rpc/platform-iam/ProjectMgr.ProjectEdit',
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

export namespace ProjectMgrProjectEdit {
  export const apiUrl = '/rpc/platform-iam/ProjectMgr.ProjectEdit';
}

/** 项目列表 POST /rpc/platform-iam/ProjectMgr.ProjectList */
export async function ProjectMgrProjectList(
  body: PLATFORM.platformIamProjectListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamProjectListResponse>(
    '/rpc/platform-iam/ProjectMgr.ProjectList',
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

export namespace ProjectMgrProjectList {
  export const apiUrl = '/rpc/platform-iam/ProjectMgr.ProjectList';
}
