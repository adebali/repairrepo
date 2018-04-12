class Samples{

    constructor(inputJson){
        this.input = inputJson
        this.sampleDict = JSON.parse(this.input); //load json file
        this.qualityTest()
        this.completeSampleDict = this.completeSamples();
        
    }
}

Samples.prototype.qualityTest =  function(){
    var experiments = this.filterDictionary(this.sampleDict, 'isExperiment', True)
    var experimentNoList = []
    for (key in experiments.keys()){
        if (experiments[key].get('experimentNo', False)){
            experimentNoList.append(experiments[key].get('experimentNo'))
        }else{
            console.log('Experiment must have a field of "experimentNo"')
        }
    }
    if (experimentNoList.length != new Set(experimentNoList).length){
        print(experimentNoList)
        console.log('Duplicated experiment no was found!')
    }

}

Samples.prototype.key2attributes = function(key){
    function recursiveBase(d){
    if(d.get('base', False)){
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
    for (key in this.sampleDict.keys()){
        sample = this.sampleDict[key]
        if (sample.get('template', False) != True){
            completedSample = this.key2attributes(key)
            completeDict[key] = completedSample
        }
    }
    return completeDict
}

// Samples.prototype.filterDictionary = function(dictionary, key, value){
//     return {k : v for k,v in dictionary.iteritems() if key in v.keys() and v[key] == value}
// }

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