// @ts-ignore
/* eslint-disable */

declare namespace PLATFORM {
  type platformIamAccess = 'UNKNOWN' | 'GRANTED' | 'DENIED';

  type platformIamApplicationCreateRequest = {
    /** 应用名称 */
    app_name: string;
    /** 应用路径 */
    app_path: string;
    /** 项目资源ID */
    project_id: string;
    /** 子应用 */
    sub_apps: platformIamSubApplication[];
  };

  type platformIamApplicationCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamApplicationDeleteRequest = {
    /** 应用ID */
    app_id: string;
  };

  type platformIamApplicationDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamApplicationDetailRequest = {
    /** 应用ID */
    app_id: string;
  };

  type platformIamApplicationDetailResponse = {
    /** 错误码 */
    code: number;
    data: platformIamApplicationInfo;
    /** 错误信息 */
    msg: string;
  };

  type platformIamApplicationEditRequest = {
    /** 应用ID */
    app_id: string;
    /** 应用名称 */
    app_name: string;
    /** 应用路径 */
    app_path: string;
    /** 子应用 */
    sub_apps: platformIamSubApplication[];
  };

  type platformIamApplicationEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamApplicationInfo = {
    /** 应用ID */
    app_id: string;
    /** 应用名称 */
    app_name: string;
    /** 应用路径 */
    app_path: string;
    /** 子应用 */
    sub_apps: platformIamSubApplication[];
  };

  type platformIamApplicationListRequest = {
    /** 应用名称 */
    app_name: string;
    /** 应用路径 */
    app_path: string;
  };

  type platformIamApplicationListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 应用列表 */
    data: platformIamApplicationInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamAssignRole = {
    access_type: platformIamAccess;
    /** 角色ID */
    role_id: string;
  };

  type platformIamAssignUserToGroupRequest = {
    /** 组织ID */
    group_id: string;
    /** 用户ID集合 */
    user_ids: string[];
  };

  type platformIamAssignUserToGroupResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamCheckAccessPermissionResponse = {
    /** 错误码 */
    code: number;
    /** 返回metadata */
    metadata: Record<string, any>;
    /** 错误信息 */
    msg: string;
  };

  type platformIamGender = 'OTHER' | 'MAN' | 'WOMAN';

  type platformIamGroupCreateRequest = {
    /** 绑定资源: 如果为空，绑定到该租户；非空则绑定到该资源 */
    bind_key: string;
    /** 组织名称 */
    group_name: string;
    /** 父级组织ID */
    parent_id: string;
    /** 子组织 */
    sub_groups: platformIamGroupInfo[];
  };

  type platformIamGroupCreateResponse = {
    /** 错误码 */
    code: number;
    /** 组织ID */
    group_id: string;
    /** 错误信息 */
    msg: string;
  };

  type platformIamGroupDeleteRequest = {
    /** 组织ID */
    group_id: string;
  };

  type platformIamGroupDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamGroupDetailRequest = {
    /** 组织ID */
    group_id: string;
  };

  type platformIamGroupDetailResponse = {
    /** 错误码 */
    code: number;
    data: platformIamGroupInfo;
    /** 错误信息 */
    msg: string;
  };

  type platformIamGroupEditRequest = {
    /** 组织ID */
    group_id: string;
    /** 组织名称 */
    group_name: string;
    /** 子组织 */
    sub_groups: platformIamGroupInfo[];
  };

  type platformIamGroupEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamGroupInfo = {
    /** 组织ID */
    group_id: string;
    /** 组织名称 */
    group_name: string;
    /** 父级ID */
    parent_id: string;
    /** 子组织 */
    sub_groups: platformIamGroupInfo[];
  };

  type platformIamGroupListRequest = {
    /** 绑定资源: 如果为空，绑定到该租户；非空则绑定到该资源 */
    bind_key: string;
    /** 组织名称 */
    group_name: string;
    /** 父级组织ID */
    parent_id: string;
  };

  type platformIamGroupListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 组织列表 */
    data: platformIamGroupInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamImportUserGroupRequest = {
    /** 导入数据 */
    data: platformIamUserGroupInfo[];
  };

