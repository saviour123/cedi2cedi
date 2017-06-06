import os
import tornado.ioloop
import tornado.web as web


static_dir = os.path.join(os.path.dirname(__file__), "static")
port = 8888
route_params = {'path': static_dir, 'default_filename' : "index.html"}


class MainHandler(web.RequestHandler):
    def get(self):
        self.render('index.html')

handlers = [
    (r'/(.*)', web.StaticFileHandler, route_params),
    (r"/", MainHandler)
    ]

settings = {
    "static_path": static_dir,
    "template_path": static_dir,
    "debug": True,
}



def make_app():
    app = web.Application(handlers, **settings)
    app.listen(port)
    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    make_app()
