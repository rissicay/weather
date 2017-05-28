## How to run

`npm install`
`npm run watch`
`http://localhost:3010/`

## Discussion

So I decide to try a new framework for this test. Material-UI. I've been really 
wanting to try this one out for a long time now, but havent had the chance to.

A checked out the starter files in the zip and realised it was a template
from Tyler. I checked out his profile and saw he had the exact same thing but
for React instead. So I cloned that and started from there.

The starter template is quite far behind create-react-app style applications.
So I rewrote the webpack config, so its a bit closer to that style. I did this
because you get so much free stuff from using a create-react-app application.
The test framework is set up for you which is a pain to do without. Keeping
your npm dependencies are much easier if you use a create-react-app as well,
I noticed the webpack version of this starter was quite a bit behind. I 
removed express from this build as well, it was unnecessary.

I removed both bootstrap and jQuery, they are both unncessary if I'm using
Material UI. I stripped away the awkard jQuery loading React code, my best 
guess is theres some legacy code in the bigger code base that touches the DOM
inside React lifecycle methods.

I then went on to create the components needed for this app. They can be found 
inside the directories:

`src/app`
`src/app/components`

This framework has forces you down the facebook inline styles approach, the 
framework maintainers have admited this is a mistake and are migrating to your
tradition papa john style of scss with your components.

Things still incomplete in this submission:
- TEST FRAMEWORK AND TEST... this is really important, it'd just be easier to migrate
over to a create-react-app application then rig this up
- fetch and promises need a polyfil... so please use chrome. These two piece are simple to find.
- Dockerfile for deployment on cluster
- Environmental variable configuration inside webpack, this is important for other 
environments then just development/

Please checkout my other work, the specs can be found here https://github.com/rissicay/article/blob/master/specs.md
and the repo is at https://github.com/rissicay/article/

This submission I am using go and elasticsearch for a basic crud endpoint.
