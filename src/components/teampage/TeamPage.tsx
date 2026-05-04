import { teamList } from '@/src/api/teamApi';
import TeamCard from '@/src/cards/TeamCard';
import React from 'react';

const TeamPage = () => {
    return (
      
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 md:mt-4 mt-2 pb-10">
          
         {
            teamList.map(item => <TeamCard key={item.id} item={item}/>)
         }
           
        
       
      </div>
    );
};

export default TeamPage;