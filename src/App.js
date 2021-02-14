import { 
  MenuItem, 
  FormControl, 
  Select 
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__header">
      <h1>COVID 19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Worldwide</MenuItem>
        </Select>
      </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}
      
      {/* Map */}
    </div>
  );
}

export default App;