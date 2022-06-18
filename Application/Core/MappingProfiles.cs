using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Travel, Travel>();
            CreateMap<Stories,Stories>();
             CreateMap<ArtCulture,ArtCulture>();
             CreateMap<TravelNews,TravelNews>();
        }
    }
}