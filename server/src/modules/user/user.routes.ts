export const registUserRoutes = router => {
    router.prefix('/users')

    router.get('/', function (ctx, next) {
        ctx.body = '获取所有用户'
    })

    router.get('/:id', function (ctx, next) {
        let id = ctx.params.id
        ctx.body = '获取单个用户'
    })

    router.post('/', function (ctx, next) {
        let data = ctx.request.body
        ctx.body = '新增用户'
    })

    router.put('/:id', function (ctx, next) {
        let id = ctx.params.id
        ctx.body = '修改用户信息'
    })

    router.delete('/:id', function (ctx, next) {
        let id = ctx.params.id
        ctx.body = '删除用户'
    })
};