  type platformIamImportUserGroupResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamLoginRequest = {
    /** 登录终端[web,android,ios,ipad,pc-windows10,...] */
    device: string;
    /** 登录方式[0-普通登录 1-LDAP登录 2-微信扫码登录 3-华为账号登录] */
    login_method: number;
    /** 登录密码 */
    password: string;
    /** 登录用户名 */
    username: string;
  };

  type platformIamLoginResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 刷新令牌 */
    refresh_token: string;
    /** 登录令牌 */
    token: string;
  };

  type platformIamLogoutRequest = Record<string, any>;

  type platformIamLogoutResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamMenuCreateRequest = {
    /** 菜单名称 */
    menu_name: string;
    /** 菜单路径 */
    menu_path: string;
    /** 父级资源ID */
    res_pid: string;
    /** 子菜单 */
    sub_menus: platformIamSubMenu[];
  };

  type platformIamMenuCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamMenuDeleteRequest = {
    /** 菜单ID */
    menu_id: string;
  };

  type platformIamMenuDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamMenuEditRequest = {
    /** 菜单ID */
    menu_id: string;
    /** 菜单名称 */
    menu_name: string;
    /** 菜单路径 */
    menu_path: string;
    /** 子菜单 */
    sub_menus: platformIamSubMenu[];
  };

  type platformIamMenuEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamMenuInfo = {
    /** 菜单ID */
    menu_id: string;
    /** 菜单名称 */
    menu_name: string;
    /** 菜单路径 */
    menu_path: string;
    /** 子菜单 */
    sub_menus: platformIamSubMenu[];
  };

  type platformIamMenuListRequest = {
    /** 菜单名称 */
    menu_name: string;
    /** 菜单路径 */
    menu_path: string;
    /** 父级资源ID */
    res_pid: string;
  };

  type platformIamMenuListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 菜单列表 */
    data: platformIamMenuInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamModuleCreateRequest = {
    /** 模块名称 */
    module_name: string;
    /** 模块路径 */
    module_path: string;
    /** 父级资源ID */
    res_pid: string;
    /** 子模块 */
    sub_modules: platformIamSubModule[];
  };

  type platformIamModuleCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamModuleDeleteRequest = {
    /** 模块ID */
    module_id: string;
  };

  type platformIamModuleDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamModuleEditRequest = {
    /** 模块ID */
    module_id: string;
    /** 模块名称 */
    module_name: string;
    /** 模块路径 */
    module_path: string;
    /** 子模块 */
    sub_modules: platformIamSubModule[];
  };

  type platformIamModuleEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamModuleInfo = {
    /** 模块ID */
    module_id: string;
    /** 模块名称 */
    module_name: string;
    /** 模块路径 */
    module_path: string;
    /** 子模块 */
    sub_modules: platformIamSubModule[];
  };

  type platformIamModuleListRequest = {
    /** 模块名称 */
    module_name: string;
    /** 模块路径 */
    module_path: string;
    /** 父级资源ID */
    res_pid: string;
  };

  type platformIamModuleListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 模块列表 */
    data: platformIamModuleInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamPermission = {
    /** 关键字 */
    key: string;
    /** 父级ID */
    parent_id: string;
    /** 权限ID */
    permission_id: string;
    /** 权限名 */
    permission_name: string;
    /** 资源路径 */
    resource_path: string;
    /** 资源类型 */
    resource_type: string;
    /** 子权限 */
    sub_permissions: platformIamPermission[];
  };

  type platformIamPermissionListRequest = {
    /** 父权限ID */
    parent_pid: string;
    /** 权限类型 */
    permission_type: string;
  };

  type platformIamPermissionListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 权限列表 */
    permission_list: platformIamPermission[];
  };

  type platformIamProjectCreateRequest = {
    /** 项目名称 */
    project_name: string;
    /** 项目路径 */
    project_path: string;
    /** 子项目 */
    sub_projects: platformIamSubProject[];
  };

  type platformIamProjectCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamProjectDeleteRequest = {
    /** 项目ID */
    project_id: string;
  };

  type platformIamProjectDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamProjectDetailRequest = {
    /** 项目ID */
    project_id: string;
  };

  type platformIamProjectDetailResponse = {
    /** 错误码 */
    code: number;
    data: platformIamProjectInfo;
    /** 错误信息 */
    msg: string;
  };

  type platformIamProjectEditRequest = {
    /** 项目ID */
    project_id: string;
    /** 项目名称 */
    project_name: string;
    /** 项目路径 */
    project_path: string;
    /** 子项目 */
    sub_projects: platformIamSubProject[];
  };

  type platformIamProjectEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamProjectInfo = {
    /** 项目ID */
    project_id: string;
    /** 项目名称 */
    project_name: string;
    /** 项目路径 */
    project_path: string;
    /** 子项目 */
    sub_projects: platformIamSubProject[];
  };

  type platformIamProjectListRequest = {
    /** 项目名称 */
    project_name: string;
    /** 项目路径 */
    project_path: string;
  };

  type platformIamProjectListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 项目列表 */
    data: platformIamProjectInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamQueryGroupsByUserRequest = {
    /** 用户ID */
    user_id: string;
  };

  type platformIamQueryRoleResourcesRequest = {
    /** 资源名称 */
    resource_name: string;
    /** 角色ID（必填） */
    role_id: string;
  };

  type platformIamQueryRoleResourcesResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 资源ID列表 */
    resource_list: platformIamResource[];
    /** 角色ID */
    role_id: string;
  };

  type platformIamQueryUserRolesRequest = {
    /** 角色名称 */
    role_name: string;
    /** 用户ID（必填） */
    user_id: string;
  };

  type platformIamQueryUserRolesResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 角色列表 */
    roles: platformIamRole[];
    /** 用户ID */
    user_id: string;
  };

  type platformIamRefreshTokenRequest = {
    /** 刷新令牌 */
    refresh_token: string;
  };

  type platformIamRefreshTokenResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 新Token */
    token: string;
  };

  type platformIamRemoveUserFromGroupRequest = {
    /** 组织ID */
    group_id: string;
    /** 用户ID集合 */
    user_ids: string[];
  };

  type platformIamRemoveUserFromGroupResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamResetPasswordRequest = {
    /** 重新输入密码 */
    confirm_pwd: string;
    /** 邮箱 */
    email: string;
    /** 新密码: 仅在verify_code不为空时有效 */
    password: string;
    /** 手机号 */
    phone: string;
    /** 重置密码令牌: 首次请求时为空,再次请求时携带从邮件或者手机获取到的验证码 */
    verify_code: string;
  };

  type platformIamResetPasswordResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamResource = {
    properties: platformIamresourceApi[];
    resource_id: string;
    resource_path: string;
  };

  type platformIamResourceCreateRequest = {
    /** 父级资源ID */
    parent_resource_id: string;
    /** 资源扩展属性集 */
    properties: Record<string, any>[];
    /** 资源名称 */
    resource_name: string;
    /** 资源路径 */
    resource_path: string;
    resource_type: platformIamResourceType;
    /** 租户ID */
    tenant_id: string;
  };

  type platformIamResourceCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 资源ID */
    resource_id: string;
  };

  type platformIamResourceDeleteRequest = {
    /** 资源ID */
    resource_id: string;
  };

  type platformIamResourceDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamResourceEditRequest = {
    /** 父级资源ID */
    parent_resource_id: string;
    /** 资源扩展属性集 */
    properties: Record<string, any>[];
    /** 资源ID */
    resource_id: string;
    /** 资源名称 */
    resource_name: string;
    /** 资源路径 */
    resource_path: string;
    resource_type: platformIamResourceType;
  };

  type platformIamResourceEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamResourceInfo = {
    /** 父级资源ID */
    parent_resource_id: string;
    /** 资源扩展属性集 */
    properties: Record<string, any>[];
    /** 资源ID */
    resource_id: string;
    /** 资源名称 */
    resource_name: string;
    /** 资源路径 */
    resource_path: string;
    resource_type: platformIamResourceType;
  };

  type platformIamResourceInfoRequest = {
    /** 资源ID */
    resource_id: string;
  };

  type platformIamResourceInfoResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    resource_info: platformIamResourceInfo;
  };

  type platformIamResourceListRequest = {
    /** 页数 */
    page: number;
    /** 父级资源ID */
    parent_resource_id: string;
    /** 资源名称 */
    resource_name: string;
    /** 资源路径 */
    resource_path: string;
    /** 资源类型 */
    resource_type: string;
    /** 条数 */
    size: number;
  };

  type platformIamResourceListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选资源条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 资源列表 */
    resource_list: platformIamResourceInfo[];
  };

  type platformIamResourceType =
    | 'RESOURCE_TYPE_UNSPECIFIED'
    | 'RESOURCE_TYPE_MENU'
    | 'RESOURCE_TYPE_MODEL'
    | 'RESOURCE_TYPE_APPLICATION'
    | 'RESOURCE_TYPE_DEVICE'
    | 'RESOURCE_TYPE_PROJECT';

  type platformIamRole = {
    id: string;
    name: string;
  };

  type platformIamRoleAssignPermissionRequest = {
    /** 权限ID列表 */
    permission_list: string[];
    /** 用户ID */
    role_id: string;
  };

  type platformIamRoleAssignPermissionResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamRoleCreateRequest = {
    /** 绑定资源: 如果为空，绑定到该租户；非空则绑定到该资源 */
    bind_key: string;
    /** 父级角色ID */
    parent_id: string;
    /** 权限列表 */
    permission_list: string[];
    /** 角色名称 */
    role_name: string;
    /** 租户ID */
    tenant_id: string;
  };

  type platformIamRoleCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 角色ID */
    role_id: string;
  };

  type platformIamRoleDeleteRequest = {
    /** 角色ID */
    role_id: string;
  };

  type platformIamRoleDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamRoleEditRequest = {
    /** 父级角色ID */
    parent_id: string;
    /** 权限列表 */
    permission_list: string[];
    /** 角色ID */
    role_id: string;
    /** 角色名称 */
    role_name: string;
  };

  type platformIamRoleEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamRoleInfo = {
    /** 父级角色ID */
    parent_id: string;
    /** 角色ID */
    role_id: string;
    /** 角色名称 */
    role_name: string;
    /** 子级角色信息 */
    sub_roles: platformIamRoleInfo[];
  };

  type platformIamRoleInfoRequest = {
    /** 角色ID */
    role_id: string;
  };

  type platformIamRoleInfoResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    role_info: platformIamRoleInfo;
  };

  type platformIamRoleListRequest = {
    /** 绑定资源: 如果为空，绑定到该租户；非空则绑定到该资源 */
    bind_key: string;
    /** 页数 */
    page: number;
    /** 角色名称 */
    role_name: string;
    /** 条数 */
    size: number;
  };

  type platformIamRoleListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选角色条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 角色信息列表 */
    role_list: platformIamRoleInfo[];
  };

  type platformIamRolePermissionListRequest = {
    /** 角色ID（必填） */
    role_id: string;
  };

  type platformIamRolePermissionListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 角色权限列表 */
    role_permissions: platformIamPermission[];
  };

  type platformIamStrategyCreateRequest = {
    /** 目标ID */
    dst_id: string;
    /** 策略名称 */
    name: string;
    /** 策略集合,一般为访问方法名，或者其他属性集合 */
    policy: string;
    /** 范围,如果是应用则填入对应AppKey */
    scope: string;
    /** 起始ID */
    src_id: string;
    /** 租户ID */
    tenant_id: string;
  };

  type platformIamStrategyCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamStrategyDeleteRequest = {
    /** 策略集 */
    strategies: platformIamStrategyInfo[];
  };

  type platformIamStrategyDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamStrategyInfo = {
    /** 目标ID */
    dst_id: string;
    /** 策略名称 */
    name: string;
    /** 策略集合,一般为访问方法名，或者其他属性集合 */
    policy: string;
    /** 范围,如果是应用则填入对应AppKey */
    scope: string;
    /** 起始ID */
    src_id: string;
    /** 自定义策略:原生gql语句，优先级最高 */
    strategies: string;
    /** 租户ID */
    tenant_id: string;
  };

  type platformIamStrategyListRequest = {
    /** 页数 */
    page: number;
    query_info: platformIamStrategyInfo;
    /** 条数 */
    size: number;
  };

  type platformIamStrategyListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 策略列表 */
    data: platformIamStrategyInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamStrategyUpdateRequest = {
    update_info: platformIamStrategyInfo;
  };

  type platformIamStrategyUpdateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamSubApplication = {
    /** 子应用名称 */
    sub_app_name: string;
    /** 子应用路径 */
    sub_app_path: string;
  };

  type platformIamSubMenu = {
    /** 子菜单名称 */
    sub_menu_name: string;
    /** 子菜单路径 */
    sub_menu_path: string;
  };

  type platformIamSubModule = {
    /** 模块接口 */
    api: string;
    /** 子模块ID */
    id: string;
    /** 关键字 */
    key: string;
    /** 子模块名称 */
    name: string;
  };

  type platformIamSubProject = {
    /** 子项目名称 */
    sub_project_name: string;
    /** 子项目路径 */
    sub_project_path: string;
  };

  type platformIamTenantCreateRequest = {
    /** 管理员账号 */
    account: string;
    /** 管理员邮箱 */
    email: string;
    /** 是否启用。1启用，0未启用 */
    enabled_flag: boolean;
    /** 租户下的有效用户数，-1表示不限制 */
    limit_user: number;
    /** 管理员电话 */
    phone: string;
    /** 租户名 */
    tenant_name: string;
    /** 版本号 */
    version_number: string;
  };

  type platformIamTenantCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 租户ID */
    tenant_id: string;
  };

  type platformIamTenantDeleteRequest = {
    /** 租户ID */
    tenant_id: string;
    /** 租户名 */
    tenant_name: string;
  };

  type platformIamTenantDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamTenantEditRequest = {
    /** 是否启用。1启用，0未启用 */
    enabled_flag: boolean;
    /** 租户下的有效用户数，-1表示不限制 */
    limit_user: number;
    /** 租户ID */
    tenant_id: string;
    /** 租户名 */
    tenant_name: string;
    /** 版本号 */
    version_number: string;
  };

  type platformIamTenantEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamTenantInfo = {
    /** 租户创建时间 */
    created_at: string;
    /** 租户创建者 */
    created_by: string;
    /** 是否启用。1启用，0未启用 */
    enabled_flag: boolean;
    /** 租户下的有效用户数，-1表示不限制 */
    limit_user: number;
    /** 租户ID */
    tenant_id: string;
    /** 租户名 */
    tenant_name: string;
    /** 租户更新时间 */
    updated_at: string;
    /** 租户更新者 */
    updated_by: string;
    /** 版本号 */
    version_number: string;
  };

  type platformIamTenantInfoRequest = {
    /** 租户ID */
    tenant_id: string;
    /** 租户名 */
    tenant_name: string;
  };

  type platformIamTenantInfoResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    tenant_info: platformIamTenantInfo;
  };

  type platformIamTenantListRequest = {
    /** 是否启用 */
    enabled_flag: boolean;
    /** 租户名 */
    tenant_name: string;
  };

  type platformIamTenantListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选租户条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 租户信息列表 */
    tenant_infos: platformIamTenantInfo[];
  };

  type platformIamUpdatePasswordRequest = {
    /** 确认密码 */
    confirm_password: string;
    /** 新密码 */
    new_password: string;
    /** 旧密码 */
    old_password: string;
    /** 用户ID */
    user_id: string;
  };

  type platformIamUpdatePasswordResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamUserAssignRoleRequest = {
    /** 角色ID列表 */
    role_id_list: platformIamAssignRole[];
    /** 角色来源ID（来自某个租户、某个组织架构，或其他LDAP等等） */
    source_id: string;
    /** 用户ID */
    user_id: string;
  };

  type platformIamUserAssignRoleResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamUserCreateRequest = {
    /** 详细地址 */
    address: string;
    /** 邮箱 */
    email: string;
    gender: platformIamGender;
    /** 用户头像地址 */
    image_url: string;
    /** 租户空间（只有平台管理员填） */
    namespace: string;
    /** 用户昵称 */
    nick_name: string;
    /** 密码 */
    password: string;
    /** 手机号 */
    phone: string;
    /** 用户类型（1预置超管，2普通管理员，3普通用户） */
    user_type: number;
    /** 用户名 */
    username: string;
  };

  type platformIamUserCreateResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    /** 用户ID */
    user_id: string;
  };

  type platformIamUserDeleteRequest = {
    /** 用户ID */
    user_id: string;
  };

  type platformIamUserDeleteResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamUserEditRequest = {
    /** 详细地址 */
    address: string;
    /** 邮箱 */
    email: string;
    gender: platformIamGender;
    /** 用户头像地址 */
    image_url: string;
    /** 用户昵称 */
    nick_name: string;
    /** 手机号 */
    phone: string;
    /** 用户状态（1正常，2在线，0离线，-1冻结，-2已删除，。。。） */
    state: number;
    /** 用户ID */
    user_id: string;
    /** 用户类型（1预置超管，2普通管理员，3普通用户） */
    user_type: number;
    /** 用户名 */
    username: string;
  };

  type platformIamUserEditResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamUserGroupInfo = {
    /** 组织ID */
    group_id: string;
    /** 组织名称 */
    group_name: string;
    /** 子组织信息 */
    sub_groups: platformIamUserGroupInfo[];
    /** 用户信息列表 */
    user_infos: platformIamUserInfo[];
  };

  type platformIamUserGroupListRequest = {
    /** 组织ID */
    group_id: string;
    /** 组织名称 */
    group_name: string;
    /** 父级组织ID */
    parent_id: string;
  };

  type platformIamUserGroupListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选条数 */
    count: number;
    /** 组织列表 */
    data: platformIamUserGroupInfo[];
    /** 错误信息 */
    msg: string;
  };

  type platformIamUserInfo = {
    /** 详细地址 */
    address: string;
    /** 国家区号 */
    country_code: string;
    /** 创建时间 */
    created_at: string;
    /** 邮箱 */
    email: string;
    gender: platformIamGender;
    /** 用户头像地址 */
    image_url: string;
    /** 租户空间 */
    namespace: string;
    /** 用户昵称 */
    nick_name: string;
    /** 手机号 */
    phone: string;
    /** 用户状态（0正常，1在线，2离线，-1冻结，-2已删除，。。。） */
    state: number;
    /** 更新时间 */
    updated_at: string;
    /** 用户ID */
    user_id: string;
    /** 用户类型（1预置超管，2普通管理员，3普通用户） */
    user_type: number;
    /** 用户名 */
    username: string;
    /** 认证方式[2^0:邮箱认证|2^1:手机号认证|2^2:微信认证|2^3:华为认证|2^4:字节认证。。。] */
    verified: number;
  };

  type platformIamUserInfoRequest = {
    /** 用户ID */
    user_id: string;
  };

  type platformIamUserInfoResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
    user_info: platformIamUserInfo;
  };

  type platformIamUserListRequest = {
    /** 用户邮箱 */
    email: string;
    /** 租户空间 */
    namespace: string;
    /** 页数 */
    page: number;
    /** 手机号 */
    phone: string;
    /** 条数 */
    size: number;
    /** 用户状态（0正常，1在线，2离线，-1冻结，-2已删除，。。。） */
    state: number;
    /** 用户类型（1预置超管，2普通管理员，3普通用户） */
    user_type: number;
    /** 用户名 */
    username: string;
  };

  type platformIamUserListResponse = {
    /** 错误码 */
    code: number;
    /** 筛选用户条数 */
    count: number;
    /** 错误信息 */
    msg: string;
    /** 用户信息列表 */
    user_infos: platformIamUserInfo[];
  };

  type platformIamVerifyUserEmailRequest = {
    /** 新邮箱 */
    new_email: string;
    /** 旧邮箱 */
    old_email: string;
    /** 用户ID */
    user_id: string;
    /** 验证码 */
    verify_code: string;
  };

  type platformIamVerifyUserEmailResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamVerifyUserPhoneRequest = {
    /** 新手机号 */
    new_phone: string;
    /** 旧手机号 */
    old_phone: string;
    /** 用户ID */
    user_id: string;
    /** 验证码 */
    verify_code: string;
  };

  type platformIamVerifyUserPhoneResponse = {
    /** 错误码 */
    code: number;
    /** 错误信息 */
    msg: string;
  };

  type platformIamresourceApi = {
    access_type: platformIamAccess;
    api: string;
    key: string;
  };

  type protobufNullValue = 'NULL_VALUE';
}
