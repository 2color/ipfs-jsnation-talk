import { verifiedFetch } from '@helia/verified-fetch'

export default {
  handler: async (args, session) => {
    if (args._[0] === 'fetch') {
      const res = await verifiedFetch(args._[1])
      const obj = await res.json()
      session.api.print(JSON.stringify(obj))
      return
    }

    if (args._.length === 0) {
      session.api.print(`<pre>
Usage: helia <command>

Commands:<br />
  fetch ipfs://CID     Fetch content by CID from the IPFS network with @helia/verified-fetch

Example:
  helia fetch ipfs://baguqeeradnk3742vd3jxhurh22rgmlpcbzxvsy3vc5bzakwiktdeplwer6pa
</pre>`)
      return
    }
  },
  args: {
    // The optional args object will be passed as the `opts` argument to yargs-parser.
    // See https://www.npmjs.com/package/yargs-parser#requireyargs-parserargs-opts
    string: [
      0, 1
    ]
  }
}
