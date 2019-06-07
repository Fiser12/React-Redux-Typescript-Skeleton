const enzyme = require('enzyme/build');
const Adapter = require('enzyme-adapter-react-16/build');

// Setup enzyme's react adapter
enzyme.configure({ adapter: new Adapter() });
