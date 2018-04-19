class Samples{
    constructor(inputJson){
        this.input = inputJson
        this.sampleDict = JSON.parse(JSON.stringify(this.input)); //load json file (already is JSON when passed in??)
        this.qualityTest()
        this.completeSampleDict = this.completeSamples();
    }
}

Samples.prototype.qualityTest =  function(){
    var experiments = this.filterDictionary(this.sampleDict, 'isExperiment', true)
    var experimentNoList = []
    for (key in Object.keys(experiments)){
        if (experiments[key].get('experimentNo', false)){
            experimentNoList.append(experiments[key].get('experimentNo'))
        }else{
            console.log('Experiment must have a field of "experimentNo"')
        }
    }
    if (experimentNoList.length != new Set(experimentNoList).length){
        console.log(experimentNoList)
        console.log('Duplicated experiment no was found!')
    }

}

Samples.prototype.key2attributes = function(key){
    function recursiveBase(d){
    if(d.get('base', false)){
        baseD = copy.copy(this.sampleDict[d['base']])
        d_updatedWithBase = copy.copy(recursiveBase(baseD))
        d_updatedWithBase.update(d)
        return d_updatedWithBase
    }
    return d
    }
singleSampleDict = this.sampleDict[key]
completeSampleDict = recursiveBase(singleSampleDict)
return completeSampleDict
}

Samples.prototype.completeSamples = function(){
    completeDict = {}
    console.log(this.sampleDict)
    console.log(Object.keys(this.sampleDict))

    for (var key in this.sampleDict){
        if(this.sampleDict.hasOwnProperty(key)){
        console.log('key in for loop: ' + key)
        sample = this.sampleDict[key]
        if (sample.get('template', false) != true){
            completedSample = this.key2attributes(key)
            completeDict[key] = completedSample
        }
    }
    }
    return completeDict
}

Samples.prototype.filterDictionary = function(dictionary, key, value){
    var dict = {};
    
    for (const [k, v] of Object.entries(dictionary)){
        if(key in Object.keys(value) && v[key] === value){
            dict.k = {key : value};
        }
    }
    return dict;
}

Samples.prototype.getSamplesByKey = function(key, value){
    return this.filterDictionary(this.completeSampleDict, key, value)    
}

Samples.prototype.getSamplesByExperimentName = function(experimentName){
    return this.getSamplesByKey('experiment', experimentName)
}

Samples.prototype.getSamplesByExperimentNo = function(experimentNo){
    return this.getSamplesByKey('experimentNo', experimentNo)
    
}

Samples.prototype.experimentNoAndNo2id = function(experimentNo, no){
    filteredByExperiment = this.getSamplesByExperimentNo(experimentNo)
    filteredByNo = this.filterDictionary(filteredByExperiment, 'no', no)
    if (filteredByNo.keys().length != 1){
        console.log('Expected 1 but got ' + String(filteredByNo.keys().length) + ' samples!')
    }
    return filteredByNo.keys()[0]
}

Samples.prototype.experiment2sampleNoList = function(experimentNo){
    noList = []
    experimentSamples = this.getSamplesByExperimentNo(experimentNo)
    for(key in experimentSamples.keys()){
        noList.append(experimentSamples[key]['no'])
    }
    return sorted(noList)
}


//Paths class

class Paths{

    constructor(inputJson){
        this.input = inputJson
        this.pathDict = JSON.parse(this.input)
    }
}

Paths.prototype.genome2fullPaths = function(genome){
    completeDict = {}
    for (key in this.pathDict[genome].keys()){
        completeDict[key] = os.path.join(this.pathDict[this.pathDict[genome][key]['base']], this.pathDict[genome][key]['location'])
    }
    return completeDict
}

Paths.prototype.getGenome = function(self, genome){
    return this.genome2fullPaths(genome)
}

Paths.prototype.getPath = function(self, genome, key){
    return this.getGenome(genome)[key]
    
}

Paths.prototype.test_paths = function(){
    pathClass = paths('reference.json')
    console.assert(pathClass.getPath('hg19', 'bowtie2') === '/proj/seq/data/HG19_UCSC/Sequence/Bowtie2Index/genome', 'assertion thrown')
}

Paths.prototype.test_samples = function(){
    sampleClass = samples('sample.json')
}

