const KAFKA = {
    client: {
        clientId: 'log_pipeline',
        brokersList: ['kafka:9092'],
    },
    consumer: {
        groupId: 'dev-1',
        topic: 'logs-topic',
        fromBeginning: true,
    },
    producer: {
        topic: 'logs-topic',
    },
};

const ELASTICSEARCH = {
    node: 'http://esOne:9200',
    username: 'elastic',
    password: 'admin',
};

export default {
    KAFKA,
    ELASTICSEARCH,
};
