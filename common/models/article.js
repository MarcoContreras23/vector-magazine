'use strict';

module.exports = function (Article) {
    Article.sendEmail = (message, subject, emailAdresses, cb) => {
        Article.app.models.Email.send({
            to: emailAdresses,
            from: 'José Cruz',
            subject: subject,
            text: message,
            html: message
        }, function (err, mail) {
            console.log("Email sended...");
            if (err) return err;
        });
        cb(null, 'message sent:' + message);
    }

    Article.remoteMethod('sendEmail', {
        http: {
            path: '/sendEmail',
            verb: 'post'
        },
        description: [
            "Api to send email messages."
        ],
        accepts: [
            {
                arg: 'message',
                type: 'string',
                required: true
            },
            {
                arg: 'subject',
                type: 'string',
                required: true
            },
            {
                arg: 'emailAdresses',
                type: 'string',
                required: true
            }
        ],
        returns: {
            arg: 'Email',
            type: 'string'
        }

    });
};
