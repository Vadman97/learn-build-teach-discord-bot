import profile from '../profile';

jest.mock('discord.js', () => jest.fn());

describe('profile test', () => {
  it('should return the name of the command', () => {
    const name = profile.name;
    expect(name).toBe('profile');
  });

  it('should return the name the right description', () => {
    const description = profile.description;
    expect(description).toBe("Get a user's profile details");
  });

  it('should return the right options', () => {
    const options = profile.options[0];
    expect(options.name).toBe('username');
    expect(options.description).toBe('Tag the user you are looking for.');
    expect(options.required).toBe(false);
    expect(options.type).toBe('MENTIONABLE');
  });

  //TODO: uncomment this and add more tests after we mock out the full client
  // it.only('should return undefined user', async () => {
  //   const val = await profile.callback(
  //     MockCommandInteraction,
  //     MockCommandInteractionOptionResolver
  //   );
  //   expect(val).toBe(undefined);
  // });
});