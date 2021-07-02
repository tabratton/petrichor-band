module.exports = {
  pluginOptions: {
    s3Deploy: {
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'us-east-1',
      bucket: 'petrichor.band',
      createBucket: false,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: 'E2KW7FFHJHF47W',
      cloudfrontMatchers: '/*',
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
      gzip: true
    }
  }
}
