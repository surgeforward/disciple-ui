# Disciple UI

> Let me tell you: this app is awesome.

## Getting Started with Development

To get started, clone the repo and `cd` into the directory.

Then install [`npm`](https://www.npmjs.org/) modules (used for building) and [`bower`](http://bower.io/) components. Then run [`gulp`](http://gulpjs.com/) to build and "watch":

```bash
npm install
bower install
gulp
```

### Watching

Just running the default `gulp` task will build the project for development and watch files for changes and re-build the necessary components and auto-refresh the browser (there are no additional steps needed for this to work).

### Server

You can open another console and run the following to get a server to aid in working with an Angular single page app (SPA):

```bash
gulp serve
```

You can combine the `build + watch` task with the `serve` task into one command (note the `--`):

```bash
gulp --serve
```

It uses port `1337` by default and you can go to http://localhost:1337 to see the site!

If you need to use a differnt port, you can manually specify one:

```bash
gulp --serve=1234
```

(Use Ctrl-C to stop the `serve`r/`watch`)


### Reverse Proxy

If you want to create a more memorable URL, you can use [`nginx`](http://nginx.org/) (or something similar) as a reverse proxy. Here's a sample config for that:

```nginx
server {
    listen 80;
    server_name disciple.dev;

    location / { 
        proxy_set_header    X-Real-IP $remote_addr;
        proxy_set_header    X-Forwarded-For $remote_addr;

        proxy_pass          http://localhost:1337; # change this port if you specify a manual port
        proxy_set_header    Host $host;
    }   
}
```

and then you can create an entry in your `hosts` file (located in `/etc/hosts` on Macs):

```
127.0.0.1    disciple.dev
```