import '@testing-library/jest-dom';
import { server } from 'core/utils/test/mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
