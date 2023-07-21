const cds = require('@sap/cds')


module.exports = function (){
    this.on('CREATE','Holes',(req,next)=>{
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
}