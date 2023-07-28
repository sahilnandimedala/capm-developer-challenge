const cds = require('@sap/cds')

module.exports = class CatalogService extends cds.ApplicationService{
    async init() {

        const remote = await cds.connect.to('RemoteService')
        this.on('*', 'Players', (req) => {
            console.log('>> delegating to remote service...')
            return remote.run(req.query)
        })


    this.on('CREATE','Holes',async function (req,next){
        const holeInfo = req.data
        if (holeInfo.score == 1) {
            holeInfo.result = 'hole in one'
        } else {
            switch (holeInfo.score - holeInfo.par) {
                case -3:
                    holeInfo.result = 'albatross'
                    break;
                case -2:
                    holeInfo.result = 'eagle'
                    break;
                case -1:
                    holeInfo.result = 'birdie'
                    break;
                case 0:
                    holeInfo.result = 'par'
                    break;
                case 1:
                    holeInfo.result = 'bogey'
                    break;
                case 2:
                    holeInfo.result = 'double boget'
                    break;
                case 3:
                    holeInfo.result = 'triple bogey'
                    break;
                default:
                    break;
            }
            
        }
        return next()
    }

    )

    return super.init()
}

}