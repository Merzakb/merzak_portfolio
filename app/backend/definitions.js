module.exports = {
    User: {
      id: String,
      name: String,
      email: String,
      password: String
    },
    Project: {
      id: String,
      name: String,
      title: String,
      description: String,
      images: [String], 
      technologies: [String], 
      github_url: String,
      demo_url: String
    }
};
  