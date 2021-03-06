import os
import sys
import tornado.wsgi
import tornado.ioloop
import tornado.web as web
import tornado.httpserver


static = os.path.join(os.path.dirname(__file__), "static")
templates = os.path.join(os.path.dirname(__file__), "templates")
sys.path.insert(0, os.path.join(os.path.abspath('.'), 'lib'))
port = 8888


class Application(web.Application):
    def __init__(self):
        handlers = [
            (r'/static/(.*)', web.StaticFileHandler),
            (r"/", HomeHandler),
        ]
        settings = dict(
            template_path=templates,
            static_path=static,
            debug=True
        )
        super(Application, self).__init__(handlers, **settings)


class HomeHandler(web.RequestHandler):
    def get(self):
        self.render('index.html')

def make_app():
   http_server = tornado.httpserver.HTTPServer(Application())
   http_server.listen(port)
   tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    make_app()
else:
   app = tornado.wsgi.WSGIAdapter(Application())
