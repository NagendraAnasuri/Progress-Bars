import ProgressBar from './components/ProgressBar';
import ConfigurableProgressBar from './components/ConfigurableProgressBar';
import GradeProgressBar from './components/GradeProgressBar';
import InteractiveProgressBar from './components/InteractiveProgressBar'; 
import './App.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-8 mx-auto">Progress Bar Variations Demo</h1>
      <div className='text-left'>
        <h1 className='text-xl font-bold'>Basic Progress bar</h1>
        <p>We can call it by simply providing the percentage value</p>
        <ProgressBar value={80} />
        <ProgressBar value={65} />
        <ProgressBar value={39} />
      </div>
      <hr className="my-6 w-[500px]" />

      <div className='text-left'>
        <h1 className='text-xl font-bold'>Grading System Progress Bar</h1>
        <GradeProgressBar
          value={55}
          grades={{ dist: 90, average: 60, pass: 40, fail: 0 }}
          colors={{
            dist: "green",
            average: "orange",
            pass: "blue",
            fail: "red",
          }}
        />
      </div>
      <hr className="my-6 w-[500px]" />

      <div className='text-left'>
        <h1 className='text-xl font-bold'>Interactive Progress Bar</h1>
        <InteractiveProgressBar />
      </div>
      <hr className="my-6 w-[500px]" />

      <div className='text-left'>
        <h1 className='text-xl font-bold'>Configurable Progress Bar</h1>
        <ConfigurableProgressBar
          value={45}
          maxValue={150}
          size="lg"
          color="warning"
          showLabel={true}
        />
      </div>

    </div>
  );
};

export default App;