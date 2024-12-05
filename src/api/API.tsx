const token = import.meta.env.VITE_TOKEN;
console.log('GitHub Token:', token);

const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;


    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    return [];
  }
};

const searchGithubUser = async (username:string) => {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    console.log('Token:', token); // Log to see if token is being accessed
    console.log('Env:', import.meta.env); // Log to see all env variables

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    return {};
  }
};

export { searchGithub, searchGithubUser };
