import { ReturnValue } from '../models';
import express, { Request, Response } from 'express';
import { discordClient } from '../../utils/discord';
import { H } from '@highlight-run/node';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const retVal = new ReturnValue();
  let totalMembers = 0;
  try {
    throw new Error("James's code sucks");
    discordClient.guilds.cache.forEach((guild) => {
      totalMembers += guild.memberCount;
    });
    retVal.body.data = { totalMembers };
  } catch (error) {
    console.error(error);
    retVal.status = 500;
    retVal.body.err = 'Something went wrong :(';
    const parsedHeaders = H.parseHeaders(req.headers);
    H.consumeError(
      error as Error,
      parsedHeaders?.secureSessionId,
      parsedHeaders?.requestId
    );
  } finally {
    res.status(retVal.status).json(retVal.body);
  }
});

export default router;
