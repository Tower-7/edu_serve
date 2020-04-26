const Common = require('./common')
const Admin = require('../Models/admin')
module.exports = {
    //主页
    index: async ctx => {
        await ctx.render('admin/index',{
            
        })
    },
    // 注册
    sign_up: async ctx => {
        await Common.update(ctx,Admin)
    }
    
}