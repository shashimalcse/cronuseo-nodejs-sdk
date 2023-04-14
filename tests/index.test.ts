import {Cronuseo} from '../src/index';
import { expect, test } from '@jest/globals';

test('check single permission', async () => {
  const cronuseo = new Cronuseo("http://localhost:8080/api/v1", "super", "JLE+1Z3c/jIQL+i+ORhI+jLbM5pXvdxNrKvIcrKVFss=");
  const response  = await cronuseo.CheckPermission("shashimal", "write", "doc")
  expect(response).toEqual(true);
});

