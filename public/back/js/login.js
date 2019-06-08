$(function () {
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '用户名长度必须在2-6位'
                    },
                    eallback:{
                        message:'用户名不存在'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '密码长度必须是6-12位'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        }
    })
    // 
    $('#form').on('success.form.bv', function (e) {
        e.preventDefault();
        console.log('校验成功后的表单提交被阻止了');

        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            data: $('form').serialize(),
            dataType: 'json',
            success: function (info) {
                console.log(info);
                if (info.success) {
                    location.href = 'index.html';
                }
                if (info.error === 1000) {
                    alert('当前用户名不存在');
                    // $('#form').data("bootstrapValidator").updateStatus("username", "INVALID", "callback");

                }
                if (info.error === 1001) {
                    alert('密码错误');
                    // $('#form').data("bootstrapValidator").updateStatus("password", "INVALID", "callback")

                }
            }
        })
    });
    // 重置功能实现
    $('[type=reset]').click(function () {
        console.log(111);
        $('#form').data('bootstrapValidator').resetForm();

    })

})