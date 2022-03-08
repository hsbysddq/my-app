import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScoreFromLocalStorage } from '../../redux/actions/game';

function ScoreBoard() {
  const [scoreEffect, setScoreEffect] = useState('');
  const { score, result } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScoreFromLocalStorage(score));
  }, [dispatch, score]);

  return (
    <div
      className={`bg-transparent border-2 border-sky-500 flex flex-col items-center justify-center px-5 py-2 md:px-8 rounded-md transition ${scoreEffect} `}
    >
      <small className="text-neutral-score uppercase text-[10px] md:text-sm font-bold">
        score
      </small>
      <big className="text-neutral-dark text-4xl md:text-5xl font-bold -mt-1">
        {score}
      </big>
    </div>
  );
}

export default ScoreBoard;