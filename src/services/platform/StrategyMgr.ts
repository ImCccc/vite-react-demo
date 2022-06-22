// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 新建策略 POST /rpc/platform-iam/StrategyMgr.StrategyCreate */
export async function StrategyMgrStrategyCreate(
  body: PLATFORM.platformIamStrategyCreateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamStrategyCreateResponse>(
    '/rpc/platform-iam/StrategyMgr.StrategyCreate',
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

export namespace StrategyMgrStrategyCreate {
  export const apiUrl = '/rpc/platform-iam/StrategyMgr.StrategyCreate';
}

/** 删除策略 POST /rpc/platform-iam/StrategyMgr.StrategyDelete */
export async function StrategyMgrStrategyDelete(
  body: PLATFORM.platformIamStrategyDeleteRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamStrategyDeleteResponse>(
    '/rpc/platform-iam/StrategyMgr.StrategyDelete',
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

export namespace StrategyMgrStrategyDelete {
  export const apiUrl = '/rpc/platform-iam/StrategyMgr.StrategyDelete';
}

/** 策略列表 POST /rpc/platform-iam/StrategyMgr.StrategyList */
export async function StrategyMgrStrategyList(
  body: PLATFORM.platformIamStrategyListRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamStrategyListResponse>(
    '/rpc/platform-iam/StrategyMgr.StrategyList',
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

export namespace StrategyMgrStrategyList {
  export const apiUrl = '/rpc/platform-iam/StrategyMgr.StrategyList';
}

/** 更新策略 POST /rpc/platform-iam/StrategyMgr.StrategyUpdate */
export async function StrategyMgrStrategyUpdate(
  body: PLATFORM.platformIamStrategyUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<PLATFORM.platformIamStrategyUpdateResponse>(
    '/rpc/platform-iam/StrategyMgr.StrategyUpdate',
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

export namespace StrategyMgrStrategyUpdate {
  export const apiUrl = '/rpc/platform-iam/StrategyMgr.StrategyUpdate';
}
