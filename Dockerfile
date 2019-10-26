FROM ruby:2.6.5

ENV LANG C.UTF-8

RUN set -e \
    && apt-get update -y -qq \
    && apt-get install -y curl \
    && apt-get install -y build-essential libpq-dev \
    && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
    && echo "Asia/Tokyo" > /etc/timezone \
    && mkdir -p /var/app

WORKDIR /var/app

COPY . .
RUN bundle install -j8

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["rails", "s", "-b", "0.0.0.0"]
