![Count of Action Users](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Reedyuk/read-properties/main/read-properties.json)
# read-properties GitHub Action  

read-properties allows you to read key values from your .properties file on *Any* github platform e.g. MacOS, Linux, Windows

## Integrating with GitHub actions

GitHub actions are a flexible way to automatically build your project.
I have found working on several projects the need to change the version of the .properties file.

## Prerequisites

Make sure that you have

* a GitHub account with Actions enabled
* a project with a .properties file

## Inputs

### `path`

**Required** The path to properties file to read.

### `property`

**Required** The property you want to read.

## Outputs

### `value`

The value of the given property.

## Example usage

    - name: Read value from Properties-file
      id: read_property
      uses: Reedyuk/read-properties@v1.0.1
      with:
        path: './src/main/resources/application.properties'
        property: 'the.key.of.the.property'
    - name: Do something with your bumped release version
      run: echo ${{ steps.read_property.outputs.value }}
      # will print "the value of 'the.key.of.the.property'"
 
