import request from '@/utils/request'
export function policy() {
  return request({
    url:'/mall-admin/aliyun/oss/policy',
    method:'get',
  })
}
