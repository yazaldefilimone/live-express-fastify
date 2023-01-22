import { app } from './fastify/app';

const port = 3003;
app.listen(port, () => console.log(`Server Running at ${port}`));
